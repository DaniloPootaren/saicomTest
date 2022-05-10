import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { RootState } from "../../store";

const View = () => {
  const loading = useSelector((store: RootState) => store.address.loading);

  useEffect(()=>{
    toast("Records loaded.", {
      theme: "light",
      type:"info",
      autoClose: 1000,
      position: "bottom-right",
      
    });
    toast.clearWaitingQueue();
  }, [loading])

  return (
    <Layout>
      <h1>Addresses</h1>
      <Table />
    </Layout>
  );
};

export default View;
