import React, {useState, useEffect, useContext} from 'react';
import {BsCheck} from 'react-icons/bs';
import {Context} from './Context/Context';
import {Form, Button, Dropdown} from 'react-bootstrap';
import {FaAngleDown} from 'react-icons/fa'
function SelectedColors (props) {
  const contextData = useContext (Context);
  const [SelectedIndex, setSelectedIndex] = useState (0);
  const [SelectedFontFamily, setSelectedFontFamily] = useState(0)
  const [DisplayDropDown, setDisplayDropDown] = useState (false);
  const [SelectFontFamily, setSelectFontFamily] = useState("Faustina")
  const [ColorsList, setColorsList] = useState ([
    {color: '#808080', className: 'darkColor'},
    {color: '#008CFF', className: 'blueColor'},
    {color: '#00B400', className: 'greenColor'},
    {color: '#FF0001', className: 'redColor'},
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
 const FontFamily=[
  {name:"Faustina",CSSClass:"fontFamilyFaustina"},
  {name:"Karla",CSSClass:"fontFamilyKarla"},
  {name:"Poppins",CSSClass:"fontFamilyPoppins"},
  {name:"Rubik",CSSClass:"fontFamilyRubik"},
  {name:"Releway",CSSClass:"fontFamilyReleway"},
  {name:"Lato",CSSClass:"fontFamilyLato"},
  {name:"Bitter",CSSClass:"fontFamilyBitter"},
  {name:"EXO2",CSSClass:"fontFamilyEXO2"},
  {name:"Chivo",CSSClass:"fontFamilyChivo"},
  {name:"Montserrat",CSSClass:"fontFamilyMontserrat"},
  {name:"Oswald",CSSClass:"fontFamilyOswald"},
  {name:"Volkhov",CSSClass:"fontFamilyVolkhov"},

 ]
  return (
    <div className="bg-white p-3" style={{borderRadius:"7px"}}>
      <div className="PositionRelative pb-2">
        <p className='mb-1' style={{fontWeight:"600",fontSize:"14px"}}>Font Family:</p>
        <label
         onClick={() => {
          setDisplayDropDown (!DisplayDropDown);
        }}
          htmlFor="SelectServer"
          className="d-flex pt-2 pb-2 ps-3 pe-3  justify-content-between BorderRadius0rem align-items-center  outerWrapperServerDropDown
                    "
        >
          <p className="FontSize text-black">
            {SelectFontFamily}
          </p>
          <FaAngleDown className="MessageBosIcon DarkColor" />
        </label>
        <Dropdown show={DisplayDropDown}>
          <Dropdown.Toggle id="SelectServer" style={{display: 'none'}} />
          <Dropdown.Menu
            className="bg-white w-100 TransFormDropDownServer OuterWrapperServerDropDownList TransFormDropDown"
            style={{
              borderRadius: 'unset',
              borderColor: '#7C7C7C',
              padding: 'unset',
            }}
          >
            <div>
              {FontFamily.map ((item, index) => {
                let select = false
                if(SelectedFontFamily===index){
                  select = true
                }  
                return (
                  <div  
                    key={index}
                    onClick={() => {
                      setSelectedFontFamily (index);
                      setDisplayDropDown (false);
                      setSelectFontFamily(item.name)
                      localStorage.setItem ('FontFamily', JSON.stringify (item.CSSClass));
                      contextData.HandleUpdateFontFamily(!contextData.UpdateFontFamily)
                    }}
                    className="ps-3 pe-3 CursorPointer FieldTypeDropDownList"
                    style={{
                      backgroundColor: select ? '#1E90FF' : '',
                      color: select ? 'white' : '',
                      fontSize: '14px',
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <p className='mb-1' style={{fontWeight:"600",fontSize:"14px"}}>Colors:</p>
      <div
        className="d-flex flex-wrap justify-content-center  "
        style={{gap: '10px', borderRadius: '5px', zIndex: 8}}
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
                contextData.handleSelectColors (item.className);
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
          onClick={() => {
            contextData.handleDisplayColorsDropDown (false);
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
            padding: '4px 0px',
            width: '100px',
            borderRadius: 5,
            cursor: 'pointer',
          }}
        >
          OK
        </div>
      </div>
    </div>
  );
}

export default SelectedColors;
