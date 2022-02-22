import React, {useState, useRef, useEffect} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const InputField = React.forwardRef ((props, ref) => {
  const inputRef = useRef (null);
  const [ActiveOpacity, setActiveOpacity] = useState (false);
  function HandleFocus () {
    setActiveOpacity (true);
  }
  function HandleBlur () {
    setActiveOpacity (false);
  }
  useEffect (() => {
    inputRef.current.focus ();
  }, []);

  return (
    <TextareaAutosize
      ref={inputRef}
      style={{
        textTransform: props.UpperCaseHeaderInputField
          ? 'uppercase'
          : 'lowercase',
      }}
      onFocus={HandleFocus}
      onBlur={HandleBlur}
      className={`textarea s
        ${ActiveOpacity ? 'OpacityInPlaceHolder' : ''}

        ${props.otherStyle}
        ${props.color}
        `}
      placeholder={props.placeHolder}
      draggable="false"
      value={props.value}
      onChange={ev => {
        let data = {
          index: props.index,
          name: props.name,
          value: ev.target.value,
        };
        props.handleInputData (data);
      }}
    />
  );
});

export default InputField;
