import React, {useState} from 'react';
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
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});
let data = [
  [
    {id: 'item-0-1643885075791', content: 'item 0'},
    {id: 'item-2-1643885075791', content: 'item 2'},
    {id: 'item-3-1643885075791', content: 'item 3'},
    {id: 'item-4-1643885075791', content: 'item 4'},
    {id: 'item-5-1643885075791', content: 'item 5'},
    {id: 'item-9-1643885075791', content: 'item 9'},
  ],
];

function DragAndDropComponent (props) {
  const [state, setState] = useState ([
    [
      {id: 'item-0-164388507579', content: 'item 0'},
      {id: 'item-2-1643885075791', content: 'item 2'},
      {id: 'item-3-1643885075791', content: 'item 3'},
      {id: 'item-4-1643885075791', content: 'item 4'},
      {id: 'item-5-1643885075791', content: 'item 5'},
      {id: 'item-9-1643885075791', content: 'item 9'},
    ],
    [
      {id: 'item-10-1643885075791', content: 'item 10'},
      {id: 'item-12-1643885075791', content: 'item 12'},
      {id: 'item-13-1643885075791', content: 'item 13'},
      {id: 'item-14-1643885075791', content: 'item 14'},
      {id: 'item-15-1643885075791', content: 'item 15'},
      {id: 'item-19-1643885075791', content: 'item 19'},
    ],
  ]);

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
    } else {
      const result = move (state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      setState (newState.filter (group => group.length));
    }
  }

  return (
    <div>
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
          display: 'flex',
          width: '357px',
          backgroundColor: 'white',
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map ((el, ind) => {
            return (
              <div>
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      className="OuterWrapperDragAndDropComponent"
                      style={{minHeight: '452px'}}
                    >
                      {el.map ((item, index) => {
                        let display = true;
                        if (item.id === 'not Allow') {
                          display = false;
                        }
                        return (
                          <div
                            key={index}
                            style={{
                              display: display ? 'block' : 'none',
                              width: '159px',
                            }}
                          >
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  className="DNDItems CommonCssClassWhiteColor"
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
                                    {item.content}
                                    <p>
                                      <RiCloseFill
                                        onClick={() => {
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
                      })}
                      {/* {provided.placeholder} */}
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
        onClick={() => props.setState (true)}
      >
        Continue editing
      </p>
    </div>
  );
}
export default DragAndDropComponent;
