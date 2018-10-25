import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ClearButton from './ClearButton';


configure({adapter: new Adapter()});

describe('<ClearButton>',()=>{
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<ClearButton/>);
  });

  it('show the button when show is true',()=>{
    wrapper.setProps({show: true});
    expect(wrapper.find('[className="Clear"]')).toHaveLength(1)
  });

  it('show nothing whed show is false',()=>{
    wrapper.setProps({show: false});
    expect(wrapper.find('[className="Clear"]')).toHaveLength(0)
  });


});
