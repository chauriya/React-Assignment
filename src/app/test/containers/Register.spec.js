import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import {Register} from "../../containers/Register";
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('Register component', () => {

    const wrapper = mount(<Register />)
    it('expect three input field', () => {
        expect(
           wrapper.find('input').getNodes().length
       ).equal(3)
    });

    it('expect username to be empty', () => {
        expect(
            wrapper.state('name')
        ).to.equal('')
    });

    it('expect email to be empty', () => {
        expect(
            wrapper.state('email')
        ).to.equal('')
    });

    it('expect password te be empty', () => {
        expect(
            wrapper.state('password')
        ).to.equal('')
    });

    it('set username value onchange event in state', () => {
         wrapper.find('input[name="name"]').simulate('change', { target: { value: 'gaurav',
         name: 'name' } })
         expect(
             wrapper.state('name')
         ).to.equal('gaurav')
    });

    it('set email value onchange event in state', () => {
         wrapper.find('input[name="email"]').simulate('change', { target: { value: 'gaurav@gm.com',
         name: 'email' } })
         expect(
             wrapper.state('email')
         ).to.equal('gaurav@gm.com')
    });
 
    it('set password value onchange event in state', () => {
         wrapper.find('input[name="password"]').simulate('change', { target: { value: 'gaurav123',
         name: 'password' } })
         expect(
             wrapper.state('password')
         ).to.equal('gaurav123')
    });

    it('expect submit button enabled', () => {
        wrapper.find('button').simulate('click')
    });
});