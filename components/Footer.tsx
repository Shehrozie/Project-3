import React from "react";

type Props = {
  name?: string;
};

const Footer = ({ name }: Props) => {
  return (
    <footer>
      <h1>This is Footer</h1>
    </footer>
  );
};

export default Footer;
