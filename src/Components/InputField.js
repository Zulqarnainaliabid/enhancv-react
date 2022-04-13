import React, {useState, useRef, useEffect,useContext} from 'react';
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

  return (
    <TextareaAutosize
      maxLength={props.maximumLength ? '4' : ''}
      ref={inputRef}
      style={{
        textTransform: props.UpperCaseHeaderInputField
          ? 'uppercase'
          : 'lowercase',
          textAlign:props.CursorCenter?"center":""
      }}
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
