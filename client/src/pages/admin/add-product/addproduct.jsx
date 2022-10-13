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
import { useForm } from "react-hook-form";

const NewProductForm = () => {

    const { register, handleSubmit } = useForm();

    const { id } = useParams();

    useEffect(()=>{
        if (id) {
            axios.get(`http://localhost:8080/product/${id}`)
                .then(response => {
                    setName(response.data.name)
                    setCategory(response.data.categoryId)
                    setPrice(response.data.price)
                    setBrand(response.data.brandId)
                    setStock(response.data.stock)
                    setDescription(response.data.desc)
                    setDiscount(response.data.discount)
                    setImages(...response.data.images)
                })
        }
    }, [])

    

    const [product, setProduct] = useState({});
    const [category, setCategory] = useState(product.categoryId || '');
    const [brand, setBrand] = useState(product.brandId || '');
    const [name, setName] = useState(product.name || '');
    const [stock, setStock] = useState(product.stock || 0);
    const [price, setPrice] = useState(product.price || 0);
    const [description, setDescription] = useState(product.description || '');
    const [discount, setDiscount] = useState(product.discount || 0);
    const [images, setImages] = useState(product.images || []);

    console.log(product)
    

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeBrand = (event) => {
        setBrand(event.target.value);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeStock = (event) => {
        setStock(event.target.value);
    };

    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleChangeDiscount = (event) => {
        setDiscount(event.target.value);
    };

    const handleChangeImage = (event) => {
        setImages(...images, event.target.value);
    };

    const submitHandler = async (data) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("desc", description);
        formData.append("price", price);
        formData.append("discount",discount);
        formData.append("stock", stock);
        formData.append("categoryId",category);
        formData.append("brandId", brand);
        formData.append("images", data.file[0]);

        await axios.post("http://localhost:8080/product", formData )
        .then(response => console.log(response))
    };

    const submitEdit = async () => {
        await axios.put(`http://localhost:8080/product${id}`)
    }

    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center"><Typography variant="h5">Add new Product</Typography></Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <form encType="multipart/form-data" onSubmit={id ? handleSubmit(submitEdit) : handleSubmit(submitHandler)}>
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Product name"
                        variant="outlined"
                        value={name}
                        onChange={handleChangeName}
                        required
                    />
                    <br />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} required>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={product.category || category}
                            onChange={handleChangeCategory}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"634661f2213af94c904604f1"}>634661f2213af94c904604f1</MenuItem>
                            <MenuItem value={'634661f2213af94c904604f1'}>634661f2213af94c904604f1</MenuItem>
                            <MenuItem value={'634661f2213af94c904604f1'}>634661f2213af94c904604f1</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} required>
                        <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={brand}
                            onChange={handleChangeBrand}
                            label="Brand"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'634662eb213af94c904604f5'}>634662eb213af94c904604f5</MenuItem>
                            <MenuItem value={'634662eb213af94c904604f5'}>634662eb213af94c904604f5</MenuItem>
                            <MenuItem value={'634662eb213af94c904604f5'}>634662eb213af94c904604f5</MenuItem>
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
                        value={stock}
                        onChange={handleChangeStock}
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
                        value={discount}
                        onChange={handleChangeDiscount}
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
                        value={price}
                        onChange={handleChangePrice}
                        required
                    />
                    <br />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Description"
                        style={{ width: 210, height: 100 }}
                        value={description}
                        onChange={handleChangeDescription}
                        required
                    />
                    <br />
                    <input
                        style={{ width: "300px", margin: "5px" }}
                        {...register("file")}
                        type="file"
                        accept="image/png, image/jpeg"
                        multiple
                        variant="outlined"
                        required
                        onChange={handleChangeImage}
                    />
                    <br />
                    <Box width='200px' margin='5px' display='flex' alignItems='center' justifyContent='space-between'>
                        <Button type='submit' disabled={!!id} variant="contained" color="primary">
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