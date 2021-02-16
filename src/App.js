import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import InputField from './components/InputField/InputField';
import Slider from './components/Slider/Slider';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Nav />
                <Slider />
                <InputField />
            </React.Fragment>
         );
    }
}
 
export default App;