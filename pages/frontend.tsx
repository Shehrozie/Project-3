import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import PixelsAndGraph from "~/components/PixelsAndGraphs";
import FrontEnds from "~/components/PixelsAndGraphs/FrontEnd";
import Notification from "~/components/Notification";
import FrontEndDeveloper from "~/components/FrontEnddeveloper/FrontEndDeveloper";

const PixelsAndGraphPage: NextPage = () => {
    return (
        <Layout title="Home Page">
            <PixelsAndGraph />
        </Layout>
    )
}
export default PixelsAndGraphPage;