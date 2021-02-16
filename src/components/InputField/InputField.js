import React, { Component } from 'react';
import styles from './InputField.module.css';

class InputField extends Component {
    state = { textValue: '' }

    okClicked(){
        console.log(`LOGGED FROM INPUTFIELD => Captured text: ${this.state.textValue}`);
    }

    render() { 
        return ( 
            <div className={styles.inputField}>
                <input onChange={event => this.setState({textValue: event.target.value})} placeholder={'Insira aqui o seu texto'} className={styles.input} />
                <div onClick={() => {this.okClicked()}} className={styles.Btn}> ok </div>
            </div>
         );
    }
}
 
export default InputField;