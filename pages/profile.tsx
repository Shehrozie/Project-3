import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import Profile from "~/components/Profile";

const ProfilePage: NextPage = () => {
  return (
    <Layout title="Home Page">
      <Profile />
    </Layout>
  );
};
export default ProfilePage;
