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

        <Box>
        <Typography variant="h5">Add new Product</Typography>
            <form>
                <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Product name"
                variant="outlined"
                />
                <br />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
                type="currency"
                label="Attribute"
                variant="outlined"
                />
                <br />
                <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="goal stage"
                variant="outlined"
                />
                <br />
                <TextField
                style={{ width: "200px", margin: "5px" }}
                type="number"
                label="job id"
                variant="outlined"
                />
                <br />
                <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="job region"
                variant="outlined"
                />
                <br />
                <Button variant="contained" color="primary">
                    Add
                </Button>
            </form>
        </Box>
    )
}

export default NewProductForm;