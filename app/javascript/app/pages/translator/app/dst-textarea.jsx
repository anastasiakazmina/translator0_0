import React from "react";
import store from '../store';

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
      <label htmlFor="">Result:</label>

      <textarea
        readOnly={true}
        value={ this.state.text } />
    </div>
  }
}
