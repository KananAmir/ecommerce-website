import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import LayoutAdmin from "../../../layout/LayoutAdmin";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";

// const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     surname: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
// });

const AddCategory = () => {
    return (
        <LayoutAdmin>
            <Formik
                initialValues={{
                    name: '',
                }}
                // validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form style={formStyle}>
                        <TextField
                            required
                            name="name"
                            id="outlined-required"
                            label="Name"
                        />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Add
                        </Button>
                    </Form>
                )}
            </Formik>
        </LayoutAdmin>
    )
}

export default AddCategory


//-----------style-----------
const formStyle = {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
}