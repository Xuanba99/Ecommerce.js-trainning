import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, onAddToCard }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Tooltip title={product.name}>
                        <Typography
                            className={classes.nameProduct}
                            variant="h6"
                            gutterBottom >
                            {product.name}
                        </Typography>
                    </Tooltip>
                    <Typography
                        variant="h6"
                    >
                        {product.price.formatted_with_code}
                    </Typography>
                </div>
                <Typography style={{ lineHeight: 0 }} dangerouslySetInnerHTML={{ __html: product.description.slice(0, 40) }} variant="body2" color="textSecondary" />
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Card" onClick={() => onAddToCard(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
