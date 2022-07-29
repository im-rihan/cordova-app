import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as registerServiceWorker from './registerServiceWorker';

const startApp = () => {
	ReactDOM.render(
		(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		),
		document.getElementById('root'));
	registerServiceWorker();
};

if (window.cordova) {
	document.addEventListener('deviceready', startApp, false);
} else {
	startApp();
}