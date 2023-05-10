import React, {useEffect} from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions } from '@mui/material';
import { useDispatch, useSelector } from '../redux/store'
import Api from '../api/product'


const Products = () => {

    const {data, isLoading}= useSelector(state=>state.product)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Api.getData());
    }, [])

    if (isLoading) {
        return (<div>Loading ..</div>)
    }
            
    return (<Container maxWidth="md">
        <Typography variant="h5">List of products</Typography>
        {!!data && data.map((p, index)=><Card key={index} sx={{ maxWidth: 345, mb:2 }} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {p.id}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {p.title}
                </Typography>
             
            </CardContent>
            <CardActions>
                <Button size="small">Detail</Button>
            </CardActions>
        </Card>)}
    </Container>)
}

export default Products