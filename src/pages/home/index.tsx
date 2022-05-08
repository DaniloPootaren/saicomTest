import { useFormik } from "formik";
import styled from "styled-components";

import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import { validationSchema } from "./validationSchema";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const formik = useFormik({
    initialValues: {
      line1: "",
      line2: "",
      suburb: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

  const options = ["Mauritius", "United State", "Russia", "Ukrain"];
  return (
    <Layout headerTitle="Customer Details">
      <Container>
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
          errorMessage={formik.values.line2}
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
          options={options}
          error={!!formik.errors.province}
          id="province"
          placeholder="Province"
          errorMessage={formik.errors.province}
          name="province"
          onChange={formik.handleChange}
          value={formik.values.province}
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
          options={options}
          error={!!formik.errors.country}
          id="country"
          placeholder="Country"
          errorMessage={formik.errors.country}
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        <Button label="Continue" onClick={formik.handleSubmit} />
      </Container>
    </Layout>
  );
};

export default Home;
