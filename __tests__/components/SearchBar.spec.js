import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../../src/components/SearchBar";

describe('SearchBar', () => {
  let componentUnderTest;
  const mockSearch = jest.fn();

  const getComponent = () => {
    if (!componentUnderTest) {
      componentUnderTest = shallow(
        <SearchBar search={mockSearch} />
      );
    }
    return componentUnderTest;
  };

  beforeEach(() => {
    componentUnderTest = undefined;
  })

  describe('SearchBar tests', () => {
    let component;

    beforeEach(() => {
      component = getComponent();
    })
    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('should call search onclick', () => {
      component.find('.btn-go').simulate('click', { preventDefault() {} });
      expect(mockSearch).toHaveBeenCalled();
    });

    it('should update state correctly', () => {
      expect(component.state()).toEqual({search: ''});
      component.find('input').simulate('change', {target: {value: 'test'}});
      expect(component.state()).toEqual({search: 'test'});
    });
  });
});