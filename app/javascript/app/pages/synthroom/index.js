import React from "react";
import ReactDOM from "react-dom";
import { Rack } from './app';

document.addEventListener("DOMContentLoaded", () => {
  if (JSDATA.current_controller_name == 'synthroom' && JSDATA.current_action_name == 'index'){
    let props = document.getElementsByTagName("div")[0].dataset.props;
    let testContent = JSON.parse(props);

    ReactDOM.render(
      <Rack fxes={testContent} />,
      document.body.appendChild(document.createElement("div"))
    );
  }
});
