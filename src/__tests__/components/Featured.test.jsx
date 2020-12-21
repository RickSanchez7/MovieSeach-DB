import React from 'react';
import { mount } from 'enzyme';
// import moxios from 'moxios';

// import { fetchFeatured } from '../../utils/fetchData';
import Featured from '../../components/Featured/Featured';

describe('Featured', () => {
  let wrapped;
  beforeEach(() => {
    const trending = 'trending';
    const mediaType = 'all';
    wrapped = mount(<Featured headTitle={trending} mediaType={mediaType} />);
  });
  afterEach(() => {
    wrapped.unmount();
  });

  it('renders', () => {
    expect(wrapped).not.toBeNull();
  });

  // it('has a Head Title', (done) => {
  //   moxios.install();
  //   moxios.stubRequest(fetchFeatured(`trending/movie/day`));
  //   moxios.wait(() => {
  //     wrapped.update();
  //     console.log(wrapped.debug());

  //     done();
  //   });
  // });
});
