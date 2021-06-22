import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/techs/TechListModal';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import { store } from './state/store';

const App = () => {
	useEffect(() => {
		//init Materialzie
		M.AutoInit();
	});
	return (
		<div>
			<Provider store={store}>
				<SearchBar />
				<div className="container">
					<AddButton />
					<AddLogModal />
					<EditLogModal />
					<Logs />
				</div>
			</Provider>
		</div>
	);
};

export default App;
