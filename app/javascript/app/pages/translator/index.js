import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import './styles.scss';

document.addEventListener("DOMContentLoaded", () => {
  if (JSDATA.current_controller_name == 'translator' && JSDATA.current_action_name == 'index'){
    ReactDOM.render(
      <App />,
      document.getElementById('react-translator-app')
    );
  }
});
