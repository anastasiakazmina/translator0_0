import React from "react";
import ReactDOM from "react-dom";
import App from './app';

document.addEventListener("DOMContentLoaded", () => {
  if(JSDATA.current_controller_name === 'translator' && JSDATA.current_action_name === 'index'){
    document.querySelector('.start-btn-image').addEventListener('click', e => {
      window.location.href = "/translate";
    });
  }

  if(JSDATA.current_controller_name === 'translator' && JSDATA.current_action_name === 'translate'){
    ReactDOM.render(
      <App />,
      document.getElementById('react-translator-app')
    );
  }
});
