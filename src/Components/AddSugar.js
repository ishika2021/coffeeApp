import React, { Component } from 'react'
import "./AddSugar.css";
import spoonImg from "./images/sugar.png";
import Button from '@mui/material/Button';
export default class AddSugar extends Component {
    constructor(props){
        super(props);
        this.state={
            spoon:0,
        }
    }
    handleIncSugar=()=>{
        this.setState({
            spoon:this.state.spoon+1
        })
    }
    handleDecSugar=()=>{
        if(this.state.spoon>0){
            this.setState({
                spoon:this.state.spoon-1
            })
        }
        
    }
    render() {
        return (
            <div className="addSugarContainer">
                <img src={spoonImg} style={{height:'7rem'}} />
                <span>{this.state.spoon} Spoon</span>
                <div className="spoonBtnContainer">
                <Button style={{border:'1px solid crimson',color:'crimson',width:'10rem',fontSize:'1.5rem'}} onClick={this.handleIncSugar}>+</Button>
                <Button style={{border:'1px solid blue',width:'10rem',fontSize:'1.5rem'}} onClick={this.handleDecSugar}>-</Button>
                </div>
            </div>
        )
    }
}
