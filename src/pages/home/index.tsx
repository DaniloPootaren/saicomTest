import Input from "../../components/Input";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout  headerTitle="Customer Details">
      <Input label="Name" error={true} errorMessage="Invalid name" mandatory />
      <Input label="Name" error={true} errorMessage="Invalid name" mandatory />
      <Input label="Name" error={true} errorMessage="Invalid name" mandatory />
      <Input label="Name" error={true} errorMessage="Invalid name" mandatory />
    </Layout>
  );
};

export default Home;
