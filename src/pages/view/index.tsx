import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { RootState } from "../../store";

const View = () => {
  const loading = useSelector((store: RootState) => store.address.loading);
  const data = useSelector((store: RootState) => store.address.addresses.data);

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
    <Layout headerTitle="View all addresses" showHeader>
      <h1>{data.length ? "Addresses" : "No records found."}</h1>
      <Table />
    </Layout>
  );
};

export default View;
