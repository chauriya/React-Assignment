import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import  {Header} from "../../components/Header";

describe('Header', () => {

    it('expect Header exist', () => {
        expect(
            shallow(
                <Header />
            ).length
        ).equal(1)
    });

    it('should have three link elements', () => {
        expect(
            shallow(
                 <Header />
            ).find('Link').length
        ).equal(3)
    });

    it('ul should have class "nav navbar-nav"', () => {
        expect(
            shallow(
                <Header />
            ).find('ul').hasClass('nav navbar-nav')
        ).to.equal(true)
    });
 
    it('expect Header to have two div elements', () => {
        expect(
            shallow(
                 <Header />
            ).find('div').length
        ).equal(2)
    });
});