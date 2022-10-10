import React from "react";
import { AppBar, Toolbar, Typography, } from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import useLocalStorage from "react-use-localstorage";

import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate =useNavigate();

    function goLogout(){
        setToken('')
        alert("Usuário delogado")
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Link to='/home' style={{color:'white'}} className='text-decorator-none '>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                        <Link to='/posts' style={{color:'white'}} className='text-decorator-none '>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                        <Link to='/temas' style={{color:'white'}} className='text-decorator-none '>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='cursor'>
                        <Link to='/fomularioTema' style={{color:'white'}} className='text-decorator-none '>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                            </Link>
                        </Box>
                        
                            <Box mx={1}  className='cursor' onClick={goLogout}>
                                <Typography variant="h6" style={{color:'white'}} className='text-decorator-none '>
                                    logout
                                </Typography>
                            </Box>
                  
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;