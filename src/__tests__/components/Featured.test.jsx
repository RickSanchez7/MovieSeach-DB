import React from 'react';
import { mount } from 'enzyme';
import Featured from '../../components/Featured/Featured';

describe('Featured', () => {
  let wrapper;
  beforeEach(() => {
    const trending = 'trending';
    const mediaType = 'all';
    wrapper = mount(<Featured headTitle={trending} mediaType={mediaType} />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
});
