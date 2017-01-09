import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import RegistrationForm from '../src/RegistrationForm/RegistrationForm.jsx';

describe('<RegistrationForm />', function() {
    const wrapper = shallow(<RegistrationForm/>);

    it ('should have all inputs', function() {
        expect(wrapper.find('input[type="text"]')).to.have.length(3);
    });

    it ('should have 3 buttons', function() {
        expect(wrapper.find('button')).to.have.length(3);
    });
});
