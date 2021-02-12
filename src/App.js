
import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import ToDo from './ToDo/ToDo'; 


class App extends Component{
    //  state={
    //    counter:0
    //  }
    //  plusCounter = () =>{
    //    this.setState({
    //      counter: this.state.counter + 1
    //  });
    // }


    render() {

      return (
        <div className="App">
         <ToDo/>
        </div>
      );
    }
}

export default App;
