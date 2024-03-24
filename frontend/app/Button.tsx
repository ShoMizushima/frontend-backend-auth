"use client";

import { FunctionComponent } from "react";
import axios from "axios";

interface Props {
  title: string;
}

const buttonClick = () => {
  axios
    .get("http://localhost:8080/get", {
      withCredentials: true,
    })
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};

const Button: FunctionComponent<Props> = ({ title }) => {
  return (
    <button
      onClick={buttonClick}
      style={{ backgroundColor: "red", color: "yellow" }}
    >
      {title}
    </button>
  );
};

export default Button;
