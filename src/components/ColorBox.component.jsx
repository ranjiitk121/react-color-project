import React, { Component } from 'react'
import ReactCopyToClipBoard from "react-copy-to-clipboard"
import "../styles/ColorBox.css";
class ColorBox extends Component {
   constructor(props){
       super(props);
       this.state ={copied:false};
       this.changeCopyState = this.changeCopyState.bind(this);
   }
    changeCopyState(){
        this.setState({copied:true}, ()=>{
            setTimeout(()=> this.setState({copied:false}), 1500)
        });
    }
    render() { 
        const {background, name} = this.props;
        const {copied} = this.state;
        return ( 
            <ReactCopyToClipBoard text={background} onCopy={this.changeCopyState}>
            <div className="ColorBox" style={{background}}>
                <div className={`copy-overlay ${copied && "show"}`} style={{background}} >{background}</div>
                <div className={`copy-msg ${copied && "show"}`}>
                    <h1>Copied</h1>
                    <p>{background}</p>
                </div>
               <div className="copy-container">
                   <div className="box-content">
                       <span>{name}</span>
                   </div>
                   <button className="copy-button">Copy</button>
               </div>
               <span className='see-more'> MORE</span>
            </div>
            </ReactCopyToClipBoard>
         );
    }
    
}
 
export default ColorBox;