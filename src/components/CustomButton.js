import React, { Component } from "react";
import "./CustomButton.css";

export default class CustomButton extends Component {
    handleClick=(e)=>{
        let btn = e.target;
        btn.style.backgroundColor = 'red';
        setTimeout(() => {
            alert(`${this.props.warnMessage}`)
        }, 1);
    }

  render() {
    return (
      <div className="container">
        <div className="button-container">
          <button className="custom-button" onClick={this.handleClick}>{this.props.text}</button>
        </div>
        <div className="button-hint">
          <p>{this.props.hint}</p>
        </div>
      </div>
    );
  }
}
