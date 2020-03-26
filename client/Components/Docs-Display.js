import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown'

class DocsDisplay extends Component {
    constructor() {
        super();
        this.state = {
            docs: []
        };
    }

    // Fetch docs from db when you click the dropdown
    getDocs() {
      fetch('/retrieve')
      .then((res) => res.json())
    // the request should return all the documents for that user
      .then((res) => {
          this.setState({docs: res});
          
      })
    }

    componentDidMount() {
        this.getDocs(); // retrieves all the docs
    }

    render() {
        // render document names when you click the drop down button
        let dropDownItems = [];
        if (this.state.docs.length) {   
          for (let i = 0; i < this.state.docs.length; i++) {
            dropDownItems.push(
              <Dropdown.Item key={i} onClick={() => this.props.updateCodeFromDocs(this.state.docs[i].doc_text)}> 
              {this.state.docs[i].doc_name} 
              </Dropdown.Item>)
        }

        }
        
        return (
            <div>
       
                <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic">
                         Documents
                </Dropdown.Toggle>

                 <Dropdown.Menu> 
                   {dropDownItems}
                </Dropdown.Menu>
            </Dropdown>
            </div>
        )
    }
}

export default DocsDisplay;