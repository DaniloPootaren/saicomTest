import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import Modal from "../Modal";
import AddressForm from "../AddressForm";
// utils, models etc..
import { Address } from "../../models";
import { colors } from "../../utils/styles/colors";
// Redux
import { fetchAddresses } from "../../store/actions";
import { RootState } from "../../store";

type TableProps = {};

type TableRowProps = {
  address: Address;
};

const TableComponent = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Header = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${colors.water_blue};
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
`;

const Cell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Row = styled.tr`
  height: 70px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;

const EditAddressDialog = (props: any) => {
  const { initialValues, onClose } = props;

  return (
    <Modal
      children={
        <>
          <h1>{`Update Address`}</h1>
          <AddressForm initialValues={initialValues} callback={onClose} />
        </>
      }
      onClose={onClose}
    />
  );
};

const TableRow = (props: TableRowProps) => {
  const { address } = props;
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Row key={address.addressId} onClick={() => setShowDialog(true)}>
        <Cell>{address.addressId}</Cell>
        <Cell>{address.line1}</Cell>
        <Cell>{address.line2}</Cell>
        <Cell>{address.city}</Cell>
        <Cell>{address.country}</Cell>
        <Cell>{address.postalCode}</Cell>
        <Cell>{address.province}</Cell>
        <Cell>{address.suburb}</Cell>
      </Row>
      {showDialog ? (
        <EditAddressDialog
          initialValues={address}
          onClose={() => setShowDialog(false)}
        />
      ) : null}
    </>
  );
};

const Table = (_props: TableProps) => {
  const dispatch = useDispatch();
  const data = useSelector((store: RootState) => store.address.addresses.data);

  useEffect(() => {
    dispatch(fetchAddresses(0));
  }, []);

  const headers: string[] = [
    "Address Id",
    "Line 1",
    "Line 2",
    "City",
    "Country",
    "Postal Code",
    "Province",
    "Suburb",
  ];

  return (
    <>
      <TableComponent>
        <Row>
          {headers.map((header, index) => (
            <Header key={`${index}-${header}`}>{header}</Header>
          ))}
        </Row>
        {data.map((addr) => {
          return <TableRow key={addr.addressId} address={addr} />;
        })}
      </TableComponent>
    </>
  );
};

export default Table;
