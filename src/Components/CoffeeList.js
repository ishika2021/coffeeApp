import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CoffeeList.css';
import blackcoffee from './images/blackcoffee.jpg';
import decaf from './images/coffee2.jpg';
import cappuccino from './images/cappuccino.jpg';
import lattee from './images/lattee.jpg';
import mochalatte from './images/mochalatte.jpg';
import filtercoffee from './images/filtercoffee.jpg';
export default class CoffeeList extends Component {
    constructor(props){
        super(props);
    }
    
    handleSelectedCoffee(e){
        let coffee=e.target.value;
        this.props.handleStateChange(coffee);
    }
    render() {
        return (
            <div className="CoffeeListContainer">
                <Card className="coffeeCard">
                    <CardMedia
                        component="img"
                        height="170"
                        image={blackcoffee}
                        alt="bl"
                    />
                    <CardContent style={{padding:'5px', marginBottom:'2px',color:'#000000'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Black Coffee
                        </Typography>
                        <Typography variant="body2" color="#000000">
                        Black coffee is made from plain ground coffee beans that are brewed hot. 
                        It's served without added sugar, milk, or flavorings.
                        </Typography>
                    </CardContent>
                    <CardActions className="orderBtnContainer">
                        <Button onClick={e=>this.handleSelectedCoffee(e)} value="blackcoffee" style={{border:'1px solid blue',height:'100%', width:'10rem'}}>Select</Button>
                    </CardActions>
                </Card>
                <Card className="coffeeCard">
                    <CardMedia
                        component="img"
                        height="170"
                        image={decaf}
                        alt="bl"
                    />
                    <CardContent style={{padding:'5px', marginBottom:'2px',color:'#000000'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Decaf
                        </Typography>
                        <Typography variant="body2" color="#000000">
                        Coffee beans naturally contain caffeine, but roasters can use several different processes 
                        to remove almost all of it. 
                        </Typography>
                    </CardContent>
                    <CardActions className="orderBtnContainer">
                        <Button onClick={e=>this.handleSelectedCoffee(e)} value="decaf" style={{border:'1px solid blue',height:'100%', width:'10rem'}}>Select</Button>
                    </CardActions>
                </Card>
                <Card className="coffeeCard">
                    <CardMedia
                        component="img"
                        height="170"
                        image={cappuccino}
                        alt="bl"
                    />
                    <CardContent style={{padding:'5px', marginBottom:'2px',color:'#000000'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Cappuccino
                        </Typography>
                        <Typography variant="body2" color="#000000">
                        This drink is similar to latte, but the frothy top layer is thicker. 
                        The standard ratio is equal parts espresso, steamed milk and foam.
                        </Typography>
                    </CardContent>
                    <CardActions className="orderBtnContainer">
                        <Button onClick={e=>this.handleSelectedCoffee(e)} value="cappuccino"  style={{border:'1px solid blue',height:'100%', width:'10rem'}}>Select</Button>
                    </CardActions>
                </Card>
                <Card className="coffeeCard">
                    <CardMedia
                        component="img"
                        height="170"
                        image={lattee}
                        alt="bl"
                    />
                    <CardContent style={{padding:'5px', marginBottom:'2px',color:'#000000'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Lattee
                        </Typography>
                        <Typography variant="body2" color="#000000">
                        This classic drink is typically 1/3 espresso and 2/3 steamed milk, topped with a thin layer of foam. 
                        </Typography>
                    </CardContent>
                    <CardActions className="orderBtnContainer">
                        <Button onClick={e=>this.handleSelectedCoffee(e)} value="lattee"  style={{border:'1px solid blue',height:'100%', width:'10rem'}}>Select</Button>
                    </CardActions>
                </Card>
                <Card className="coffeeCard">
                    <CardMedia
                        component="img"
                        height="170"
                        image={mochalatte}
                        alt="bl"
                    />
                    <CardContent style={{padding:'5px', marginBottom:'2px',color:'#000000'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Mocha Latte
                        </Typography>
                        <Typography variant="body2" color="#000000">
                        This sweet twist on the latte is flavored with sugar and chocolate, 
                        usually in the form of cocoa powder, melted chocolate, or syrup.
                        </Typography>
                    </CardContent>
                    <CardActions className="orderBtnContainer">
                        <Button onClick={e=>this.handleSelectedCoffee(e)} value="mochalattee"  style={{border:'1px solid blue',height:'100%', width:'10rem'}}>Select</Button>
                    </CardActions>
                </Card>
                <Card className="coffeeCard">
                    <CardMedia
                        component="img"
                        height="170"
                        image={filtercoffee}
                        alt="bl"
                    />
                    <CardContent style={{padding:'5px', marginBottom:'2px',color:'#000000'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Filter Coffee
                        </Typography>
                        <Typography variant="body2" color="#000000">
                        Filter coffee is made by mixing frothed and 
                        boiled milk with the infusion obtained by percolation brewing of finely 
                        ground coffee.
                        </Typography>
                    </CardContent>
                    <CardActions className="orderBtnContainer">
                        <Button onClick={e=>this.handleSelectedCoffee(e)} value="filtercoffee"  style={{border:'1px solid blue',height:'100%', width:'10rem'}}>Select</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
