import React, {createContext, useState, useEffect} from 'react';
import UserImg from '../Images/UserEmptyImage.PNG';
import background from '../Images/BackImg0.jpg';
export const Context = createContext ();
export const ContextProvider = ({children}) => {
  const [BackgroundColorOfModal, setBackgroundColorOfModal] = useState (false);
  const [UserEmptyImage, setUserEmptyImage] = useState (UserImg);
  const [DisplaySettings, setDisplaySettings] = useState (false);
  const [ToggleSettingsValue, setToggleSettingsValue] = useState (false);
  const [UserImageShape, setUserImageShape] = useState (false);
  const [ToggleModal, setToggleModal] = useState ('SignIn');
  const [ToggleTemplate, setToggleTemplate] = useState (false);
  const [BackImage, setBackImage] = useState (background);
  const [SelectedColor, setSelectedColor] = useState ('darkColor');
  const [AddSectionInArray, setAddSectionInArray] = useState (null);
  const [BackImageModal, setBackImageModal] = useState('')
  const [ToggleModalCssClass, setToggleModalCssClass] = useState (
    'outerWrapperModalImagePicker'
  );
  const [ShowModal, setShowModal] = useState (false);
  const [BackGroundHighLitter, setBackGroundHighLitter] = useState (null);
  const [
    DisplayDropDownAlertMessage,
    setDisplayDropDownAlertMessage,
  ] = useState (false);
  const [DisplayTemplateModal, setDisplayTemplateModal] = useState (false);
  const [DisplayBackImageModal, setDisplayBackImageModal] = useState (false);
  const [DisplayColorsDropDown, setDisplayColorsDropDown] = useState (false);
  const [Transparent, setTransparent] = useState (false);
  const [UpdateBachGroundHighLitter, setUpdateBachGroundHighLitter] = useState (
    false
  );
  const [RemoveSectionInArray, setRemoveSectionInArray] = useState (null);
  const [UpdateIndexes, setUpdateIndexes] = useState (false);
  const [AddSectionName, setAddSectionName] = useState(null)
  const [UpdateBackUpCv, setUpdateBackUpCv] = useState(null)
  const [DisplayLoading, setDisplayLoading] = useState(false)
  const [DisplayNaveBarDropDown, setDisplayNaveBarDropDown] = useState(false)
  const [UpdateLoginSuccess, setUpdateLoginSuccess] = useState(false)
  const [UpdateFontFamily, setUpdateFontFamily] = useState(false)
  const [RemoveBackGround, setRemoveBackGround] = useState(null)
  const [DeleteBackUpCv, setDeleteBackUpCv] = useState(null)


  function UpdateHandleLoginSuccess(data){
    setUpdateLoginSuccess(data)
  }

  function HandleUpdateFontFamily(toggle){
    setUpdateFontFamily(toggle)
  }

  function HandleBackGroundColorOfModal (toggle) {
    setBackgroundColorOfModal (toggle);
  }
  
  function handleBackImageModal(img){
    setBackImageModal(img)
  }

  function HandleUpdateUserImage (image) {
    setUserEmptyImage (image); 
    localStorage.setItem ('UserImage', JSON.stringify (image));
  }
  function HandleDisplaySettings (Toggle) {
    setDisplaySettings (Toggle);
  }
  function UpdateToggleSettingsValue (toggle) {
    setToggleSettingsValue (!ToggleSettingsValue);
  }
  function HandleUserImageShape (toggle) {
    setUserImageShape (toggle);
    localStorage.setItem ('UserImageShape', JSON.stringify (toggle));
  }

  function HandleShowModal (toggle) {
    setShowModal (toggle);
  }
  function HandleToggleModal (toggle) {
    setToggleModal (toggle);
  }

  function HandleToggleModalCSSClass (toggleCssClass) {
    setToggleModalCssClass (toggleCssClass);
  }

  useEffect(() => {
    let Template = localStorage.getItem ('Template');
    Template = JSON.parse (Template);
    if (Template) {
      HandleToggleTemplate(Template)
    }else{
      HandleToggleTemplate(false)
    }
  }, [])
  

  function HandleToggleTemplate (toggleTemplate) {
    localStorage.setItem ('Template', JSON.stringify (toggleTemplate));
    setToggleTemplate (toggleTemplate);
  }

  function HandleBackImage (BackImage) {
    setBackImage (BackImage);
    localStorage.setItem ('BackImage', JSON.stringify (BackImage));
  }
  function HandleUpdateBackGroundHighLitter (data) {
    setBackGroundHighLitter (data);
  }
  function HandleDisplayDropDownAlertMessage (toggle) {
    setDisplayDropDownAlertMessage (toggle);
  }

  function HandleDisplayNaveBarDropDown (toggle) {
    setDisplayNaveBarDropDown (toggle);
  }

  function handleGetColors () {
    let Color = localStorage.getItem ('Colors');
    Color = JSON.parse (Color);
    if (Color === null || Color === undefined) {
      Color = 'darkColor';
    }
    setSelectedColor (Color);
  }

  useEffect (() => {
    let UserImageShape = localStorage.getItem ('UserImageShape');
    UserImageShape = JSON.parse (UserImageShape);
    if (UserImageShape !== null && UserImageShape !== undefined) {
      setUserImageShape (UserImageShape);
    }
    handleGetColors ();
  }, []);

  function handleSelectColors (selectedColor) {
    localStorage.setItem ('Colors', JSON.stringify (selectedColor));
    setSelectedColor (selectedColor);
  }
  function handleDisplayTemplateModal (toggle) {
    setDisplayTemplateModal (toggle);
  }
  function handleDisplayBackImageModal (toggle) {
    setDisplayBackImageModal (toggle);
  }

  function handleDisplayColorsDropDown (toggle) {
    setDisplayColorsDropDown (toggle);
  }

  function handleDisplayBackgroundTransparent (toggle) {
    setTransparent (toggle);
  }

  function handleAddSection (data) {
    setAddSectionInArray (data);
  }
  function handleUpdateBachGroundHighLitter () {
    setUpdateBachGroundHighLitter (!UpdateBachGroundHighLitter);
  }

  function HandleRemoveElement (data) {
    setRemoveSectionInArray (data);
    console.log("hello kala====",data)
    if(data==="Skill"){
      data =  "SkillsOuterSection"
    }else if(data==="TrainingCourses"){
      data = "TrainingOuterSection"
    }else if(data==="Project"){
      data="ProjectsOuterSection"
    }
    else{
      data = data + "OuterSection"
    }
   

    let UpperArray = localStorage.getItem ('ArrayUper');
    UpperArray = JSON.parse (UpperArray);
    let LowerArray = localStorage.getItem ('ArrayLower');
    LowerArray = JSON.parse (LowerArray);
    let TempData = null;

    if (LowerArray !== null) {
      for (let i = 0; i < LowerArray.length; i++) {
        console.log("hrrrr===",LowerArray[i].name,"====",data)
        if (LowerArray[i].name === data) {
          TempData = LowerArray.splice (i, 1);
          break;
        }
      }
    }
    if (TempData !== null) {
      UpperArray.push (TempData[0]);
    }
    localStorage.setItem ('ArrayUper', JSON.stringify (UpperArray));
    localStorage.setItem ('ArrayLower', JSON.stringify (LowerArray));
  }

  function HandleUpdateIndexes () {
    setUpdateIndexes (!UpdateIndexes);
  }

  function HandleAddSectionName(name){
    setAddSectionName(name)
  }

  function HandleUpdateBackUpCv(Toggle){
    setUpdateBackUpCv(Toggle)
  }
  function HandleDisplayLoading(Toggle){
         setDisplayLoading(Toggle)
  }

  function handleRemoveBackGround(toggle){
    setRemoveBackGround(toggle)
  }
  function handleDeleteBackUpCv(toggle){
    setDeleteBackUpCv(toggle)
  }
  return (
    <Context.Provider
      value={{
        HandleBackGroundColorOfModal,
        BackgroundColorOfModal,
        UserEmptyImage,
        HandleUpdateUserImage,
        HandleDisplaySettings,
        DisplaySettings,
        UpdateToggleSettingsValue,
        ToggleSettingsValue,
        HandleUserImageShape,
        UserImageShape,
        HandleShowModal,
        ShowModal,
        ToggleModal,
        HandleToggleModal,
        ToggleModalCssClass,
        HandleToggleModalCSSClass,
        ToggleTemplate,
        HandleToggleTemplate,
        HandleBackImage,
        BackImage,
        HandleUpdateBackGroundHighLitter,
        BackGroundHighLitter,
        HandleDisplayDropDownAlertMessage,
        DisplayDropDownAlertMessage,
        handleSelectColors,
        SelectedColor,
        handleDisplayTemplateModal,
        DisplayTemplateModal,
        handleDisplayBackImageModal,
        DisplayBackImageModal,
        DisplayColorsDropDown,
        handleDisplayColorsDropDown,
        Transparent,
        handleDisplayBackgroundTransparent,
        AddSectionInArray,
        handleAddSection,
        UpdateBachGroundHighLitter,
        handleUpdateBachGroundHighLitter,
        HandleRemoveElement,
        RemoveSectionInArray,
        HandleUpdateIndexes,
        UpdateIndexes,
        HandleAddSectionName,
        AddSectionName,
        UpdateBackUpCv,
        HandleUpdateBackUpCv,
        HandleDisplayLoading,
        DisplayLoading,
        handleBackImageModal,
        BackImageModal,
        DisplayNaveBarDropDown,
        HandleDisplayNaveBarDropDown,
        UpdateHandleLoginSuccess,
        UpdateLoginSuccess,
        HandleUpdateFontFamily,
        UpdateFontFamily,
        handleRemoveBackGround,
        RemoveBackGround,
        handleDeleteBackUpCv,
        DeleteBackUpCv
      }}
    >
      {children}
    </Context.Provider>
  );
};
