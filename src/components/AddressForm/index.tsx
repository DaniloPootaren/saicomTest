import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";

import { validationSchema } from "./validationSchema";
import { Address, Country } from "../../models";

import api from "../../api";

import { updateAddress } from "../../store/actions";

type AddressFormProps = {
  initialValues?: Address;
  callback?: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressForm = (props: AddressFormProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const [countryOptions, setCountryOptions] = useState([] as string[]);
  const [provinces, setProvinces] = useState([] as any[]);

  const { initialValues, callback } = props;

  const defaultValues = initialValues
    ? initialValues
    : {
        line1: "",
        line2: "",
        suburb: "",
        city: "",
        province: "",
        postalCode: "",
        country: "",
      };

  useEffect(() => {
    api.loadCountries().then((response) => {
      const countries = response.data.countries;

      countries.forEach((country: Country) => {
        setCountryOptions((prev: string[]) => [
          ...prev,
          `${country.code}, ${country.name}`,
        ]);
      });

      setData(countries);
    });
  }, []);

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: (values): any => {
      values.addressId
        ? dispatch(updateAddress(values))
        : api.createAddress(values).then(() => navigate("/view"));

      if (callback) {
        callback();
      }
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

  useEffect(() => {
    data.forEach((country: Country) => {
      if (country.name === formik.values.country.split(",")[1].trim()) {
        setProvinces(country.provinces.map((a) => `${a.code}, ${a.name}`));
      }
    });
  }, [formik.values.country, initialValues ? data : null]);


  return (
    <Container>
      {data && (
        <>
          <Input
            label="Line 1"
            error={!!formik.errors.line1}
            errorMessage={formik.errors.line1}
            mandatory
            name="line1"
            onChange={formik.handleChange}
            value={formik.values.line1}
          />
          <Input
            label="Line 2"
            error={!!formik.errors.line2}
            errorMessage={formik.errors.line2}
            mandatory
            name="line2"
            onChange={formik.handleChange}
            value={formik.values.line2}
          />
          <Input
            label="Suburb"
            error={!!formik.errors.suburb}
            errorMessage={formik.errors.suburb}
            mandatory
            name="suburb"
            onChange={formik.handleChange}
            value={formik.values.suburb}
          />
          <Input
            label="City"
            error={!!formik.errors.city}
            errorMessage={formik.errors.city}
            mandatory
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <Dropdown
            options={provinces}
            error={!!formik.errors.province}
            id="province"
            placeholder="Province"
            errorMessage={formik.errors.province}
            name="province"
            onChange={formik.handleChange}
            value={formik.values.province}
            disabled={formik.values.country === ""}
          />
          <Input
            label="Postal Code"
            error={!!formik.errors.postalCode}
            errorMessage={formik.errors.postalCode}
            mandatory
            name="postalCode"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
          />
          <Dropdown
            options={countryOptions}
            error={!!formik.errors.country}
            id="country"
            placeholder="Country"
            errorMessage={formik.errors.country}
            name="country"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          <Button
            label="Continue"
            onClick={formik.handleSubmit}
            disabled={!formik.dirty}
          />
        </>
      )}
    </Container>
  );
};

export default AddressForm;
