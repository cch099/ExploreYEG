// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import TagCloudX from './TagCloud';

describe('TagCloudX', () => {
  it('renders correctly', () => {
    const props = {
      // copyright: 'copyright'
    };

    const tree = renderer.create(<TagCloudX {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
