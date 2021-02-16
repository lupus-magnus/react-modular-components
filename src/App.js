import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import InputField from './components/InputField/InputField';
import Slider from './components/Slider/Slider';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Nav />
                <Slider />
                <InputField />
                <SearchBar />
            </React.Fragment>
         );
    }
}
 
export default App;