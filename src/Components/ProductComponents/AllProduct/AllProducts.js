import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import { Link} from "react-router-dom";
import { ShoesContext  } from "../../Context/Context";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        alignItems:"center",
        textAlign:"center",
        marginLeft:60,
        marginTop:60
    },
    media: {
        height: 250,
    },
});



export const AllProducts=()=> {
    const classes = useStyles();
    const shoes = React.useContext(ShoesContext)
    const {shoesData} = shoes

    return (

        <div>
            <Grid container justify="space-around" spacing={3}>
            {Object.entries(shoesData).map(([slug, { name, img, price }]) => (
                  
                
                    <Grid item xs={12}  lg={4}>
                        <Link to={`/Products/${slug}`}>
                          
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {name}
                                     </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                       Price: {price}
                                     </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                        </Link>
                    </Grid>
                
               
                
            ))}
            </Grid>
        </div>
    );
}











