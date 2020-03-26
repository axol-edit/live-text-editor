import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';


// Import containers/componenents that we want to test
// import MainApp from '../client/Components/MainApp';
// import EditorContainer from '../client/Containers/Editor-Container';
// import ViewerContainer from '../client/Containers/Viewer-Container';
// import Editor from '../client/Components/Editor';
import Console from '../client/Components/Console';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
    describe('Console', () => {
      let wrapper;
      const props = {
          output: 'check'
      }; 

      beforeAll(() => {
        wrapper = shallow(<Console {...props}/>);
      });

      it('Renders a <div> tag with the output message', () => {
        expect(wrapper.type()).toEqual('div');
        expect(wrapper.text()).toEqual('check');
      });
    });
});
