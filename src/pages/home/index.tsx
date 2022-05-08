import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Layout from "../../components/Layout";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Home = () => {
  const options = ["Mauritius", "United State", "Russia", "Ukrain"];
  return (
    <Layout headerTitle="Customer Details">
      <Container>
        <Input
          label="Name"
          error={true}
          errorMessage="Invalid name"
          mandatory
        />
        <Dropdown
          options={options}
          error={true}
          id="postal code"
          placeholder="Country"
          errorMessage="Invalid country"
        />
      </Container>
    </Layout>
  );
};

export default Home;
