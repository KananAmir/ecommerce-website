import React, { useEffect, useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import LayoutAdmin from "../../../layout/LayoutAdmin";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
        Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material";
import {addCategory, deleteCategory, editCategory, getCategories} from "../../../services/category.service";

const CategoriesSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Categories = () => {
    const [editButton, setEditButton] = useState(false);
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState();

    const formRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        handleGet();
    }, [])

    async function handleGet(){
        setCategories(await getCategories());
    }

    function handleEdit(id){
        formRef.current.values.name = '';
        setEditButton(true);
        setId(id);
        formRef.current.values.name = categories.find(item => item._id === id).name;
    }

    function handleCancel(){
        setEditButton(false);
        formRef.current.values.name = '';
    }

    const handleYeap = () => {
        setOpen(false);
        deleteCategory(id).then(() => handleGet());
    };

    function handleDelete(id){
        setId(id);
        setOpen(true);
    }

    return (
        <LayoutAdmin>
            <Formik
                initialValues={{
                    name: '',
                }}
                validationSchema={CategoriesSchema}
                onSubmit={values => {
                    if(buttonRef.current.textContent === 'Add'){
                        addCategory(values).then(() => handleGet());
                        values.name = ''
                    }
                    else{
                        editCategory(id, values).then(() => handleGet());
                        setEditButton(false);
                        values.name = '';
                    }
                }}
                innerRef={formRef}
            >
                {({ errors, touched }) => (
                    <div style={{marginBottom: '23px'}}>
                    <Form style={{display: 'flex'}}>
                        <Field
                            name="name"
                            placeholder='Name'
                            style={{padding: '0 5px'}}
                        />
                        <Button type="submit" variant="contained" ref = {buttonRef}
                                color={editButton? 'success': 'primary'}  style={{margin: "0 13px"}} >
                            {
                                editButton? 'Save': "Add"
                            }
                        </Button>
                        <Button type="button" variant="contained" color='error'
                                style={{fontSize: '16px', display: editButton? 'block': 'none'}}
                                onClick={handleCancel}>
                            x
                        </Button>
                    </Form>
                    {errors.name && touched.name ? (
                        <div style={{color: 'tomato' }}>{errors.name}</div>
                    ) : null}
                    </div>
                )}
            </Formik>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow
                            sx={{
                                "&:first-child th": { fontWeight: "600", fontSize: "16px" },
                            }}>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category) => (
                            <TableRow
                                key={category._id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell>{category.name}</TableCell>
                                <TableCell align="center">{category._id}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        sx={{
                                            color: "green",
                                            fontWeight: "500",
                                            border: "1px solid green",
                                            ":hover": {
                                                backgroundColor: "green",
                                                color: "white",
                                            },
                                        }}
                                        onClick={() => handleEdit(category._id)}
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        sx={{
                                            color: "red",
                                            fontWeight: "500",
                                            border: "1px solid red",
                                            ":hover": {
                                                backgroundColor: "red",
                                                color: "white",
                                            },
                                        }}
                                        onClick={() => handleDelete(category._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure about deleting this category?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Nope</Button>
                    <Button onClick={handleYeap}>Yeap</Button>
                </DialogActions>
            </Dialog>
        </LayoutAdmin>
    )
}

export default Categories