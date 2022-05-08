import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Layout from "../../components/Layout";

import styled from "styled-components";
import Button from "../../components/Button";

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
          error={false}
          errorMessage="Invalid name"
          mandatory
        />
        <Dropdown
          options={options}
          error={false}
          id="postal code"
          placeholder="Country"
          errorMessage="Invalid country"
        />
        <Button label="Continue"/>
      </Container>
    </Layout>
  );
};

export default Home;
