import React from 'react'
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { ShoesContext } from "../../Context/Context";

const useStyles = makeStyles((theme) => ({
    cartBtn:{
        width:'100%',
        position:'absolute',
        left:0,
        bottom:10,
    },
    ppr:{
        position:'relative',
    }
  }));
export const ProductDetail = () => {
    const shoe = React.useContext(ShoesContext)
    const { shoesData } = shoe;
    const { data } = useParams()
    const shoedata=shoesData[data];
    const {name, img , details, price}= shoedata
    const classes=useStyles


    return (
       
         <div style={{marginTop:60, padding:20}}>
            
            <Grid container justify='center' spacing={2}>
                <Grid item sm={4} md={4} xs={10}>
                    <Paper>
                        <img src={img} alt={name} width='100%'/>
                    </Paper>
                </Grid>
                <Grid item sm={4} md={3} xs={10} className={classes.ppr}>
                        <Typography variant='h5' color='secondary'>{name}</Typography>
                        <Typography variant='h6' color='secondary'>Price : {price}</Typography>
                       
                <Grid item sm={6} md={7} xs={10} className={classes.ppr}>
                <Typography variant='h4'> Detail</Typography>

    <Typography variant='h5'> {details}</Typography>
                    
                </Grid>
            </Grid>
       
</Grid>
    </div>
    )


}
