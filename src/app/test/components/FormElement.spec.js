import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import  {FormElement} from '../../components/FormElement';

describe('FormElement', () => {
        
        const wrapper = shallow(<FormElement class='form-control' type= 'text' 
         name='name' value= '' />);
         console.log('FormElement.propTypes.length',FormElement.propTypes.value);
        it('expect FormElement exist', () => {
            expect(
                wrapper.length
            ).equal(1);
        });
        it('has className form-control', () => {
            expect(
                wrapper.props().className
            ).to.equal('form-control');
        });

        it('expect input field have type', () => {
            expect(
                wrapper.props().type
            ).to.not.be.undefined;
        });

        it('expect input field have name', () => {
            expect(
                wrapper.props().name
            ).to.not.be.undefined;
        });

        it('expect value to be defined', () => {
            expect(
                wrapper.props().value
            ).to.not.be.undefined;
        });

        it('should have propTypes defined', () => {
            expect(FormElement.propTypes.type).to.not.be.undefined;
            expect(FormElement.propTypes.value).to.not.be.undefined;
            expect(FormElement.propTypes.name).to.not.be.undefined;
            expect(FormElement.propTypes.onChange).to.not.be.undefined;
        });
});