import React from 'react';
import styles from '../../../Style';
import injectSheet from 'react-jss';
import {HiPlus} from 'react-icons/hi';
import TextareaAutosize from 'react-autosize-textarea';
function BookInnerSection (props) {
  return (
    <div>
      <div>
        <div
          className="outerWrapperBox BorderRadius d-flex"
          style={{
            alignItems: 'unset',
            position: 'relative',
            gap: '12px',
          }}
        >
          {props.list[props.index].value.bookUri
            ? <div
                style={{width: '160px', height: '160px', border: '1px solid'}}
              >
                <img
                  src={props.list[props.index].value.bookUri}
                  alt="selectedImage"
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </div>
            : <label
                htmlFor="uploadFile"
                className="OuterWrapperPlusIconBookSections"
              >
                <HiPlus className="PlusIconBookSections" />
              </label>}
          <input
            style={{display: 'none'}}
            type="file"
            id="uploadFile"
            accept="image/png, image/jpeg"
          />
          <div style={{position: 'relative', display: 'flex'}}>
            <div style={{width: '100%'}}>
              {props.list[props.index].toggleSwitch[0].selected &&
                <div>
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    placeholder='Title'
                    draggable="false"
                    value={props.list[props.index].value.title}
                    onChange={() => {
                      console.log ('onchange');
                    }}
                  />
                </div>}
              {props.list[props.index].toggleSwitch[1].selected &&
                <div>
                  <TextareaAutosize
                    className="InputFieldBachUpCv"
                    placeholder='Author(s)'
                    draggable="false"
                    value={props.list[props.index].value.author}
                    onChange={() => {
                      console.log ('onchange');
                    }}
                  />
                </div>}
            </div>
          </div>
          {props.display_dashesLine &&
            <div className="SectionBorderBottom CommonCssClassAbsolutePosition" />}
        </div>
      </div>
    </div>
  );
}
const StyledApp = injectSheet (styles) (BookInnerSection);
export default StyledApp;
