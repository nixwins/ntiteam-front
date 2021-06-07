import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import LordService from './services/lord-service';


const lordService = new LordService();
lordService.getAllLords().then((planets) => {
    console.log(planets);
})

// lordService.deletePlanet(136).then((json) => {
//     console.log("created", json);
// });
ReactDOM.render(<App />, document.getElementById('root')
);

