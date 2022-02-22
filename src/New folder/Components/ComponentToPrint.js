// import Example from './Example';
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useImperativeHandle,
} from 'react';
import Header from './Header';
import {Context} from '../Components/Context/Context';

import FindMeOuterSection from './FindMeSection/FindMeOuterSection'
import { FaCloudShowersHeavy } from 'react-icons/fa';

export const ComponentToPrint = React.forwardRef ((props, ref) => {
  const contextData = useContext (Context);
  const {ref1, ref2} = ref;
  const refOfHeight = useRef (null);
  const HeaderHighLitter = useRef (null);
  const FindMeHighLitter = useRef (null);
  const [Length, setLength] = useState (1035);
  const [Index, setIndex] = useState (0);
  const [displayBackGroundColor, setDisplayBackGroundColor] = useState (false);
  const [ShowLeftSection, setShowLeftSection] = useState (false);
  const [ShowRightSection, setShowRightSection] = useState (false);

  let header = (
    <Header
      setDisplayBackGroundColor={setDisplayBackGroundColor}
      childFunc={HeaderHighLitter}
      HandleBackGroundColor={handleChildClick}
    />
  );

  let FindMe = <FindMeOuterSection   
  setDisplayBackGroundColor={setDisplayBackGroundColor}
  childFunc={FindMeHighLitter}
  HandleBackGroundColor={handleChildClick} />
  const [resume, setresume] = useState ([
    {
      arr: [header],
      left: [FindMe],
      Right: [],
    },
  ]);
  const [height, setHeight] = useState (0);

  useEffect (() => {
    setHeight (refOfHeight.current.clientHeight);
    if (contextData.ToggleTemplate) {
      if (resume[0].Right.length === 0) {
        setShowRightSection (true);
      }
      if (resume[0].left.length === 0) {
        setShowLeftSection (true);
      }
    } else {
      if (resume[0].left.length === 0 && resume[0].Right.length === 0) {
        setShowLeftSection (true);
      }else{
        setShowLeftSection (false);
      }
    }
  });

  function HandleAddElement () {
    if (height >= Length) {
      let temp = resume;
      temp.push ({arr: ['zaka 1', 'uuu', 'kkkk', 'iii', '------']});
      setresume ([...temp]);
      setLength (Length * 2);
      setIndex (Index + 1);
    } else {
      let temp = resume;
      temp[Index].arr.push ('kk');
      setresume ([...temp]);
    }
  }

  useImperativeHandle (ref2, () => ({
    getAlert () {
      alert ('getAlert from Child');
    },
  }));
  // function HandleBackGroundColor(toggle){
  //   console.log("t",toggle)
  //  if(toggle){
  //   setDisplayBackGroundColor (true);
  //  }else{
  //   setDisplayBackGroundColor (false);
  //  }
  // }
  function HandleBackGroundColor () {
    setDisplayBackGroundColor (false);
    HeaderHighLitter.current ();
    FindMeHighLitter.current ();
  }

  function handleParentClick (e) {
    console.log ('parent');
    HandleBackGroundColor ();
  }

  function handleChildClick (e) {
    e.stopPropagation ();
    console.log ('child');
  }

  function HandleRemoveElement () {
    let temp = resume;
    if (temp[Index].arr.length === 0) {
      temp.pop ();
      setresume ([...temp]);
      setIndex (Index - 1);
    } else {
      temp[Index].arr.pop ();
      setresume ([...temp]);
    }
  }

  useEffect (() => {
    let BackImage = localStorage.getItem ('BackImage');
    BackImage = JSON.parse (BackImage);
    if (BackImage !== null || BackImage !== undefined) {
      contextData.HandleBackImage (BackImage);
    }
  }, []);

  return (
    <div ref={refOfHeight}>
      <div style={{position: 'sticky'}}>
        {/* <div>
          height: {height}
        </div> */}
        {/* <div onClick={HandleAddElement}>
          push:
        </div> */}
        {/* <div onClick={HandleRemoveElement}>
          pop:
        </div> */}
      </div>
      <div className="p-1 ">
        <div ref={ref1}>
          {resume.map ((item, index) => {
            let breakPage = true;
            if (index === 0) {
              breakPage = false;
            }
            return (
              <div key={index}>
                {breakPage &&
                  <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>page 1</div>
                  </div>}
                <div
                  className="outerContainerResume"
                  style={{
                    backgroundImage: `url(${contextData.BackImage})`,
                  }}
                >
                  <div style={{zIndex: '999'}}>
                    <div
                      className="HoverBackgroundColor CommonCssClassAbsolutePosition LeftRightTopBottomZero"
                      style={{
                        backgroundColor: displayBackGroundColor
                          ? '#DDDCE0'
                          : '',
                      }}
                      onClick={() => {
                        HandleBackGroundColor ();
                      }}
                    />
                    <div>
                      {item.arr.map ((item, index) => {
                        if (index === 0) {
                          return (
                            <div key={index}>
                              <div> {item}</div>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <section
                      style={{
                        // border: '4px solid green',
                        width: '100%',
                        paddingTop: '12px',
                        display: contextData.ToggleTemplate ? 'flex' : 'block',
                        gap: '20px',
                      }}
                      onClick={handleParentClick}
                    >
                      <div
                        style={{
                          // border: '2px solid red',
                          width: contextData.ToggleTemplate ? '60%' : '100%',
                        }}
                      >
                        {item.left.map ((item, index) => {
                          return (
                            <div key={index}>
                              <div> {item}</div>
                            </div>
                          );
                        })}
                        {ShowLeftSection &&
                          <div className="outerWrapperAddItemsRightSection">
                            <div className="outerWrapperButtonRightSection d-flex justify-content-center">
                              <p className="ButtonAddNewSection FontWeight text-center text-white BorderRadius CommonCssClassCursorPointer">
                                Add New Section
                              </p>
                            </div>
                          </div>}
                      </div>
                      <div
                        style={{
                          // border: '2px solid red',
                          width: contextData.ToggleTemplate ? '40%' : '100%',
                        }}
                      >
                        {item.Right.map ((item, index) => {
                          return (
                            <div key={index}>
                              <div> {item}</div>
                            </div>
                          );
                        })}
                        {ShowRightSection &&
                          <div className="outerWrapperAddItemsRightSection">
                            <div className="outerWrapperButtonRightSection d-flex justify-content-center">
                              <p className="ButtonAddNewSection FontWeight text-center text-white BorderRadius CommonCssClassCursorPointer">
                                Add New Section
                              </p>
                            </div>
                          </div>}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
