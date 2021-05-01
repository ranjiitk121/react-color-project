import React, { Component } from 'react';
import Slider from "rc-slider";
import "rc-slider/assets/index.css"
import "../styles/navbar.styles.css";
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Navbar">
                <div className="logo">
                     <a href="#">React Color Picker</a>
                </div>
                <div className="slider-container">
                    <span>Level:{this.props.level}</span>
                    <div className="slider">
                        <Slider defaultValue={this.props.level} 
                            min={100} max={900} 
                            onAfterChange={this.props.changeLevel}
                            step={100} 
                        />
                 </div>
                </div>
            </div>
         );
    }
}
 
export default Navbar;