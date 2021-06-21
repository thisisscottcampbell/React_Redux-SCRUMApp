import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
	useEffect(() => {
		//init Materialzie
		M.AutoInit();
	});
	return (
		<div className="App">
			<header className="App-header">SCRUM Logger</header>
		</div>
	);
};

export default App;
