import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import AppContainer from '../src/AppContainer/AppContainer.jsx';
import EventDescription from '../src/EventDescription/EventDescription.jsx';

describe('Dialog', function() {



    it ('registration form dialog should be hidden on startup', function() {
        const wrapper = mount(<AppContainer />);
        expect(wrapper.find('#registrationForm')).to.have.length(1);
        expect(wrapper.find('#registrationForm').props().open).to.equal(undefined);
    });

    // it ('registration form dialog should be shown after button click', function() {
    //     const wrapper = mount(<EventDescription />);
    //     wrapper.find('.add-button').simulate('click');
    //     expect(wrapper.find('#registrationForm').props().open).to.equal(undefined);
    // })
});
