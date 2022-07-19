import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import { useRouter } from "next/router";

import css from "../styles/Login.module.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { Input } from "@mui/material";

const Signin = () => {
  const initialState = { username: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { username, password } = userData;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    /*   dispatch({ type: 'NOTIFY', payload: {} }) */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: "http://localhost:5000/admin/login",
      data: {
        ...userData,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    localStorage.setItem("firstLogin", true);
    window.location.href = "/listen";
  };

  return (
    <div>
      <Head>
        <title>Sign in Page</title>
      </Head>

      <form className={css.mx_auto} onSubmit={handleSubmit}>
        <div className={css.form_group}>
          <Input
            type="text"
            name="username"
            required
            placeholder="Username"
            value={userData.username}
            onChange={handleChangeInput}
          />
        </div>
        <div className={css.form_group}>
          <Input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={userData.password}
            onChange={handleChangeInput}
          />
        </div>

        <Button type="submit" variant="contained">
          Login
        </Button>
        <p className="my-2">
          You don't have an account?{" "}
          <Link href="/register">
            <a style={{ color: "crimson" }}>Register Now</a>
          </Link>
        </p>
        <p className="my-2">
          dont want to register ?{" "}
          <Link href="/listen">
            <a style={{ color: "crimson" }}>Listen Now</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
