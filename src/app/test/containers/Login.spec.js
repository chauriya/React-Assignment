import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import {Login} from "../../containers/Login";
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('login component', () => {

    const wrapper = mount(<Login />)

    it('should have two input elements', () => {
       expect(
           wrapper.find('input').getNodes().length
       ).equal(2);
    });

    it('expect name should be empty', () => {
        expect(
            wrapper.state('name')
        ).to.equal('')
    });

    it('expect password should be empty', () => {
        expect(
            wrapper.state('password')
        ).to.equal('')
    });

    it('should set username value onchange event', () => {
         wrapper.find('input[name="name"]').simulate('change', {target: {value: 'Hello',
         name: 'name'}});
         expect(
             wrapper.state('name')
         ).to.equal('Hello');
    });

    it('should set password value onchange event', () => {
         wrapper.find('input[name="password"]').simulate('change', {target: {value: 'Gaurav',
         name: 'password'}});
         expect(
             wrapper.state('password')
         ).to.equal('Gaurav');
    });

    it('expect submit button enabled', () => {
        wrapper.find('button').simulate('click')
    });
});