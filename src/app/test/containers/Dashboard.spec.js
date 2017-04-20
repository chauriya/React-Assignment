import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import  {Dashboard} from '../../containers/Dashboard';

describe('Dashboard', () => {
    
    const wrapper = shallow(<Dashboard />);

    it('should have one div element', () => {
        expect(
            wrapper.find('div').length
        ).equal(1);
    });

    it('should have one legend', () => {
        expect(
            wrapper.find('legend').length
        ).equal(1);
    });
});