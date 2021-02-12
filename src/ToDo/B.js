import React from 'react'

class B extends React.Component  {
    state ={
        inputValue: ''
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value 
        })
    }
    handleSubmit = (e) => {
        const { onSubmit } = this.props;
        const { inputValue } = this.state;
        onSubmit(inputValue);
    }
  render() {
    const { inputValue } = this.state;
      return(
    <div>
        <div>
                    <input
                        type="text"
                        placeholder="Add Task"
                        onChange={this.handleChange}
                        value={inputValue}
                    />
                    <button 
                    onClick={this.handleSubmit}
                    >
                      
                        Transfer
                    </button>
                </div>
    </div>
      )
 }

}
      export default B;