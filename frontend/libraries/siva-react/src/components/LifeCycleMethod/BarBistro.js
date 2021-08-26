import React, { Component } from 'react'
import Sguru from './Sguru';

class BarBistro extends Component {
    constructor() {
        super();
        console.log("waiter 1 customer came")

        this.state = {
            count:0,
            visit:true
        };
    }

    componentDidMount() {
        console.log("waiter 3 customer taken seat")
    }

    componentDidUpdate(preProps,preStates) {
        console.log (`waiter 4 customer order ->previous order${preStates.count}->current order${this.state.count}`)
    }

    shouldComponentUpdate(){
        // console.log("waiter 5 no money no honey ")
        return true;
    }

    render() {
        console.log("waiter 2 monitor customer")
        return (
            <>
                <h1>Welcome to DumDum BarBistro</h1>
                <br />
                <p>Customers Orders</p>
                
                <h1>{this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Give your Order</button>

                <br/>
                <h1>Customer Visit</h1>
                <h2>{this.state.visit===true ?<Sguru/>:<span>No Customers</span>}</h2>
                <br/>
                <button onClick={()=> {this.setState({visit:!this.state.visit})}}>Click Me</button>    
            </>
        )
    }
}

export default BarBistro

