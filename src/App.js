import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import InputField from './components/InputField/InputField';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Nav />
                <InputField />
            </React.Fragment>
         );
    }
}
 
export default App;