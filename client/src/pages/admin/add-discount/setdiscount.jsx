import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const SetDiscount = (value) => {

    // const products or categories get from server with value

    return(
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <form>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"    
                        label="Category"           >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {/* map menu items after getting products or categories */}
                            <MenuItem value={1}>Category 1</MenuItem>
                            <MenuItem value={2}>Category 2</MenuItem>
                            <MenuItem value={3}>Category 3</MenuItem>
                            </Select>
                </FormControl>
            </form>
            <br/>
                <Button variant="contained" color="primary">
                    Add discount 
                </Button>
            <br/>
        </Box>
    )

}

export default SetDiscount;