import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import LayoutSite from "../../../layout/LatoutSite";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./index.module.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SiteLoginPage = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleMouseUpPassword = () => setShowPassword(!showPassword);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 3 characters")
        .required("Required"),
    }),
    onSubmit: async(values) => {
      await axios.post('http://localhost:8080/api/auth/signin', {...values})
      .then(res => {
        console.log('user logged in successfully! - res: ', res);
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate('/')
      })
      .catch((error) => {
      console.log('error: ',error);
      })
    },
  });
  return (
    <>
    <Helmet>
    <title>Log In | Shop Your Way</title>
    <meta
      name="description"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas ea architecto? Dignissimos illo dolorum nesciunt ipsa dicta accusamus repudiandae corporis ad neque voluptatum distinctio a dolor, asperiores, odit aut?"
    />
  </Helmet>
  <LayoutSite>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          "& > :not(style)": { m: 1, width: "25%" },
          marginTop: "100px",
          marginBottom:'100px'
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          className={styles.loginForm}
        >
          <h2 style={{ fontSize: "40px", fontFamily: "sans-serif" }}>
            Log In
          </h2>
              {/* username */}
              <FormControl
                fullWidth
                style={{ height: "50px" }}
                sx={{ mt: 4 }}
                variant="standard"
                onSubmit={formik.handleSubmit}
              >
                <TextField
                  label="username"
                  id="standard-adornment-amount"
                  {...formik.getFieldProps("username")}
                />
                {formik.touched.username && formik.errors.username ? (
                  <p style={{ color: "red", fontSize: "11px" }}>
                    {formik.errors.username}
                  </p>
                ) : null}
              </FormControl>
              {/* password */}
              <FormControl
                fullWidth
                style={{ height: "60px" }}
                sx={{ mt: 4 }}
                variant="standard"
              >
                <TextField
                  label="password"
                  id="standard-adornment-amount"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p style={{ color: "red", fontSize: "11px" }}>
                    {formik.errors.password}
                  </p>
                ) : null}
              </FormControl>
          <Box display="flex" justifyContent="center" sx={{ mt: 1 }}>
            <Button sx={{background:'darkgreen'}} variant="contained" type="submit">
              Log In
            </Button>
          </Box>
          <div className={styles.donthaveaccount}>
              <span>
                Still don't have an account?{" "}
                <Link className={styles.registerlink} to="/signup">
                  Sign Up
                </Link>
              </span>
            </div>
        </Box>
      </Box>
    </LayoutSite>
    </> 
  )
}

export default SiteLoginPage