import React from 'react';
import Tasks from "./Tasks";
import B from "./B";


class ToDo extends React.Component {
    state = {
        inputValue: ''
    }

handleCatchValue = (value) => {
        this.setState({
            inputValue: value
        })
    }

    render() {

        const {inputValue} = this.state;

        return (
            <div>
                <div>
                    <h1>ToDo</h1>
                </div>
                <div >
                    <B onSubmit={this.handleCatchValue} />
                </div>
                <div>
                    <Tasks inputValue = {inputValue} />
                </div>
            </div>
        )
    }
}
export default ToDo;

