import React from 'react';
import Subscription from '../subscription';
import RollImage from "./roll.png";

export default class SrcTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textToTranslate: ''};  // TODO: remove

    this.onTextareaChange = this.onTextareaChange.bind(this);
  }

  onTextareaChange(evt){
    this.setState({textToTranslate: evt.target.value});  //TODO: remove
    Subscription.translate(evt.target.value);
  }

  //TODO: remove value
  render(){
    return <div className='src-component'>
      <div className="textarea-container">
        <img src={RollImage} className='background-img'/>
        <textarea
          onChange={ this.onTextareaChange }
          value={ this.state.textToTranslate } />
      </div>
    </div>
  }
}
