import { NextPage } from "next";
import React from "react";
import Layout from "~/components/layouts/Layout";
import TalentReview from "~/components/TalentReview";

const TalentReviewsPage: NextPage = () => {
    return (
        <Layout title="Home Page">
            <TalentReview/>
        </Layout>
    )
}
export default TalentReviewsPage;