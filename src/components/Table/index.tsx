import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';

// components
import Modal from "../Modal";
import AddressForm from "../AddressForm";
import InfiniteScroller from "../InfiniteScroller";
import Loader from "../Loader";
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
        <Cell>{address.country}</Cell>
        <Cell>{address.province}</Cell>
        <Cell>{address.line1}</Cell>
        <Cell>{address.line2}</Cell>
        <Cell>{address.city}</Cell>
        <Cell>{address.postalCode}</Cell>
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
  const meta = useSelector((store: RootState) => store.address.addresses.meta);

  useEffect(() => {
    dispatch(fetchAddresses(0));
  }, []);

  const headers: string[] = [
    "Country",
    "Province",
    "Line 1",
    "Line 2",
    "City",
    "Postal Code",
    "Suburb",
  ];

  const loadMoreData = () => {
    const { totalPages, currentPage } = meta as {
      totalPages: number;
      currentPage: number;
    };
    if (totalPages > currentPage) dispatch(fetchAddresses(currentPage + 1));
  };

  return (
    <>
      {data.length ? (
        <InfiniteScroller
          callback={loadMoreData}
          children={
            <TableComponent>
              <thead>
                <Row>
                  {headers.map((header, index) => (
                    <Header key={`${index}-${header}`}>{header}</Header>
                  ))}
                </Row>
              </thead>
              <tbody>
                {data.map((addr) => {
                  return <TableRow key={nanoid()} address={addr} />;
                })}
              </tbody>
            </TableComponent>
          }
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Table;
