import React, { useState } from "react";
import Editor from "react-medium-editor";
import "./HomePage.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

function MyStatefulEditor(props) {
  const [text, settext] = useState(props.data);
  function handleChange(text) {
    settext(text);
    console.log("jj = ",text)
    if(text)
    props.HandleText(true)
    else{
      props.HandleText(false)
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <div className="RichText" style={{display:props.bolet ? "block" : "none"}}></div>
      <Editor
       tag="pre"
        className="Editor"
        onChange={handleChange}
        options={{
          placeholder: {
            text: props.data,
            hideOnClick: true,
          },
        }}
      />
    </div>
  );
}
export default MyStatefulEditor;
