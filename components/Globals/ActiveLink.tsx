// Change Style Of UnorderList Or NavLinks When Onclick Start
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  path?: string | string[];
};

const ActiveLink: React.FC<Props> = ({ title, path }) => {
  const router = useRouter();

  if (typeof path === "string") {
    if (path.toLowerCase() === router.pathname.toLowerCase()) {
      return (
        <li>
          <Link href={path}>
            <a className="border-b-4 md:border-b-blue-600 pb-7 font-bold md:text-[rgb(52,56,67)] text-blue-700">
              {title}
            </a>
          </Link>
        </li>
      );
    } else {
      return (
        <>
          <li>
            <Link href={path}>
              <a className="md:hover:border-b-4 border-b-blue-600 pb-7 font-bold text-gray-600 hover:text-blue-700">
                {title}
              </a>
            </Link>
          </li>
        </>
      );
    }
  }

  return <></>;
};

export default ActiveLink;

// Change Style Of UnorderList Or NavLinks When Onclick End
