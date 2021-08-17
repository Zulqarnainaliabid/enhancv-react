import React from "react";
import "./HomePageSabSection.css";
import { RiCloseFill } from "react-icons/ri";
import {Sections} from './Section'
function HomaPageSabSection(props) {
  const {useRef} = React;
  const childRef = useRef();
  const dragOver = (e) => {
    e.preventDefault();
  };
  function HandleMargen(item) {
    let temp = [];
    temp = props.Array;
    item.margen = "20px";
    item.BoxShedow = "5px -19px #88888859";
    props.setArray([...temp]);
  }
  function HandleMargenLeave(item) {
    let temp = [];
    temp = props.Array;
    temp.map((item, index) => {
      item.margen = "0px";
      item.BoxShedow = "unset";
    });
    props.setArray([...temp]);
  }
  function handleDragEnd() {
    let temp = [];
    temp = props.Array;
    temp.map((item, index) => {
      item.margen = "0px";
      item.BoxShedow = "unset";
    });
    props.setArray([...temp]);
  }

  function drop(e, index, left) {
    e.preventDefault();
    let Id_Start = parseInt(e.dataTransfer.getData("card_id"));
    let actual_Id_Start = Id_Start;
    const position = e.dataTransfer.getData("start_container");
    let temp = [];
    temp = props.Array;
    if (
      (position === "Left" && left === true) ||
      (position === "Right" && left === false)
    ) {
      console.log("IF part");
      if (position === "Right") {
        for (var i = 0; i < temp.length; i++) {
          if (temp[i].Left === false) {
            Id_Start--;
            if (Id_Start < 0) {
              actual_Id_Start = i;
              temp[i].Left = left;
              console.log("8");
              break;
            }
          }
        }
      }
      Id_Start = actual_Id_Start;
      temp[index].Left = left;
    } else {
      console.log("Else part");
      actual_Id_Start = 0;
      for (var i = 0; i < temp.length; i++) {
        if (position === "Left") {
          if (temp[i].Left !== left) {
            Id_Start--;
            if (Id_Start < 0) {
              actual_Id_Start = i;
              temp[i].Left = left;
              break;
            }
          }
        } else {
          if (temp[i].Left !== left) {
            Id_Start--;
            if (Id_Start < 0) {
              actual_Id_Start = i;
              temp[i].Left = left;
              break;
            }
          }
        }
      }
      Id_Start = actual_Id_Start;
    }
    let startFunction = temp[Id_Start];
    temp.splice(Id_Start, 1);
    temp.splice(index, 0, startFunction);
    props.setArray([...temp]);
    localStorage.setItem("Section", JSON.stringify(temp));
  }
  function HandleDRagStart(index, position, e) {
    e.dataTransfer.setData("card_id", index);
    e.dataTransfer.setData("start_container", position);
  }
  function HandleLeftContainer() {
    let temp = props.Array;
    let flag = false;
    temp.map((item, index) => {
      if (item.Left === false) {
        flag = true;
      } else {
        flag = false;
      }
    });
    if (flag === true) {
      temp[0].Left = true;
    }
    props.setArray([...temp]);
    localStorage.setItem("Section", JSON.stringify(temp));
  }
  function HandleRightContainer() {
    let temp = props.Array;
    let flag = false;
    temp.map((item, index) => {
      if (item.Left === true) {
        flag = true;
      } else {
        flag = false;
      }
    });
    if (flag === true) {
      temp[0].Left = false;
    }
    props.setArray([...temp]);
    localStorage.setItem("Section", JSON.stringify(temp));
  }
  return (
    <>
    <div style={{position:"absolute", zIndex:"-1",boxSizing:"border-box",overflow:"hidden"}}>
      <Sections ref={childRef}/>
      </div>
    <div style={{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",backgroundColor:"#65696d42",zIndex:"1"}}>
      <div className="TeaxtHolderSubSections">
        Drag the boxes to <br/> re-arrange the sections
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="AppSubSections">
          <div className="HeaderSubSections">Header</div>
          <div className="outerWraperContainerSubSections">
            <div
              className="LeftContainerSubSections"
              onDrop={HandleLeftContainer}
              onDragOver={dragOver}
            >
              {props.Array &&
                props.Array.filter((item) => item.Left === true).map(
                  (item, index) => {
                    return (
                        <div 
                          key={index}
                          draggable
                          onDragStart={(e) => HandleDRagStart(index, "Left", e)}
                          onDragEnd={() => handleDragEnd()}
                          onDragEnter={() => HandleMargen(item)}
                          onDrop={(e) => drop(e, index, true)}
                          onDragLeave={() => HandleMargenLeave(item)}
                          onDragOver={dragOver}
                          style={{
                            marginTop: item.margen,
                            boxShadow: item.BoxShedow,
                            position: "relative",
                          }}
                          onMouseEnter={() => {
                            let temp = [];
                            temp = props.Array;
                            temp[index].ToggleCrossIconLeft = true;
                            props.setArray([...temp]);
                          }}
                          onMouseLeave={() => {
                            let temp = [];
                            temp = props.Array;
                            temp[index].ToggleCrossIconLeft = false;
                            props.setArray([...temp]);
                          }}
                        >
                          <div
                            className="DotIconsSubSections"
                            style={{ position: "absolute" }}
                          >
                            : :
                          </div>
                          <RiCloseFill
                            className="crossIcoSubSections"
                            style={{
                              position: "absolute",
                              display: true ? "block" : "none",
                            }}
                            onClick={()=>{
                              console.log("remove Closs IconeLeft")
                              let nameSection = item.name
                              console.log("nameSectionBox,,",nameSection)
                              props.HandleRemoveSection(nameSection)
                              childRef.current.HandleRemoveSectionRearrange(nameSection)
                            }}
                          />
                          <div className="boxSubSections">{item.name}</div>
                        </div>
                    );
                  }
                )}
            </div>
            <div
              className="RightContainerSubSections"
              onDrop={HandleRightContainer}
              onDragOver={dragOver}
            >
              {props.Array &&
                props.Array.filter((item) => item.Left === false).map(
                  (item, index) => {
                    return (
                        <div
                          key={index}
                          draggable
                          onDragStart={(e) =>
                            HandleDRagStart(index, "Right", e)
                          }
                          onDragEnd={() => handleDragEnd()}
                          onDragEnter={() => HandleMargen(item)}
                          onDragLeave={() => HandleMargenLeave(item)}
                          onDrop={(e) => drop(e, index, false)}
                          onDragOver={dragOver}
                          style={{
                            marginTop: item.margen,
                            boxShadow: item.BoxShedow,
                            position: "relative",
                          }}
                          onMouseEnter={() => {
                            let temp = [];
                            temp = props.Array;
                            temp[index].ToggleCrossIconRight = true;
                            props.setArray([...temp]);
                          }}
                          onMouseLeave={() => {
                            let temp = [];
                            temp = props.Array;
                            temp[index].ToggleCrossIconRight = false;
                            props.setArray([...temp]);
                          }}
                        >
                          <div
                            className="DotIconsSubSections"
                            style={{ position: "absolute" }}
                          >
                            : :
                          </div>
                          <RiCloseFill
                            className="crossIcoSubSections"
                            style={{
                              position: "absolute",
                              display: true ? "block" : "none",
                            }}
                            onClick={()=>{
                              console.log("remove Closs Icone Right")
                              let nameSection = item.name
                              console.log("nameSectionBox,,",nameSection)
                              props.HandleRemoveSection(nameSection)
                              props.HandleRemoveSectionRearrange(nameSection)
                            }}
                          />
                          <div className="boxSubSections">{item.name}</div>
                        </div>
                    );
                  }
                )}
            </div>
          </div>
          <div
            className="submitButtonSubSections"
            onClick={() => {
              props.setToggleRearrangeSection(false);
              props.HandleAddNewSection();
            }}
          >
            Continue editing
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomaPageSabSection;
