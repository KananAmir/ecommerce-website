import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LayoutSite from "../../../layout/LatoutSite";

const SiteSignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      address: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "name must be at least 3 characters"),
      surname: Yup.string()
        .min(3, "surname must be at least 3 characters"),
      email: Yup.string()
        .email("invalid email format")
        .min(3, "surname must be at least 3 characters")
        .required("Required"),
      username: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "must contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character"
        )
        .required("Required"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <LayoutSite>
       <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh"
      sx={{
        "& > :not(style)": { m: 1, width: "25%" },
        marginTop:'80px'
      }}
      noValidate
      autoComplete="off"
    >
      <Box component="form" onSubmit={formik.handleSubmit} style={{}}>
        <h2 style={{ fontSize: "40px" }}>Sign Up</h2>
          {/* name */}
            <FormControl
              fullWidth
              style={{ height: "50px" }}
              sx={{ mt: 1 }}
              variant="standard"
              onSubmit={formik.handleSubmit}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Name
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {formik.errors.name}
                </p>
              ) : null}
            </FormControl>
          {/* surname */}
          <FormControl
              fullWidth
              style={{ height: "50px" }}
              sx={{ mt: 1 }}
              variant="standard"
              onSubmit={formik.handleSubmit}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Surname
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                {...formik.getFieldProps("surname")}
              />
              {formik.touched.surname && formik.errors.surname ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {formik.errors.surname}
                </p>
              ) : null}
            </FormControl>

          {/* username */}
            <FormControl
              fullWidth
              style={{ height: "50px" }}
              sx={{ mt: 4 }}
              variant="standard"
              onSubmit={formik.handleSubmit}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Username
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {formik.errors.username}
                </p>
              ) : null}
            </FormControl>
          
          
            <FormControl
              fullWidth
              style={{ height: "70px" }}
              sx={{ mt: 4 }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                type="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {formik.errors.password}
                </p>
              ) : null}
            </FormControl>
            <FormControl
              fullWidth
              style={{ height: "70px" }}
              sx={{ mt: 4 }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                name="passwordConfirm"
                type="password"
                {...formik.getFieldProps("passwordConfirm")}
              />
              {formik.touched.passwordConfirm &&
              formik.errors.passwordConfirm ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {formik.errors.passwordConfirm}
                </p>
              ) : null}
            </FormControl>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 5 }}>
              <Button variant="contained" type="submit">
                SignUp
              </Button>
            </Box>
      </Box>
    </Box>
    </LayoutSite>
  )
}

export default SiteSignUpPage