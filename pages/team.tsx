import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import Team from "~/components/Team";

const TeamPage: NextPage = () => {
    return (
        <Layout title="Home Page">
            <Team />
        </Layout>
    )
}
export default TeamPage;