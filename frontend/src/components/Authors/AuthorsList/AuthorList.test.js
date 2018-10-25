import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AuthorsList from './AuthorsList';


configure({adapter: new Adapter()});

describe('<AuthorsList>',()=>{
  let wrapper;
  let authors;

  beforeEach(() => {
      authors = {10: 'Tamara', 11: 'Babajaga'}
      wrapper = mount(<AuthorsList choosen={authors} removeAuthor={()=>0} />);
  });

  it('Should show two authors',()=>{
     expect(wrapper.find('[className="Author Delete"]')).toHaveLength(2)
  });

  it('Shuld show any authors',()=>{
    wrapper.setProps({choosen: {}});
    expect(wrapper.find('[className="Author Delete"]')).toHaveLength(0)
  });


});
