import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {RiCloseFill} from 'react-icons/ri';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from (list);
  const [removed] = result.splice (startIndex, 1);
  result.splice (endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from (source);
  const destClone = Array.from (destination);
  const [removed] = sourceClone.splice (droppableSource.index, 1);

  destClone.splice (droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: '12px',
  margin: `0 0 ${grid}px 0`,
  // change background colour if dragging
  // styles we need to apply on draggables
  ...draggableStyle,
});

function DragAndDropComponent (props) {
  const contextData = useContext (Context);
  const [state, setState] = useState ([
    [{id: 'item-0-164388507579', content: 'item'}],
    [{id: 'item-10-1643885075791', content: 'item'}],
  ]);

  useEffect (() => {
    let value = localStorage.getItem ('SectionsArray');
    value = JSON.parse (value);
    if (value !== null) {
      if (value.Left.length !== 0) {
        for (let i = 0; i < value.Left.length; i++) {
          state[0].push ({id: value.Left[i],content:"not"});
        }
      }
      if (value.Right.length !== 0) {
        for (let j = 0; j < value.Right.length; j++) {
          state[1].push ({id: value.Right[j],content:"not"});
        }
      }
      setState ([...state]);
    }
  }, []);

  function HandleIndexes(data){
    console.log("new",data)
   let value = {
      Left: [],
      Right: [],
    }
    for(let i=1; i<data[0].length; i++){
      value.Left.push(data[0][i].id)
    }
    for(let j=1; j<data[1].length; j++){
      value.Right.push(data[1][j].id)
    }
    console.log("hello12",value)
    localStorage.setItem ('SectionsArray', JSON.stringify (value));
  }

  function onDragEnd (result) {
    const {source, destination} = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder (state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState (newState);
      HandleIndexes(newState)
    } else {
      const result = move (state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      setState (newState.filter (group => group.length));
      HandleIndexes(newState.filter (group => group.length))
    }
  }

  function HandleRemoveElement (data) {
    contextData.HandleRemoveElement (data);
    let value = localStorage.getItem ('SectionsArray');
    value = JSON.parse (value);
    if (value !== null) {
      if (value.Left.length !== 0) {
        for (let j = 0; j < value.Left.length; j++) {
          if (value.Left[j] === data) {
            value.Left.splice (j, 1);
            break;
          }
        }
        localStorage.setItem ('SectionsArray', JSON.stringify (value));
      } else if (value.Right.length !== 0) {
        for (let i = 0; i < value.Right.length; i++) {
          if (value.Right[i] === data) {
            value.Right.splice (i, 1);
            break;
          }
        }
        localStorage.setItem ('SectionsArray', JSON.stringify (value));
      }
    }
  }

console.log("log",state)
  return (
    <div style={{height: '500px'}}>
      {/* <button
        type="button"
        onClick={() => {
          setState ([...state, getItems (1)]);
        }}
      >
        Add new item
      </button> */}
      <div>
        <p className="mt-4 mb-4 DNDMainHeading">
          Drag the boxes to<br />
          re-arrange the sections
        </p>
      </div>
      <div className="outerWrapperHeaderDragAndDrop">
        <p className="HeaderDragAndDrop">Header</p>
      </div>
      <div
        style={{
          display: contextData.ToggleTemplate ? 'flex' : 'block',
          width: '357px',
          backgroundColor: 'white',
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map ((el, ind) => {
            return (
              <div key={ind}>
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      className="OuterWrapperDragAndDropComponent"
                    >
                      {el.map ((item, index) => {
                        let selected = true;
                        console.log("jj",item.content)
                        console.log("id=",item.id)
                        if (item.content === 'item') {
                          selected = false;
                        }
                        if (selected) {
                          return (
                            <div
                              key={index}
                              style={{
                                width: contextData.ToggleTemplate
                                  ? '160px'
                                  : '340',
                              }}
                            >
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    className="DNDItems CommonCssClassWhiteColor "
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle (
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <div
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                      }}
                                    >
                                      <p className="ColonIconInDnd CommonCssClassWhiteColor CommonCssClassAbsolutePosition">
                                        ::
                                      </p>
                                      {item.id}
                                      <p>
                                        <RiCloseFill
                                          onClick={() => {
                                            HandleRemoveElement (item.id);
                                            const newState = [...state];
                                            newState[ind].splice (index, 1);
                                            setState (
                                              newState.filter (
                                                group => group.length
                                              )
                                            );
                                          }}
                                          className="closeModal CommonCssClassCursorPointer CloseIconInDnd CommonCssClassWhiteColor CommonCssClassAbsolutePosition"
                                        />
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            </div>
                          );
                        }
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      <p
        className="DragAndDropContinueButton FontWeight CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius fontSize14"
        onClick={() => {
          props.setState (true);
          contextData.HandleUpdateIndexes ();
        }}
      >
        Continue editing
      </p>
    </div>
  );
}
export default DragAndDropComponent;
