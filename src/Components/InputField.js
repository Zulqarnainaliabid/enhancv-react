import React from 'react'
import ContentEditable from 'react-contenteditable'

function MyComponent (props) {
  const  contentEditable = React.createRef();
const  handleChange = evt => {
    props.setFunction(evt.target.value)
  };
    return( <ContentEditable
              innerRef={contentEditable}
              html={props.InputText} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              placeholder={props.placeholder}
              className="test"
            />
    )
};
export default MyComponent