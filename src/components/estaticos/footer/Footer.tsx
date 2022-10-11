import React from "react";
import {Typography, Button, Paper, Grid} from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import'./Footer.css';
import {  useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


function Footer(){
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ''){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className="box1">
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className="texto">Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/Lucas-Mendes-dos-S-Mota" target="_blank">
                        <GitHubIcon className="rede" />
                    </a>
                    <a href="https://instagram.com/lucas_mendes_l_?igshid=YmMyMTA2M2Y=" target="_blank">
                        <InstagramIcon className="rede" />
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-mendes-32135a23a/" target="_blank">
                        <LinkedInIcon className="rede" />
                    </a>
                </Box>
            </Box>
            <Box className="box2">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className="texto" >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom className="texto" align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    
    return(
        <>
               {footerComponent} 
        </>
    )
}

export default Footer;