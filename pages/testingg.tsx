import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import Team from "~/components/Team";
import Test from "~/components/Testing";

const TestPage: NextPage = () => {
    return (
        <Layout title="Home Page">
            <Test />
        </Layout>
    )
}
export default TestPage;