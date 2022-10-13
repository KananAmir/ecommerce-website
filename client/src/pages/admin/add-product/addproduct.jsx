import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {addProduct, getProducts} from "../../../services/product.service";
import {getBrands} from "../../../services/brand.service";
import {getCategories} from "../../../services/category.service";

const NewProductForm = () => {
    const[brands, setBrands] = useState();
    const[categories, setCategories] = useState();

    const [form, setForm] = useState({
        name: '',
        categoryId: '',
        brandId: '',
        stock: '',
        price: '',
        desc: '',
        discount: '',
        images: '',
    });

    const { id } = useParams();

    useEffect(()=>{
        if (id) {
            (async() => {
                setForm(await getProducts());
            })()
        }
        handleGetBrands();
        handleGetCategories();
    }, [id])

    const submitHandler = (data) => {
        console.log(data)
        addProduct(data)
    };

    const submitEdit = async () => {
        await axios.put(`http://localhost:8080/product${id}`)
    }

    async function handleGetBrands(){
        setBrands(await getBrands());
    }

    async function handleGetCategories(){
        setCategories(await getCategories());
    }

    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center"><Typography variant="h5">Add new Product</Typography></Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <form encType="multipart/form-data">
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Product name"
                        variant="outlined"
                        value={form.name}
                        onChange={(e) =>setForm({
                                ...form,
                                name: e.target.value
                            })
                        }
                        required
                    />
                    <br />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} required>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            value={form.categoryId}
                            onChange={(e) =>setForm({
                                ...form,
                                categoryId: e.target.value
                            })
                            }
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                categories?.map((item) => {
                                    return <MenuItem
                                        key={item._id}
                                        value={item._id}>
                                        {item.name}
                                    </MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} required>
                        <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
                        <Select
                            value={form.brandId}
                            onChange={(e) =>setForm({
                            ...form,
                            brandId: e.target.value
                        })
                            }
                            label="Brand"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                brands?.map((item) => {
                                    return <MenuItem
                                        key={item._id}
                                        value={item._id}>
                                        {item.name}
                                    </MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        placeholder="Stock"
                        InputProps={{ inputProps: { min: 0 } }}
                        type="number"
                        label="Stock"
                        variant="outlined"
                        value={form.stock}
                        onChange={(e) =>setForm({
                        ...form,
                        stock: e.target.value
                    })
                        }
                        required
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        placeholder="Discount"
                        InputProps={{ inputProps: { min: 0 } }}
                        type="number"
                        label="Discount"
                        variant="outlined"
                        value={form.discount}
                        onChange={(e) =>setForm({
                        ...form,
                        discount: e.target.value
                    })
                        }
                        required
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        label="Price"
                        placeholder='Price'
                        variant="outlined"
                        value={form.price}
                        onChange={(e) =>setForm({
                        ...form,
                        price: e.target.value
                    })
                        }
                        required
                    />
                    <br />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Description"
                        style={{ width: 210, height: 100 }}
                        value={form.desc}
                        onChange={(e) =>setForm({
                                ...form,
                                desc: e.target.value
                            })
                        }
                        required
                    />
                    <br />
                    <input
                        style={{ width: "300px", margin: "5px" }}
                        type="file"
                        accept="image/png, image/jpeg"
                        multiple
                        variant="outlined"
                        // required
                        onChange={(e) =>setForm({
                        ...form,
                        images: e.target.value
                    })
                        }
                    />
                    <br />
                    <Box width='200px' margin='5px' display='flex' alignItems='center' justifyContent='space-between'>
                        <Button type='button' disabled={!!id} variant="contained" color="primary"
                            onClick={() => submitHandler(form)}>
                            Add
                        </Button>
                        <Button type='submit' disabled={!id} variant="contained" color="primary">
                            Save
                        </Button>
                    </Box>
                    <br />
                </form>
            </Box>
        </>
    )
}

export default NewProductForm;