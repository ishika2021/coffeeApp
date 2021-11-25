import React, { Component } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import coffeeImg from './images/coffeeImg.gif';
import CoffeeList from './CoffeeList';
import PriceList from './PriceList';
import AddSugar from './AddSugar';
import './Main.css';

const steps = ['Choose your coffee', 'Select the type', 'Add sugar'];
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            activeStep: 0,
            selectedCoffee:"blackcoffee",
        }
       
    }
    handleStateChange=async (type)=>{

             await this.setState({
                selectedCoffee:type
            })
    }
    counter = () => {
        this.setState({
            count: this.state.count + 1,
        });
        console.log(this.state.count);
    }
    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep+1,
        })
    };
    handleBack = () => {
        this.setState({
            activeStep:this.state.activeStep-1,
        })
    };
    handleReset = () => {
        this.setState({
            activeStep:0,
        })
    };
    render() {
        return (
            <>
                <header>
                    <div className="navContainer">
                        <span>
                            <h1>Get My Coffee</h1>
                            <h4>What goes best with a cup of coffee? <br/> Another cup!</h4>
                        </span>
                    </div>
                </header>
                <section>
                    <div className="bottomSection">
                    {
                        this.state.activeStep>2?<>
                        <div className="orderPrepContainer">
                        <img src={coffeeImg} style={{height:'15rem'}} />
                        <h1>Your order is being prepared...</h1>
                        </div>
                        </>:<Box sx={{ width: '100%' }}>
                            <Stepper activeStep={this.state.activeStep} className="StepperContainer">
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    return (
                                        <Step key={label} {...stepProps} >
                                            <StepLabel className="steplabel" {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <React.Fragment>
                                {this.state.activeStep === 0 ? <CoffeeList handleStateChange={this.handleStateChange} /> : this.state.activeStep === 1 ? <PriceList selectedCoffee={this.state.selectedCoffee} /> : <React.Fragment>
                                    <AddSugar/>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={this.handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>}
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={this.state.activeStep === 0}
                                        onClick={this.handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={this.handleNext}>
                                        {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        </Box>
                    }
                    </div>
                </section>
            </>
        )
    }
}
