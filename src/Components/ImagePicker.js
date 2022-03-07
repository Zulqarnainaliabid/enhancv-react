import React, {useState, useContext,useEffect} from 'react';
import {ImFacebook2} from 'react-icons/im';
import {RiDeleteBinLine} from 'react-icons/ri';
import UserImg from './Images/UserEmptyImage.PNG';
import AvatarEditor from 'react-avatar-editor';
import {Context} from './Context/Context';
export default function ImagePicker (props) {
  const contextData = useContext (Context);
  const [CheckIfImag, setCheckIfImag] = useState (false);
  const [FacekoobButtons, setFacekoobButtons] = useState ('flex');
  const [scaleValue, setScaleValue] = useState (1);
  const [CheckFinalUserImag, setCheckFinalUserImag] = useState ('none');
  const [displayFinalImage, setdisplayFinalImage] = useState (false);
  const [userProfileImage, setUserProfileImage] = useState (UserImg);
  const [selectedImage, setSelectedImage] = useState (null);
  const [editor, setEditor] = useState (null);

  const onScaleChange = scaleChangeEvent => {
    const scaleValue = parseFloat (scaleChangeEvent.target.value);
    setScaleValue (scaleValue);
  };
  function HandlerBackButtons () {
    setCheckIfImag (false);
    setFacekoobButtons ('flex');
  }

  function handleDleteUserImage () {
    setdisplayFinalImage (false);
    setCheckFinalUserImag ('none');
    contextData.HandleUpdateUserImage (UserImg);
  }
  

  const selectImage = fileChangeEvent => {
    const file = fileChangeEvent.target.files[0];
    const {type} = file;
    if (
      !(type.endsWith ('jpeg') ||
        type.endsWith ('png') ||
        type.endsWith ('jpg') ||
        type.endsWith ('gif'))
    ) {
    } else {
      setSelectedImage (fileChangeEvent.target.files[0]);
      setCheckIfImag (true);
      setFacekoobButtons ('none');
      setdisplayFinalImage (false);
    }
  };

  const onCrop = () => {
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas ().toDataURL ();
      setdisplayFinalImage (true);
      setUserProfileImage (url);
      contextData.HandleUpdateUserImage (url);
      setCheckIfImag (false);
      setSelectedImage (null);
      setFacekoobButtons ('flex');
    }
  };
  return (
    <div>
      {displayFinalImage
        ? <div
            style={{
              display: FacekoobButtons,
              justifyContent: 'center',
            }}
          >
            <div className="UserImg" style={{position: 'relative'}}>
              <img
                className="UserImg"
                src={userProfileImage}
                alt={'intro'}
                style={{borderRadius: '112px'}}
                onMouseEnter={() => {
                  setCheckFinalUserImag ('block');
                }}
              />
              <div
                style={{display: CheckFinalUserImag}}
                onMouseLeave={() => {
                  setCheckFinalUserImag ('none');
                }}
                className="UserImgHover CommonCssClassAbsolutePosition LeftRightTopBottomZero"
              >
                <RiDeleteBinLine
                  onClick={handleDleteUserImage}
                  className="deleteIconUserImage CommonCssClassCursorPointer"
                />
              </div>
            </div>

          </div>
        : <div style={{display: FacekoobButtons, justifyContent: 'center'}}>
            <img
              className="UserImg"
              alt={'intro'}
              src={UserImg}
              style={{borderRadius: '112px'}}
            />
          </div>}
      {CheckIfImag &&
        <div>
          <div
            style={{
              margin: '12px 0px 0px 18px',
            }}
          >
            <AvatarEditor
              scale={scaleValue}
              image={selectedImage}
              width={200}
              height={200}
              border={50}
              ref={ref => setEditor (ref)}
            />
            <input
              style={{
                width: '80%',
                margin: '8px 0px 0px 15px',
              }}
              type="range"
              value={scaleValue}
              name="points"
              min="1"
              max="5"
              step="0.1"
              onChange={onScaleChange}
            />
          </div>
          <div className="outerWrapperBackButtonsUserUploadPhoto d-flex justify-content-center">
            <div
              onClick={HandlerBackButtons}
              className="backButtonsUserUploadPhoto CommonCssClassCursorPointer BorderRadius"
            >
              Back
            </div>
            <div
              onClick={onCrop}
              className="AcceptButtonsUserUploadPhoto CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius"
            >
              Accept
            </div>
          </div>
        </div>}
      <div
        style={{display: FacekoobButtons}}
        className="outerWrapperTextLabelImportPhoto"
      >
        Import Photo
      </div>
      <div style={{marginBottom: '70px'}}>
        <input
          style={{display: 'none'}}
          type="file"
          id="uploadFile"
          accept="image/png, image/jpeg"
          onChange={e => {
            selectImage (e);
            e.target.value = null;
          }}
        />
        <label
          for="uploadFile"
          style={{display: FacekoobButtons}}
          className="outerWrapperFromComputer d-flex CommonCssClassCursorPointer BorderRadius justify-content-around align-items-center"
        >
          <div style={{fontSize: "14px"}}>From Computer</div>
        </label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '12px',
          }}
        >
          <div
            className="outerWrapperFromComputer d-flex CommonCssClassCursorPointer BorderRadius justify-content-center"
            style={{display: FacekoobButtons}}
          >
            <div style={{fontSize: "14px"}}>From Facebook</div>
            <ImFacebook2 className="facebookIconModal fontSize14" />
          </div>
          <div
            style={{display: FacekoobButtons}}
            onClick={() => {
              props.handleClosModal ();
            }}
            className="outerWrapperOKButtonModal CommonCssClassWhiteColor CommonCssClassCursorPointer BorderRadius align-items-center"
          >
            OK
          </div>
        </div>
      </div>
      <div className="outerWrapperNotesLabelModal CommonCssClassAbsolutePosition">
        Disclaimer. Keep in mind that in some US states, having a photo on
        your resume is forbidden.
      </div>
    </div>
  );
}
