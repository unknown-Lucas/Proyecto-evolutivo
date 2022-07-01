import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(29);

    const birthday = () => {
        setage( age + 1 );
      };

    return (
        <div>
          <p>Hola {props.name} funcional</p>
          <h2>tu edad es de {age}</h2> 
          <div>
            <button onClick={birthday}>Cumplir años</button>
          </div>
        </div>
      );
}

GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
