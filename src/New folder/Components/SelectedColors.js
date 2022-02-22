import React, {useState, useEffect,useContext} from 'react';
import {BsCheck} from 'react-icons/bs';
import {Context} from './Context/Context';
function SelectedColors (props) {
  const contextData = useContext (Context);
  const [SelectedIndex, setSelectedIndex] = useState (0);

  const [ColorsList, setColorsList] = useState ([
    {color: '#808080',className:"darkColor"},
    {color: '#008CFF',className:"blueColor"},
    {color: '#00B400',className:"greenColor"},
    {color: '#FF0001',className:"redColor"},
  ]);

  useEffect (() => {
    let value = localStorage.getItem ('SelectedColorIndex');
    value = JSON.parse (value);
    if (value === null || value === undefined) {
      setSelectedIndex (0);
    } else {
      setSelectedIndex (value);
    }
  }, []);

  return (
    <div
      className="d-flex flex-wrap justify-content-center bg-white p-1"
      style={{gap: '10px',borderRadius:"5px",zIndex:8}}
    >
      {ColorsList.map ((item, index) => {
        let selected = false;
        if (SelectedIndex === index) {
          selected = true;
        }
        return (
          <div
            key={index}
            className="TextHolderDropDown d-flex justify-content-center align-items-center borderColor CommonCssClassCursorPointer"
            style={{backgroundColor: item.color}}
            onClick={() => {
              contextData.handleSelectColors(item.className)
              setSelectedIndex (index);
              localStorage.setItem (
                'SelectedColorIndex',
                JSON.stringify (index)
              );
            }}
          >
            {selected && <BsCheck className="CheckMark" />}
          </div>
        );
      })}
      <div
       onClick={()=>{
        contextData.handleDisplayColorsDropDown(false)
        contextData.HandleBackGroundColorOfModal (false);
       }}
        style={{
          '--color-1': 'deepskyblue',
          '--color-2': '#000080e6',
          '--color-3': '#008000de',
          '--color-4': '#ff0000c4',
          background: `
      linear-gradient(
        170deg,
        var(--color-1),
        var(--color-3),
        var(--color-4),
        var(--color-2) 50%
      )
    `,

          // Unrelated styles:
          color: 'white',
          textAlign: 'center',
          padding: "4px 0px",
          width:"100px",
          borderRadius: 5,
          cursor:"pointer",
        }}
      >
        OK
      </div>
    </div>
  );
}

export default SelectedColors;
