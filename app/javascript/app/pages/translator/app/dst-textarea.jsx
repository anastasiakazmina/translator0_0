import React from "react";
import store from '../store';
import RollImage from './roll.png';

export default class DstTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    store.subscribe(() => {
      const text = store.getState()['translationDstText'];
      this.setState({ text });
      console.log('dst-textarea: New state was set up: ', text);
    });
  }

  render(){
    return <div className='dst-component'>
      <div className="textarea-container">
        <img src={RollImage} className='background-img'/>
        <textarea
          readOnly={true}
          value={ this.state.text } />
      </div>

    </div>
  }
}
