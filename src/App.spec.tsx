import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import TextAreaInput from './components/TextAreaInput';


describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });
});

describe('<TextAreaInput />' , () => {
    it('renders an editable area', () => {
        const editor = shallow(<TextAreaInput />);
        expect(editor.find('p').length).toEqual(2);
    });
});