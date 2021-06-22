import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import DevListModal from './components/devs/DevListModal';
import AddDevModal from './components/devs/AddDevModal';
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
		<Provider store={store}>
			<>
				<SearchBar />
				<div className="container">
					<AddButton />
					<AddLogModal />
					<EditLogModal />
					<AddDevModal />
					<DevListModal />
					<Logs />
				</div>
			</>
		</Provider>
	);
};

export default App;
