import React from 'react';
import AddTicketModal from '../AddTicketModal';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { StoreWrapper } from '../../../Store';

configure({ adapter: new Adapter() });

it('has a drop down', () => {
	const wrapped = mount(
		<StoreWrapper>
			<AddTicketModal />
		</StoreWrapper>
	);

	expect(wrapped.find('input').length).toEqual(2);
	expect(wrapped.find('select').length).toEqual(1);
});
