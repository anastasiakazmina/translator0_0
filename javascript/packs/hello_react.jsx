// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import Style from 'style-it';

// function callServer(id) {
//   fetch(`http://localhost:3000/api/fxes/${id}.json`)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     });
// }

const Fx = props => {
  const callServerLocal = async () => {
    const response = await fetch(`http://localhost:3000/api/fxes/${props.fx.id}.json`);
    const data = await response.json();
    alert(`Получили с сервера следующие данные:
       id: ${data.id};
       name: ${data.name};
       volume: ${data.volume};
     `)

    // Also working example, bun on .then(..)
    // fetch(`http://localhost:3000/api/fxes/${props.fx.id}.json`)
    //   .then(response => {
    //     console.log('callServerLocal(): Got response from server: ', response);
    //     return response.json();
    //   })
    //   .then(data => {
    //     console.log('callServerLocal(): Got json: ', data);
    //     alert(`Получили с сервера следующие данные:
    //       id: ${data.id};
    //       name: ${data.name};
    //       volume: ${data.volume};
    //     `)
    //   })
  };

  return (
    Style.it(`
      .fx-component:hover{
        color: blue;
        cursor: pointer;
      }
    `,
      <div className='fx-component' onClick={callServerLocal}>{props.fx.name}</div>
    )
  );
};

const Rack = props => {
  let fxElements = props.fxes.map(function(fx) {
    return <Fx fx={fx} key={fx.id} />;
  });

  return <div className="Rack">{fxElements}</div>;
};

document.addEventListener("DOMContentLoaded", () => {
  let props = document.getElementsByTagName("div")[0].dataset.props;
  let testContent = JSON.parse(props);

  ReactDOM.render(
    <Rack fxes={testContent} />,
    document.body.appendChild(document.createElement("div"))
  );
});
