import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SetDiscount from './setdiscount';

const NewDiscount = () => {

    const [value, setValue] = useState('Category');

    const handleChange = (event) => { 
        setValue(event.target.value);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Discount by:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="Category" control={<Radio />} label="Category" />
                    <FormControlLabel value="Product" control={<Radio />} label="Product" />
                </RadioGroup>
            </FormControl>
            <SetDiscount value={value}/>
        </Box>
    )
}

export default NewDiscount