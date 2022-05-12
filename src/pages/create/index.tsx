import styled from "styled-components";

import AddressForm from "../../components/AddressForm";
import Layout from "../../components/Layout";
import {device} from "../../utils/styles/breakpoints"

const StyledAddressForm = styled.div`

  @media ${device.laptop} {
    margin: 7em 20em 0 20em;
  }
`;

const Create = () => {
  return (
    <Layout headerTitle="Add Address" showHeader>
      <StyledAddressForm>
        <AddressForm />
      </StyledAddressForm>
    </Layout>
  );
};

export default Create;
