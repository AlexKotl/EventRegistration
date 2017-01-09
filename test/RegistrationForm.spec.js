import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import RegistrationForm from '../src/RegistrationForm/RegistrationForm.jsx';

describe('<RegistrationForm />', function() {
    it ('should has all inputs', function() {
        const wrapper = shallow(<RegistrationForm/>);
        expect(wrapper.find('input[name="name"]')).to.have.length(1);
    });
});
