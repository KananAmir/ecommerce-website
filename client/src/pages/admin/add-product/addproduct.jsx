import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {addProduct, editProduct, getProducts, getProductsDetail} from "../../../services/product.service";
import {getBrands} from "../../../services/brand.service";
import {getCategories} from "../../../services/category.service";

const NewProductForm = () => {
    const navigate = useNavigate();
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
        images: [],
    });

    const { id } = useParams();

    useEffect(()=>{
        if (id) {
            (async() => {
                setForm(await getProductsDetail(id));
            })()
        }
        handleGetBrands();
        handleGetCategories();
    }, [id])

    const submitHandler = async (data) => {
        const postData = new FormData()
        for(let key in data){
            if (key === 'images') {
                data[key].forEach(file => {
                    postData.append('images', file);
                })
            } else {
                postData.append(key, data[key]);
            }
        }
        await addProduct(postData);
        navigate('/admin/products-list-page')
    };

    const onUploadImage = (e) => {
        const files = Array.from(e.target.files);
        if (files.length) {
            setForm({
                ...form,
                images: files
            })
        }
    }

    async function handleGetBrands(){
        setBrands(await getBrands());
    }

    async function handleGetCategories(){
        setCategories(await getCategories());
    }

    async function editHandler(){
        const postData = new FormData()
        for(let key in form){
            if (key === 'images') {
                form[key].forEach(file => {
                    postData.append('images', file);
                })
            } else {
                postData.append(key, form[key]);
            }
        }
        await editProduct(id, postData)
        navigate('/admin/products-list-page')
    }

    return (
        <>
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
                        required
                        onChange={onUploadImage}
                    />
                    <br />
                    {
                        form.images.map((img, i) => {
                            if(typeof img === "string"){
                                return <img src={`http://localhost:8080/${img}`}
                                            width='50px' height='50px'
                                            style={{margin: '13px'}}
                                />
                            }
                            else{
                                const url = URL.createObjectURL(img);
                                return <img src={url}
                                            width='50px' height='50px'
                                            style={{margin: '13px'}}
                                    />
                            }
                        })
                    }
                    <br />
                    <Box width='200px' margin='5px' display='flex' alignItems='center' justifyContent='space-between'>
                        <Button type='button' disabled={!!id} variant="contained" color="primary"
                            onClick={() => submitHandler(form)}>
                            Add
                        </Button>
                        <Button type='button' disabled={!id} variant="contained" color="primary"
                            onClick={() => editHandler()}>
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