import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { IoIosCamera } from "react-icons/io";
import { RiSettings5Fill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import UserImg from "./Backgroundimg/Capture.PNG";
import SwitchButtons from "./toggleButtons";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import AvatarEditor from "react-avatar-editor";
import { GrFormClose } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { RiDeleteBinLine } from "react-icons/ri";
import {INCREMENTDATA} from './Redux/actions/indux'
import {useSelector, useDispatch} from 'react-redux'
export default function Header(props) {
  const [Border, setBorder] = useState(null);
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [DisplayUserIngHover, setDisplayUserIngHover] = useState("none");
  const [DisplayUserImage, setDisplayUserImage] = useState(true);
  const [ToggleButton, setToggleButton] = useState(false);
  const [ShowPhone, setShowPhone] = useState(true);
  const [ShowEmail, setShowEmail] = useState(true);
  const [ShowLink, setShowLink] = useState(true);
  const [ShowLocation, setShowLocation] = useState(true);
  const [UperCase, setUperCase] = useState(true);
  const [ShowTitle, setShowTitle] = useState(true);
  const [BorderRadius, setBorderRadius] = useState("9px");
  const [ShowModal, setShowModal] = useState(false);
  const [CheckIfImag, setCheckIfImag] = useState(false);
  const [FacekoobButtons, setFacekoobButtons] = useState("flex");
  const [scaleValue, setScaleValue] = useState(1);
  const [CheckFinalUserImag, setCheckFinalUserImag] = useState("none");
  const [displayFinalImage, setdisplayFinalImage] = useState(false);
  const [UploadedImag, setUploadedImag] = useState(UserImg);
  const [userProfileImage, setUserProfileImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [editor, setEditor] = useState(null);
  const [UserName, setUserName] = useState('');
  const [UserTitle, setUserTitle] = useState("");
  const [UserPhone, setUserPhone] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserLocation, setUserLocation] = useState("");
  const [UserLink, setUserLink] = useState("");
  const [Circle, setCircle] = useState("#00c091");
  const [Square, setSquare] = useState("#ccc");
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  function HandleBoarder() {
    dispatch(INCREMENTDATA())
    console.log("onclick1234;;")
    props.button();
    setBorder("1px solid #60d5ba");
    setbackgroundColor("white");
    setShowHeaderButton("block");
    setToggleButton(false);
  }
  useEffect(() => {
    setbackgroundColor(null);
    setBorder(null);
    setShowHeaderButton("none");
    setToggleButton(false);
  }, [props.data]);

  useEffect(() => {
    setbackgroundColor(null);
    setBorder(null);
    setShowHeaderButton("none");
    setToggleButton(false);
  }, [counter]);

  function HandleCloseUserImage() {
    setDisplayUserImage("none");
  }
  function HandleToggleButton() {
    setToggleButton(!ToggleButton);
  }
  function HandleBorderRadiusCircle() {
    setBorderRadius("112px");
    setSquare("#ccc");
    setCircle("#00c091");
  }
  function HandleBorderRadiusVerticle() {
    setBorderRadius("9px");
    setSquare("#00c091");
    setCircle("#ccc");
  }
  function handleModal() {
    setShowModal(true);
  }
  function handleClosModal() {
    setShowModal(false);
  }
  const onScaleChange = (scaleChangeEvent) => {
    const scaleValue = parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleValue);
  };
  let data = [
    { lebel: "Show Link", name: "showlink", set: HandleLinks },
    { lebel: "Show Title", name: "showtitle", set: HandleTitle },
    { lebel: "Show Email", name: "showemail", set: HandleEmail },
    { lebel: "Show Location", name: "showlocation", set: HandleLocation },
    { lebel: "UpperCase Name", name: "upperCasename", set: HandleUperCase },
    { lebel: "Show Photo", name: "showphoto", set: HandleUserImage },
    { lebel: "Show Phone", name: "showphone", set: HandlePhone },
  ];
  function HandlerBackButtons() {
    setCheckIfImag(false);
    setFacekoobButtons("flex");
  }
  function handleDleteUserImage() {
    setdisplayFinalImage(false);
    setCheckFinalUserImag("none");
  }
  const selectImage = (fileChangeEvent) => {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    if (
      !(
        type.endsWith("jpeg") ||
        type.endsWith("png") ||
        type.endsWith("jpg") ||
        type.endsWith("gif")
      )
    ) {
    } else {
      setSelectedImage(fileChangeEvent.target.files[0]);
      setCheckIfImag(true);
      setFacekoobButtons("none");
      setdisplayFinalImage(false);
    }
  };
  const onCrop = () => {
    if (editor !== null) {
      const url = editor.getImageScaledToCanvas().toDataURL();
      setdisplayFinalImage(true);
      setUserProfileImage(url);
      setCheckIfImag(false);
      setSelectedImage(null);
      setFacekoobButtons("flex");
    }
  };
  function HandleUserName(e) {
    setUserName(e.target.value);
    localStorage.setItem("userProfilename", JSON.stringify(UserName));
  }
  function HnadleUserTitle(e) {
    setUserTitle(e.target.value);
    localStorage.setItem("userTitle", JSON.stringify(UserTitle));
  }
  function HnadleUserPhone(e) {
    setUserPhone(e.target.value);
    localStorage.setItem("userPhone", JSON.stringify(UserPhone));
  }
  function HnadleUserEmail(e) {
    setUserEmail(e.target.value);
    localStorage.setItem("userEmail", JSON.stringify(UserEmail));
  }
  function HnadleUserLocation(e) {
    setUserLocation(e.target.value);
    localStorage.setItem("userLocation", JSON.stringify(UserLocation));
  }
  function HnadleUserLink(e) {
    setUserLink(e.target.value);
    localStorage.setItem("userLink", JSON.stringify(UserLink));
  }

  function HandleUserImage(toggle) {
    if (toggle) {
      setDisplayUserImage(toggle);
      localStorage.setItem("ToggleUsImage", JSON.stringify(toggle));
    } else {
      setDisplayUserImage(toggle);
      localStorage.setItem("ToggleUsImage", JSON.stringify(toggle));
    }
  }
  function HandlePhone(toggle) {
    if (toggle) {
      setShowPhone(toggle);
      localStorage.setItem("ToggleUsPhone", JSON.stringify(toggle));
    } else {
      setShowPhone(toggle);
      localStorage.setItem("ToggleUsPhone", JSON.stringify(toggle));
    }
  }
  function HandleEmail(toggle) {
    if (toggle) {
      setShowEmail(toggle);
      localStorage.setItem("ToggleUsEmail", JSON.stringify(toggle));
    } else {
      setShowEmail(toggle);
      localStorage.setItem("ToggleUsleEmail", JSON.stringify(toggle));
    }
  }
  function HandleLinks(toggle) {
    if (toggle) {
      setShowLink(toggle);
      localStorage.setItem("ToggleUsleLink", JSON.stringify(toggle));
    } else {
      setShowLink(toggle);
      localStorage.setItem("ToggleUsleLink", JSON.stringify(toggle));
    }
  }
  function HandleLocation(toggle) {
    if (toggle) {
      setShowLocation(toggle);
      localStorage.setItem("ToggleUsLocation", JSON.stringify(toggle));
    } else {
      setShowLocation(toggle);
      localStorage.setItem("ToggleUsLocation", JSON.stringify(toggle));
    }
  }
  function HandleUperCase(toggle) {
    if (toggle) {
      setUperCase(toggle);
      localStorage.setItem("ToggleUsUperCase", JSON.stringify(toggle));
    } else {
      setUperCase(toggle);
      localStorage.setItem("ToggleUsUperCase", JSON.stringify(toggle));
    }
  }
  function HandleTitle(toggle) {
    if (toggle) {
      setShowTitle(toggle);
      localStorage.setItem("ToggleUsTitle", JSON.stringify(toggle));
    } else {
      setShowTitle(toggle);
      localStorage.setItem("ToggleUsTitle", JSON.stringify(toggle));
    }
  }

  useEffect(() => {
    if (localStorage.getItem("userProfilename") !== null) {
      let value = localStorage.getItem("userProfilename");
      setUserName(JSON.parse(value));
    }
    if (localStorage.getItem("userTitle") !== null) {
      let value = localStorage.getItem("userTitle");
      setUserTitle(JSON.parse(value));
    }
    if (localStorage.getItem("userPhone") !== null) {
      let value = localStorage.getItem("userPhone");
      setUserPhone(JSON.parse(value));
    }
    if (localStorage.getItem("userEmail") !== null) {
      let value = localStorage.getItem("userEmail");
      setUserEmail(JSON.parse(value));
    }
    if (localStorage.getItem("userLocation") !== null) {
      let value = localStorage.getItem("userLocation");
      setUserLocation(JSON.parse(value));
    }
    if (localStorage.getItem("userLink") !== null) {
      let value = localStorage.getItem("userLink");
      setUserLink(JSON.parse(value));
    }
    if (localStorage.getItem("userImage") !== null) {
      let value = localStorage.getItem("userImage");
      setUploadedImag(JSON.parse(value));
    }

    if (localStorage.getItem("ToggleUsTitle") !== null) {
      let value = localStorage.getItem("ToggleUsTitle");
      setShowTitle(JSON.parse(value));
    }
    if (localStorage.getItem("ToggleUsUperCase") !== null) {
      let value = localStorage.getItem("ToggleUsUperCase");
      setUperCase(JSON.parse(value));
    }
    if (localStorage.getItem("ToggleUsLocation") !== null) {
      let value = localStorage.getItem("ToggleUsLocation");
      setShowLocation(JSON.parse(value));
    }
    if (localStorage.getItem("ToggleUsleLink") !== null) {
      let value = localStorage.getItem("ToggleUsleLink");
      setShowLink(JSON.parse(value));
    }
    if (localStorage.getItem("ToggleUsEmail") !== null) {
      let value = localStorage.getItem("ToggleUsEmail");
      setShowEmail(JSON.parse(value));
    }
    if (localStorage.getItem("ToggleUsPhone") !== null) {
      let value = localStorage.getItem("ToggleUsPhone");
      setShowPhone(JSON.parse(value));
    }
    if (localStorage.getItem("ToggleUsImage") !== null) {
      let value = localStorage.getItem("ToggleUsImage");
      setDisplayUserImage(JSON.parse(value));
    }
  }, []);

  return (
    <>
      <div
        style={{ display: ShowHeaderButton }}
        className="outerWraperBoxHeaderButton"
      >
        <IoIosCamera
          className="inconCamer"
          onClick={() => {
            setShowModal(!ShowModal);
          }}
        />
        <RiSettings5Fill onClick={HandleToggleButton} className="inconCamer" />
      </div>
      {ToggleButton && (
        <div className="OuterWraperToggleButtons">
          {data &&
            data.map((item) => {
              return (
                <div className="InnerWraperToggleButtons">
                  <div className="ToggleButtonsLabel">{item.lebel}</div>
                  <div className="outerWraperSwitchClass">
                    <SwitchButtons name={item.name} function={item.set} />
                  </div>
                </div>
              );
            })}
          <div className="BottomLineTogleButtons"></div>
          <div className="InnerWraperToggleButtons">
            <div className="ToggleButtonsLabel">Photo Style</div>
            <div
              // className="outerWraperSwitchClass"
              className="RadioButtonsToggleButtons"
              style={{ backgroundColor: Circle }}
              onClick={HandleBorderRadiusCircle}
            ></div>
            <div
              // className="outerWraperSwitchClass"
              className="RadioButtonsToggleButtons"
              style={{ backgroundColor: Square }}
              onClick={HandleBorderRadiusVerticle}
            ></div>
          </div>
        </div>
      )}
      <div
        className="outerWraperBox"
        onClick={HandleBoarder}
        style={{
          border: Border,
          backgroundColor: backgroundColor,
          borderRadius: "5px",
          width:"90%",
          alignItems:"unset"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="outerWraperInputFieldHaider">
              <input
                className="Username"
                value={UserName}
                type="text"
                style={{
                  fontSize: "42px",
                  fontWeight: "700",
                  textTransform: UperCase ? "upercase" : "lowercase",
                }}
                placeholder="YOUR NAME"
                onChange={HandleUserName}
                onFocus={()=>{
                 console.log("io focus")
                }}
                onBlur={()=>{
                  console.log("io blur")
                 }}
              />
              <input
                type="text"
                value={UserTitle}
                onChange={HnadleUserTitle}
                className="InnerHeadingText"
                style={{ display: ShowTitle ? "block" : "none" }}
                placeholder="Your next desired role"
              />
            </div>
            <div className="outerContainerAdressHeader">
              <div
                className="outerWraperAdress"
                style={{ display: ShowPhone ? "flex" : "none" }}
              >
                <RiPhoneFill className="AdressIconHeader" />
                <input
                  type="text"
                  className="adressText"
                  value={UserPhone}
                  onChange={HnadleUserPhone}
                  placeholder="Phone"
                />
                <div
                  className="AdressIconHeader"
                  style={{ display: ShowEmail ? "flex" : "none" }}
                >
                  @
                </div>
                <input
                  type="text"
                  className="adressText"
                  value={UserEmail}
                  onChange={HnadleUserEmail}
                  style={{ display: ShowEmail ? "flex" : "none" }}
                  placeholder="Email"
                />
              </div>
              <div className="outerWraperAdress">
                <BiLinkAlt
                  className="AdressIconHeader"
                  style={{ display: ShowLink ? "block" : "none" }}
                />
                <input
                  type="text"
                  className="adressText"
                  value={UserLink}
                  onChange={HnadleUserLink}
                  style={{ display: ShowLink ? "block" : "none" }}
                  placeholder="Website/Links"
                />
                <MdLocationOn
                  className="AdressIconHeader"
                  style={{ display: ShowLocation ? "block" : "none" }}
                />
                <input
                  type="text"
                  className="adressText"
                  value={UserLocation}
                  onChange={HnadleUserLocation}
                  style={{ display: ShowLocation ? "block" : "none" }}
                  placeholder="Location"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              display: DisplayUserImage ? "block" : "none",
            }}
            onMouseEnter={() => {
              setDisplayUserIngHover("block");
            }}
            onMouseLeave={() => {
              setDisplayUserIngHover("none");
            }}
          >
            <img
              className="UserImg"
              id="intro"
              alt={"intro"}
              src={UploadedImag}
              style={{ borderRadius: BorderRadius }}
            />
            <div
              style={{
                display: DisplayUserIngHover,
                borderRadius: BorderRadius,
              }}
              className="outerWraperUserImgHover"
            >
              <div className="outerWraperIconUserImag">
                <FaCloudUploadAlt
                  onClick={handleModal}
                  className="UploadIconUserImg"
                />
                <GoEyeClosed
                  onClick={HandleCloseUserImage}
                  className="EyeIconUserImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {ShowModal && (
        <>
          <div className="outerWraperModal">
            <div className="outerWraperCloseIconeModal">
              <div className="PhotoLabelModal">Photo</div>
              <GrFormClose onClick={handleClosModal} className="closeModal" />
            </div>
            <div
              onMouseLeave={() => {
                setCheckFinalUserImag("none");
              }}
              className="UserImgHover"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.719)",
                display: CheckFinalUserImag,
              }}
            >
              <RiDeleteBinLine
                onClick={handleDleteUserImage}
                className="deleteIconUserImage"
              />
            </div>
            {displayFinalImage ? (
              <div
                className="outerWraperModalImg"
                style={{ display: FacekoobButtons }}
              >
                <img
                  className="UserImg"
                  src={userProfileImage}
                  alt={"intro"}
                  style={{ borderRadius: "112px" }}
                  onMouseEnter={() => {
                    setCheckFinalUserImag("block");
                  }}
                />
              </div>
            ) : (
              <div
                className="outerWraperModalImg"
                style={{ display: FacekoobButtons }}
              >
                <img
                  className="UserImg"
                  alt={"intro"}
                  src={UserImg}
                  style={{ borderRadius: "112px" }}
                />
              </div>
            )}
            {CheckIfImag && (
              <div>
                <div className="outerWraperAvatar">
                  <AvatarEditor
                    scale={scaleValue}
                    image={selectedImage}
                    width={200}
                    height={200}
                    border={50}
                    ref={(ref) => setEditor(ref)}
                  />

                  <input
                    className="avatarbuttons"
                    style={{ width: "80%" }}
                    type="range"
                    value={scaleValue}
                    name="points"
                    min="1"
                    max="5"
                    step="0.1"
                    onChange={onScaleChange}
                  />
                </div>
                <div className="outerWraperBackButtonsUserUploadPhoto">
                  <div
                    onClick={HandlerBackButtons}
                    className="backButtonsUserUploadPhoto"
                  >
                    Back
                  </div>
                  <div
                    onClick={onCrop}
                    className="AcceptButtonsUserUploadPhoto"
                  >
                    Accept
                  </div>
                </div>
              </div>
            )}
            <div
              style={{ display: FacekoobButtons }}
              className="outerWraperTextLabelImportPhoto"
            >
              Import Photo
            </div>
            <div className="outerWraperSocialMediaModal">
              <div>
                <input
                  type="file"
                  id="uploadfile"
                  accept="image/png, image/jpeg"
                  onChange={(e) => {
                    selectImage(e);
                    e.target.value = null;
                  }}
                />
                <label
                  for="uploadfile"
                  style={{ display: FacekoobButtons }}
                  className="outerWraperFromComputer"
                >
                  From Computer
                </label>
                <div
                  className="outerWraperFromComputer"
                  style={{ display: FacekoobButtons }}
                >
                  <div>From Facebook</div>
                  <ImFacebook2 className="facebookIconModal" />
                </div>
              </div>
              <div
                style={{ display: FacekoobButtons }}
                onClick={() => {
                  setUploadedImag(userProfileImage);
                  localStorage.setItem(
                    "userImage",
                    JSON.stringify(userProfileImage)
                  );
                  setShowModal(false);
                }}
                className="outerWraperOKButtonModal"
              >
                OK
              </div>
            </div>
            <div className="oterWraperNotesLabelModal">
              Disclaimer. Keep in mind that in some US states, having a photo on
              your resume is forbidden.
            </div>
          </div>
          <div className="outerWraperModalHover" onClick={handleClosModal}>
            Hover
          </div>
        </>
      )}
    </>
  );
}
