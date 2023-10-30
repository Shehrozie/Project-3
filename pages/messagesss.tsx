import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import Messages from "~/components/Message";

const MessagePage: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Messages />
    </Layout>
  );
};
export default MessagePage;
