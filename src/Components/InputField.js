import React, {useState, useRef, useEffect, useContext} from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import {Context} from './Context/Context';
const InputField = React.forwardRef ((props, ref) => {
  const contextData = useContext (Context);
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
  let Style = null;
  if (props.useUpperCase) {
    Style = {
      textTransform: props.UpperCaseHeaderInputField ? 'uppercase' : 'lower',
      textAlign: props.CursorCenter ? 'center' : '',
      width: props.CustomWidth,
      // backgroundColor:"black"
    };
  } else {
    Style = {
      textAlign: props.CursorCenter ? 'center' : '',
      width: props.CustomWidth,
    };
  }
  return (
    <TextareaAutosize
      maxLength={props.maximumLength ? '4' : ''}
      ref={inputRef}
      style={Style}
      onFocus={HandleFocus}
      onBlur={HandleBlur}
      className={`textarea s
        ${ActiveOpacity ? 'OpacityInPlaceHolder' : ''}

        ${props.selectedColor ? contextData.SelectedColor : ''}

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
