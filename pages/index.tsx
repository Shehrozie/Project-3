import type { NextPage } from "next";
import Layout from "@/components/layouts/Layout";
import Home from "~/components/Home";
import Profile from "~/components/Profile";

const HomePage: NextPage = () => {
  // let a = 3;
  // if (a < 5) {
  //   console.log("A Is Smaller Than 5")
  // } else if (a > 5) {
  //   console.log("A Is Not Bigger Than 5")
  // } else {
  //   console.log("A Is Equal To 5");
  // }

  // let day = 'Saturday1';

  // switch (day) {
  //   case 'Sunday':
  //     console.log("It is a Sunday.");
  //     break;
  //   case 'Monday':
  //     console.log("It is a Monday.");
  //     break;
  //   case 'Tuesday':
  //     console.log("It is a Tuesday.");
  //     break;
  //   case 'Wednesday':
  //     console.log("It is a Wednesday.");
  //     break;
  //   case 'Thursday':
  //     console.log("It is a Thursday.");
  //     break;
  //   case 'Friday':
  //     console.log("It is a Friday.");
  //     break;
  //   case 'Saturday':
  //     console.log("It is a Saturday.");
  //     break;
  //   default:
  //     console.log("No such day exists!");
  //     break;
  // }
  return (
    <Layout title="Home Page">
      <Home />
    </Layout>
  );
};

export default HomePage;
