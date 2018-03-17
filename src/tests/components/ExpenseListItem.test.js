import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem.jsx';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expense', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListItem with out expense', () => {
	const wrapper = shallow(<ExpenseListItem />);
	expect(wrapper).toMatchSnapshot();
});
