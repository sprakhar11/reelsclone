import * as React from 'react';
import {useEffect} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Signup.css'

export default function Signup() {

    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
}, [ ])


  return (
    
    <div className="signupWrapper">
        <div className = "signupCard">
            
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                </CardActions>
            </Card>
          </div>
      </div>
  );
}
