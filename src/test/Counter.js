import React, { Component } from "react";
import Actions from "./Actions"
import Result from "./Result"

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
           count: 0
        };

        this.handlePlusCount = this.handlePlusCount.bind(this);
        this.handleMinusCount = this.handleMinusCount.bind(this);
    }

    state ={
        count: this.props.count
    }



    handlePlusCount() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    handleMinusCount() {
        this.setState(state => ({
            count: state.count - 1
        }))
    }



    render() {
        return (
            <div>
                <Result count={this.state.count} />
                <Actions handlePlusCount={this.handlePlusCount}
                    handleMinusCount={this.handleMinusCount} />

            </div>)

    }

}