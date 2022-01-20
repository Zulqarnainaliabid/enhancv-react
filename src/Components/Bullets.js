import React, {useState} from 'react';
import Editor from 'react-medium-editor';
export default function InputBullets (props) {
  const [bulletText, setbulletText] = useState ('');
  return (
    <div>
      <div
        onClick={props.handleText}
        className="EditorText"
        style={{
          display: props.ShowBullets ? 'block' : 'none',
          marginTop: '0px',
        }}
      >
        {props.checkplacehoderBollets
          ? <div>jj</div>
          : <div>
              <div className="summary">
                <Editor
                  text={bulletText}
                  onKeyPress={props.handleKeypress}
                  onChange={text => {
                    setbulletText (text);
                    props.setBullotsTextHolder (text);
                    let array = props.list;
                    array[props.IndexItem].value.bullotsTextHolder = text;
                    localStorage.setItem (
                      'arrayProject',
                      JSON.stringify (array)
                    );
                  }}
                  options={{
                    placeholder: {
                      text: 'What was a successful outcome of your work?',
                      hideOnClick: true,
                    },
                  }}
                />
              </div>
            </div>}
      </div>
    </div>
  );
}
