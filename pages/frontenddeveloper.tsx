import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import Notification from "~/components/Notification";
import FrontEndDeveloper from "~/components/FrontEnddeveloper/FrontEndDeveloper";

const FrontEndDevelopmentPage: NextPage = () => {
    return (
        <Layout title="Home Page">
            <FrontEndDeveloper />
        </Layout>
    )
}
export default FrontEndDevelopmentPage;