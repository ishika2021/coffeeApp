import React, { Component } from 'react'
import Button from '@mui/material/Button';
import "./PriceList.css";
export default class PriceList extends Component {
    constructor(props){
        super(props);
        // console.log("coffee is",this.props.selectedCoffee);
        this.state={
            selected:"",
            coffeeName:"",
            hotCoffeePrice:0,
            coldCoffeePrice:0
        }
    }
    componentDidMount=async()=>{
        await this.setState({
            selected:this.props.selectedCoffee,
        })
        this.handlePricing();
    }
    handlePricing=()=>{
        switch(this.state.selected){
            case "blackcoffee": console.log("here");
                                this.setState({
                                coffeeName:"Black Coffee",
                                hotCoffeePrice:60,
                                coldCoffeePrice:70
                                })
                                break;
            case "decaf":this.setState({
                                coffeeName:"Decaf",
                                hotCoffeePrice:70,
                                coldCoffeePrice:80
                                })
                                break;
            case "cappuccino":this.setState({
                                coffeeName:"Cappuccino",
                                hotCoffeePrice:90,
                                coldCoffeePrice:110
                                })
                                break;
            case "lattee":this.setState({
                                coffeeName:"Lattee",
                                hotCoffeePrice:80,
                                coldCoffeePrice:100
                                })
                                break;
            case "mochalattee":this.setState({
                                coffeeName:"Mocha Latte",
                                hotCoffeePrice:100,
                                coldCoffeePrice:120
                                })
                                break;
            case "filtercoffee":this.setState({
                                coffeeName:"Filter Coffee",
                                hotCoffeePrice:50,
                                coldCoffeePrice:60
                                })
                                break;
        }
    }
    render() {
        return (
            <div className="priceContainer">
                <h2 className="heading1">Your selected coffee is</h2>
                <h3 className="heading2">{this.state.coffeeName}</h3>
                <div className="hotColdBtnContainer">
                <Button style={{border:'1px solid crimson',color:'crimson',width:'10rem'}}>Hot :{this.state.hotCoffeePrice}</Button>
                <Button style={{border:'1px solid blue',width:'10rem'}}>Cold :{this.state.coldCoffeePrice}</Button>
                </div>
            </div>
        )
    }
}
