import React, { useState } from 'react';
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

const NewProductForm = () => {

    const { id } = useParams(); 

    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [product, setProduct] = useState({});
    const [stock, setStock] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');

    if(id){
        axios.get(`/product/${id}`)
        .then( response => setProduct(response.data))
    }

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

    return (
        <>
        <Box display="flex" alignItems="center" justifyContent="center"><Typography variant="h5">Add new Product</Typography></Box>        
            <Box display="flex" alignItems="center" justifyContent="center">
                <form>
                    <TextField
                    style={{ width: "200px", margin: "5px" }}
                    type="text"
                    label="Product name"
                    variant="outlined"
                    value={product.name || name}
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
                        <MenuItem value={1}>Category 1</MenuItem>
                        <MenuItem value={2}>Category 2</MenuItem>
                        <MenuItem value={3}>Category 3</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} required>
                        <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={product.brand || brand}
                        onChange={handleChangeBrand}
                        label="Brand"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Brand 1</MenuItem>
                        <MenuItem value={2}>Brand 2</MenuItem>
                        <MenuItem value={3}>Brand 3</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <TextField
                    style={{ width: "200px", margin: "5px" }}
                    placeholder="Stock"
                    InputProps={{ inputProps: { min: 0 } }}             
                    type="number"
                    label="Stock"
                    variant="outlined"
                    value={product.stock || stock}
                    onChange={handleChangeStock}
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
                    value={product.price || price}
                    onChange={handleChangePrice}
                    required
                    />
                    <br />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Description"
                        style={{ width: 210, height: 100 }}
                        value={product.description || description}
                        onChange={handleChangeDescription}
                        required
                    />
                    <br />
                    <input
                    style={{ width: "300px", margin: "5px" }}
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    variant="outlined"
                    required
                    />
                    <br/>
                    <Box width='200px' margin='5px'  display='flex' alignItems='center' justifyContent='space-between'>                    
                    <Button disabled={id} variant="contained" color="primary">
                        Add
                    </Button>
                    <Button disabled={!id} variant="contained" color="primary">
                        Save
                    </Button>
                    </Box>
                    <br/>
                </form>
            </Box>
        </>
    )
}

export default NewProductForm;