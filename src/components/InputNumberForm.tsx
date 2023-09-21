import React, {useState} from 'react';
import "../less/main.less"
const InputNumberForm = (number, setNumber) => {
    const [value, setValue] = useState('');
    
    return (
        <div style={{width:"500px", height:"500px"}} className="input-number-form">
            <input type="text" value={value}/>
            <div className="number-pannel">
                <button onClick={ () => { setValue(value + '7') } }>7</button>
                <button onClick={ () => { setValue(value + '8') } }>8</button>
                <button onClick={ () => { setValue(value + '9') } }>9</button>
                <button onClick={ () => { setValue(value + '4') } }>4</button>
                <button onClick={ () => { setValue(value + '5') } }>5</button>
                <button onClick={ () => { setValue(value + '6') } }>6</button>
                <button onClick={ () => { setValue(value + '1') } }>1</button>
                <button onClick={ () => { setValue(value + '2') } }>2</button>
                <button onClick={ () => { setValue(value + '3') } }>3</button>
                <button onClick={ () => { setValue(value + '0') } }>0</button>
                <button onClick={ () => { setValue(value + '00') } }>00</button>
                <button onClick={ () => { setValue(value + '.') } }>.</button>
            </div>
            <div className="action-pannel">
                <button className="cancel">cancel</button>
                <button onClick={ () => {setValue('')}}className="clear">clear</button>
                <button className="enter">enter</button>
            </div>
        </div>
    );
};

export default InputNumberForm;