import { NextPage } from "next";
import Layout from "~/components/layouts/Layout";
import ProfileSetting from '../../components/Account/Profile';

const ProfilePage: NextPage = () => {
  return (
    <Layout title="Profile Settings">
      <ProfileSetting />
    </Layout>
  )
}

export default ProfilePage;
