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
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      username: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Required"),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (checkRef.current) {
        setAuthor(true);
      } else {
        setAuthor(false);
      }
    },
  });

  const btnRef = useRef();
  const checkRef = useRef(false);
  const [author, setAuthor] = useState(false);

  const handleBtnChange = (e) => {
    if (e.target.checked) {
      btnRef.current.textContent = "Next";
      checkRef.current = true;
    } else {
      btnRef.current.textContent = "SignUp";
      checkRef.current = false;
    }
  };

  const goBack = ()=> {
    setAuthor(false)
    checkRef.current = false
  }
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
        {author === false && (
          <>
            <FormControl
              fullWidth
              style={{ height: "50px" }}
              sx={{ mt: 1 }}
              variant="standard"
              onSubmit={formik.handleSubmit}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Full Name
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                {...formik.getFieldProps("fullname")}
              />
              {formik.touched.username && formik.errors.username ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {formik.errors.username}
                </p>
              ) : null}
            </FormControl>
            <FormControl
              fullWidth
              style={{ height: "50px" }}
              sx={{ mt: 4 }}
              variant="standard"
              onSubmit={formik.handleSubmit}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                UserName
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
              <FormControlLabel
                control={<Checkbox />}
                label="Author"
                onChange={(e) => handleBtnChange(e)}
              />
              <Button variant="contained" type="submit" ref={btnRef}>
                SignUp
              </Button>
            </Box>
          </>
        )}
        {author && (
          <>
            <FormControl
              fullWidth
              style={{ height: "50px" }}
              sx={{ mt: 1 }}
              variant="standard"
              onSubmit={formik.handleSubmit}
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Full Name
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                name="stagename"
                {...formik.getFieldProps("stagename")}
              />
              {formik.touched.stagename && formik.errors.stagename ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {formik.errors.stagename}
                </p>
              ) : null}
            </FormControl>
            <Box display="flex" justifyContent="space-between" sx={{ mt: 5 }}>
              <Button variant="text" sx={{p: '0'}} onClick = {()=> goBack()}>
                Back
              </Button>
              <Button variant="contained" type="submit" ref={btnRef}>
                SignUp
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
    </LayoutSite>
  )
}

export default SiteSignUpPage