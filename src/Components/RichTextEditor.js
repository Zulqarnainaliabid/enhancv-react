import React from 'react';
import Editor from 'react-medium-editor';
require ('medium-editor/dist/css/medium-editor.css');
require ('medium-editor/dist/css/themes/default.css');
function RichTextEditor (props) {
  return (
    <div style={{width: props.EditorWidth}}>
      <Editor
        className={props.otherStyle}
        data-placeholder={props.placeHolder}
        text={props.value}
        onChange={text => {
          let data = {
            index: props.index,
            name: props.name,
            value: text,
          };
          props.handleInputData (data);
        }}
      />
    </div>
  );
}

export default RichTextEditor;
