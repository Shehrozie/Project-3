import { NextPage } from "next";
import React from "react";
import Accounts from "~/components/Account";
import Layout from "~/components/layouts/Layout";

const AccountPage: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Accounts />
    </Layout>
  );
};
export default AccountPage;
