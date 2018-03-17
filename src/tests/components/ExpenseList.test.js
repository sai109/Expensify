import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList.jsx';
import expenses from '../fixtures/expenses';

test('should render expense list with expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={expenses}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with no expenses', () => {
	const wrapper = shallow(<ExpenseList expenses={[]}/>);
	expect(wrapper).toMatchSnapshot();
});
