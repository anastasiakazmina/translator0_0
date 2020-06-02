import React from 'react';
import Subscription from '../subscription';

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
      <label htmlFor="">Input text you need to translate:</label>

      <textarea
        onChange={ this.onTextareaChange }
        value={ this.state.textToTranslate } />
    </div>
  }
}
