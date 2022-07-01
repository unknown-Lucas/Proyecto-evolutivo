import React, { Component } from "react";
import PropTypes from "prop-types";

class Greetings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <p>Hola {this.props.name} Clase</p>
        <h2>tu edad es de {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>Cumplir años</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => {
      return {
        age: prevState.age + 1,
      };
    });
  };
}

Greetings.propTypes = {
  name: PropTypes.string,
};

export default Greetings;
