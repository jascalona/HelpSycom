import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TextInputs() {
    return (
        <div className="content-area">
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { width: '85%' } }}
                noValidate
                autoComplete="off"
            >
                <div style={{color: '#fff'}}>
                    <TextField style={{ borderRadius: '5px', color: '#fff'}}
                        id="outlined-multiline-static"
                        label="Detalles del Impacto"
                        multiline
                        rows={3}
                        defaultValue=""
                    />
                </div>
            </Box>
        </div>
    );
}

export default TextInputs