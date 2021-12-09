import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button , TextField , Typography } from '@mui/material'
import { Add , Remove } from '@mui/icons-material'
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IncrementComponent = () => {

    const [value,setValue] = useState(0);
    return (
        <div className='reduce'>
            <Stack direction="row" spacing={2}>
                <Item><Button variant='contained' onClick={()=> value > 0 ? setValue(value-1) : console.log('not incre')}><Remove/></Button></Item>
                <Item><TextField
                    
                    value={value}
                    variant="outlined"
                    
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{ width: 50 }}
                    size="small"
                /></Item>
                <Item><Button variant='contained' onClick={()=>setValue(value+1)}><Add/></Button></Item>
                { value > 0 ? <Typography variant='h6' className='soft-light'>Ha seleccionado {value} asientos </Typography> : '' }  
            </Stack>
        </div>
    );

}

export default IncrementComponent;