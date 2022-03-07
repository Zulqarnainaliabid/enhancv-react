import React, {useState, useEffect, useContext} from 'react';
import {Context} from './Context/Context';
import {FaCloudUploadAlt} from 'react-icons/fa';
import {GoEyeClosed} from 'react-icons/go';
export default function UserImage (props) {
  const contextData = useContext (Context);
  const [DisplayUserIngHover, setDisplayUserIngHover] = useState ('none');
  const [DisplayUserImage, setDisplayUserImage] = useState (true);

  function HandleCloseUserImage () {
    setDisplayUserImage (false);
  }
  
  return (
    <div>
      <div>
        <div
          style={{
            position: 'relative',
            display: DisplayUserImage ? 'block' : 'none',
            marginLeft: '60px',
          }}
          onMouseEnter={() => {
            setDisplayUserIngHover ('block');
          }}
          onMouseLeave={() => {
            setDisplayUserIngHover ('none');
          }}
        >
          <img
            style={{borderRadius: contextData.UserImageShape ? '50%' : ''}}
            className="UserImg CommonCssClassCursorPointer BorderRadius"
            id="intro"
            alt={'intro'}
            src={contextData.UserEmptyImage}
          />
          <div
            style={{
              display: DisplayUserIngHover,
              borderRadius: contextData.UserImageShape ? '50%' : '',
            }}
            className="outerWrapperUserImgHover CommonCssClassAbsolutePosition CommonCssClassCursorPointer BorderRadius LeftRightTopBottomZero"
          >
            <div
              style={{
                margin: '58px 0px 0px 33px',
              }}
              className="outerWrapperIconUserImag"
            >
              <FaCloudUploadAlt
                className="UploadIconUserImg CommonCssClassWhiteColor BorderRadius CommonCssClassUploadIconAndEyeIcon"
                onClick={() => {
                  contextData.HandleBackGroundColorOfModal (true);
                  contextData.HandleToggleModalCSSClass("outerWrapperModalImagePicker")
                  contextData.HandleToggleModal("ImagePicker")
                  contextData.HandleShowModal(true)
                }}
              />
              <GoEyeClosed
                onClick={HandleCloseUserImage}
                className="EyeIconUserImg CommonCssClassWhiteColor BorderRadius CommonCssClassUploadIconAndEyeIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
