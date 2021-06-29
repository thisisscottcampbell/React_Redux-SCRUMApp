import React from 'react';
import AddDevModal from '../AddDevModal';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { StoreWrapper } from '../../../Store';

configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<StoreWrapper>
			<AddDevModal />
		</StoreWrapper>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('has two inputs', () => {
	expect(wrapped.find('input').length).toEqual(2);
});

it('inputs values update to user input', () => {
	const firstName = wrapped.find('#firstName');
	const lastName = wrapped.find('#lastName');

	firstName.simulate('change', {
		target: { value: 'first_name' },
	});

	lastName.simulate('change', {
		target: { value: 'last_name' },
	});

	expect(wrapped.find('#firstName').prop('value')).toEqual('first_name');

	expect(wrapped.find('#lastName').prop('value')).toEqual('last_name');
});
