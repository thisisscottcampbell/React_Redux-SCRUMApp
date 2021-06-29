import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Tickets from './components/tickets/Tickets';
import AddButton from './components/layout/AddButton';
import AddTicketModal from './components/tickets/AddTicketModal';
import EditTicketModal from './components/tickets/EditTicketModal';
import DevListModal from './components/devs/DevListModal';
import AddDevModal from './components/devs/AddDevModal';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
	useEffect(() => {
		M.AutoInit();
	});
	return (
		<>
			<SearchBar />
			<div className="container">
				<AddButton />
				<AddTicketModal />
				<EditTicketModal />
				<AddDevModal />
				<DevListModal />
				<Tickets />
			</div>
		</>
	);
};

export default App;
