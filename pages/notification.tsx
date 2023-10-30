import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import Notification from "~/components/Notification";

const NotificationPage: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Notification />
    </Layout>
  );
};
export default NotificationPage;
