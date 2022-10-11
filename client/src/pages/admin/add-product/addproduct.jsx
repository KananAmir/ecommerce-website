import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Input } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const NewProductForm = () => {

    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeBrand = (event) => {
        setBrand(event.target.value);
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
                    />
                    <br />
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={category}
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
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
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
                        <MenuItem value={1}>Brand 1</MenuItem>
                        <MenuItem value={2}>Brand 2</MenuItem>
                        <MenuItem value={3}>Brand 3</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <Input
                    style={{ width: "200px", margin: "5px" }}
                    placeholder="Stock"
                    type="number"
                    label="Stock"
                    variant="outlined"
                    />
                    <br />
                    <Input
                    style={{ width: "200px", margin: "5px" }}
                    type="number"
                    label="Price"
                    placeholder='Price'
                    variant="outlined"
                    />
                    <br />
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Description"
                        style={{ width: 210, height: 100 }}
                    />
                    <br />
                    <input
                    style={{ width: "300px", margin: "5px" }}
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    variant="outlined"
                    />
                    <br/>
                    <Button variant="contained" color="primary">
                        Add
                    </Button>
                    <br/>
                </form>
            </Box>
        </>
    )
}

export default NewProductForm;