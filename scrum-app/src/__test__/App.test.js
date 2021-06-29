import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App';
import SearchBar from '../components/layout/SearchBar';
import AddButton from '../components/layout/AddButton';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddTicketModal from '../components/tickets/AddTicketModal';
import AddDevModal from '../components/devs/AddDevModal';

configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
});

it('shows a search bar', () => {
	expect(wrapped.find(SearchBar).length).toEqual(1);
});

it('shows an add button', () => {
	expect(wrapped.find(AddButton).length).toEqual(1);
});

it('shows an add ticket modal', () => {
	expect(wrapped.find(AddTicketModal).length).toEqual(1);
});

it('shows an add dev modal', () => {
	expect(wrapped.find(AddDevModal).length).toEqual(1);
});
