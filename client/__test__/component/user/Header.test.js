import React from 'react';
import expect from 'expect';
import { stub } from 'sinon';
import hammerjs from 'hammerjs';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import mockData from '../../__mocks__/mockData';
import  { Header } from '../../../components/includes/Header';
import {getAllBooksAction} from '../../../actions/BookActions';

configure({ adapter: new Adapter() });

let props;

const setup = () => {
  props = {
    user: {
      fullName: 'test',
      id: 1,
      plan: 'Silver',
      isAdmin: 0
    },
      actions: {
        logoutAction: jest.fn(),
        editProfileAction: jest.fn()
      },
  }
  return shallow(<Header {...props} />)
}

describe('Component: Header', () => {
  it('tests that the component successfully rendered', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(14);
    expect(wrapper.find('Link').length).toBe(2);    
    expect(wrapper.find('a').length).toBe(6);
  })
  it('tests that the component received the user props', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.user.fullName).toBe('test');
    expect(wrapper.find('a').length).toBe(6);
    expect(wrapper.instance().props.user.fullName).toBe('test');
    expect(wrapper.instance().props.user.plan).toBe('Silver');
    expect(wrapper.instance().props.user.isAdmin).toBe(0);
  })

  it('tests that the component received the action creator', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.actions.editProfileAction).toBeTruthy;
    expect(wrapper.instance().props.actions.logoutAction).toBeTruthy;
  })

})