import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import EventDescription from '../src/EventDescription/EventDescription.jsx';

describe('<EventDescription />', function() {
    const wrapper = shallow(<EventDescription />);

    it ('should have features blocks', function() {
        expect(wrapper.find('.logos .icon')).to.have.length(5);
    });

    it ('should have members list', function() {
        expect(wrapper.find('MembersList')).to.have.length(1);
    });

    it ('should have sign up button', function() {
        expect(wrapper.find('button').text()).to.equal('Sign Up for Event!');
    });

    it ('should have Github link', function() {
        expect(wrapper.find('a').props().href).to.equal('https://github.com/Slicer256/EventRegistration');
    })
});
