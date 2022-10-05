import { TextField, Typography, Button } from "@material-ui/core";
import {Box, Grid } from "@mui/material";
import React,{useState, useEffect, ChangeEvent} from "react";
import {Link, useNavigate, } from 'react-router-dom'
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";

function Login(){
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const[userLogin, setUserLogin]= useState<UserLogin>(
     {
        id:0,
        usuario: '',
        senha: '',
        token: '',
     }
     )

     function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
     } 

     async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        try{
           await login (`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado comsucesso')
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
        }
        
        useEffect(()=>{
            if(token !== ''){
                navigate('/home')
            }
        }, [token])
    

    return(
        <>
        <Grid container direction="row" justifyContent='center' alignItems='center'>
            <Grid alignItems='center' item xs={6}>
                <Box paddingX={20} >
                    <form onSubmit={onSubmit}>
                       <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">Entrar</Typography>
                       <TextField  value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='usuário' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                       <TextField  value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e) } id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='passworld' fullWidth />
                <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant='contained' color='primary' >
                            Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant="subtitle1" gutterBottom align='center' className="textos1">Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                 </Box>
             </Grid>
            <Grid xs={6} className="imagem">
        </Grid>
    </Grid>
 </>

    )
}

export default Login;