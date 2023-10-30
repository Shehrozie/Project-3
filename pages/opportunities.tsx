import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import Opportunities from "~/components/Opportunities";

const OpportunitiesPage: NextPage = () => {
    return (
        <Layout title="Home Page">
            <Opportunities />
        </Layout>
    )
}
export default OpportunitiesPage;