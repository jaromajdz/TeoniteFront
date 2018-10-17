import React, { Component } from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configureMockStore from 'redux-mock-store';

import { connect } from 'react-redux';

import DropDownList from './DropDownList';

const middlewares = []
const mockStore = configureMockStore(middlewares)


configure({adapter: new Adapter()})

describe('DropDownList - TEST',()=>{
    let store;
    let wrapper;

    const mockAddAuthorfn = jest.fn();

    beforeEach(()=>{
      store = mockStore({
          authors: { baba: 10, natalia: 11 }

      });
    });



    it('Shoul show some rows with: word, counts',
      ()=>{
          wrapper = shallow(<DropDownList store={store} addAuthor={mockAddAuthorfn}/>);
          expect(wrapper.find('option')).toHaveLength(2);
      }
    );
  }
)
