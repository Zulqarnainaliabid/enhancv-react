import React from 'react'
import Editor from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
 function InputEditor(){
    const [checked, setchecked] = React.useState(true);
  function  handleChange(text, medium) {
    setchecked(text)
        // this.setState({text: text});
      }
      return (
        <div className="app">
          <Editor
            text={checked}
            onChange={handleChange}
          />
        </div>
      );
    }
  export default InputEditor