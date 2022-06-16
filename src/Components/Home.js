import React, {useContext, useState, useEffect} from 'react';
import {Context} from './Context/Context';
import Resume from './Resume';
import Navbar from './Navbar';
import {CSSTransition} from 'react-transition-group';
import Modal from './Modal';
import {BallTriangle} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import DropDown from './DropDown';
import ModalLeftToRight from './ModalLeftToRight';
import SelectedColors from './SelectedColors';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import backImage from './Images/backImagesMemory.jpg';
import {HandleGetCvBackUp} from './Services';
import Section from './BackUpCv/Section';
import {ImPlus} from 'react-icons/im';
import UserImg from '../Components/Images/UserEmptyImage.PNG';
import {css} from '@emotion/react';
import FadeLoader from 'react-spinners/FadeLoader';

function Home () {
  const [displayPreLoader, setdisplayPreLoader] = useState (true);
  const contextData = useContext (Context);
  const [BackUpCvToggle, setBackUpCvToggle] = useState (false);
  const [BackUpCV, setBackUpCV] = useState ([]);
  let [LoaderColor, setLoaderColor] = useState ('#ffffff');
  let [loading, setLoading] = useState (true);

  useEffect (() => {
    const timer = setTimeout (() => {
      setdisplayPreLoader (false);
    }, 1000);
    return () => clearTimeout (timer);
  }, []);

  useEffect (async () => {
    let value = localStorage.getItem ('Users');
    value = JSON.parse (value);
    if (value) {
      setBackUpCvToggle (true);
      let data = await HandleGetCvBackUp ();
      if (data.data) {
        setLoading (false);
      }
      setBackUpCV ([...data.data]);
    } else {
      contextData.HandleToggleModal ('SignIn');
      contextData.HandleShowModal (true);
      contextData.HandleBackGroundColorOfModal (true);
    }
  }, []);

  function HandleRemovePreviousData () {
    setBackUpCvToggle (false);

    localStorage.setItem (
      'HeaderSettingsList',
      JSON.stringify ([
        {Label: 'Show Title', selected: true},
        {Label: 'Show Phone', selected: true},
        {Label: 'Show Link', selected: true},
        {Label: 'Show Email', selected: true},
        {Label: 'Show Location', selected: true},
        {Label: 'Uppercase Name', selected: true},
        {Label: 'Show Photo', selected: true},
      ])
    );

    localStorage.setItem (
      'SectionsArray',
      JSON.stringify ({
        Left: [],
        Right: [],
      })
    );
    localStorage.removeItem ('UserImageShape');
    localStorage.removeItem ('UserImageShape');
    localStorage.removeItem ('Skills');
    localStorage.removeItem ('HeadingValueSkills');
    localStorage.removeItem ('Summary');
    localStorage.removeItem ('ArrayLower');
    localStorage.removeItem ('ArrayUper');
    localStorage.removeItem ('indexOfUserImageShape');
    localStorage.removeItem ('HeaderInputValue');
    localStorage.removeItem ('SelectedColorIndex');
    localStorage.removeItem ('BorderStyle');
    localStorage.removeItem ('UserImage');
    localStorage.removeItem ('BackImage');
    localStorage.removeItem ('HeadingValueAchievements');
    localStorage.removeItem ('Colors');
    localStorage.removeItem ('Language');
    localStorage.removeItem ('Achievements');
    localStorage.removeItem ('Education');
    localStorage.removeItem ('Experience');
    localStorage.removeItem ('Training');
    localStorage.removeItem ('Projects');
    localStorage.removeItem ('Passion');
    localStorage.removeItem ('Volunteering');
    localStorage.removeItem ('IndustryExperience');
    localStorage.removeItem ('Strength');
    localStorage.removeItem ('FindMeOnline');
    localStorage.removeItem ('Template');
    contextData.HandleUpdateUserImage (UserImg);
    localStorage.removeItem ('HeadingValueEducation');
    localStorage.removeItem ('HeadingValueExperience');
    localStorage.removeItem ('HeadingValueFindMeOnline');
    localStorage.removeItem ('HeadingValueIndustryExperience');
    localStorage.removeItem ('HeadingValueLanguage');
    localStorage.removeItem ('HeadingValueMyTime');
    localStorage.removeItem ('HeadingValuePassion');
    localStorage.removeItem ('HeadingValueProjects');
    localStorage.removeItem ('HeadingValueStrength');
    localStorage.removeItem ('HeadingValueSummary');
    localStorage.removeItem ('HeadingValueTraining');
    localStorage.removeItem ('HeadingValueVolunteering');
    localStorage.removeItem ('arraySlice');
    localStorage.removeItem ('InputFieldCartMyTime');
    localStorage.removeItem ('arraySeries');
    localStorage.removeItem ('indexOfUserImageShape');
    localStorage.removeItem ('Book');
    localStorage.removeItem ('Custom');
    localStorage.removeItem ('Certification');
    localStorage.removeItem ('Philosophy');
    localStorage.removeItem ('Publication');
    localStorage.removeItem ('Reference');
    localStorage.removeItem ('Awards');
    localStorage.removeItem ('Reference');
    localStorage.removeItem ('HeadingValueBook');
    localStorage.removeItem ('HeadingValueCustom');
    localStorage.removeItem ('HeadingValueCertification');
    localStorage.removeItem ('HeadingValuePhilosophy');
    localStorage.removeItem ('HeadingValuePublication');
    localStorage.removeItem ('HeadingValueReference');
    localStorage.removeItem ('HeadingValueAwards');
  }

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red`;

  if (displayPreLoader) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '550px',
          flexDirection: 'column',
        }}
      >
        <BallTriangle width="100" color="#00C091" ariaLabel="loading" />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </p>
      </div>
    );
  } else if (BackUpCvToggle) {
    return (
      <div
        className="BackGroundImage"
        style={{
          backgroundImage: `url(${backImage})`,
          padding: '12px',
        }}
      >
        {loading &&
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              backgroundColor: 'black',
              opacity: '0.5',
              zIndex: '10',
            }}
          >
            <FadeLoader
              color={LoaderColor}
              loading={loading}
              css={override}
              size={250}
            />
          </div>}
        <div className="outerContainerBachUpCv">
          {BackUpCV.map ((item, index) => {
            return (
              <div key={index}>
                <Section
                  id={item.id}
                  list={item.data}
                  Subject={item.subject}
                  HandleRemovePreviousData={HandleRemovePreviousData}
                />
              </div>
            );
          })}
          <div
            onClick={() => {
              HandleRemovePreviousData ();
            }}
          >
            <p
              className="text-center text-white mb-2"
              style={{fontSize: '30px', fontWeight: 'bolder'}}
            >
              Add New CV
            </p> <div className="outerWrapperBackUpCvSection AddNewCv">
              <ImPlus className="AddNewCvIcons" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        {contextData.DisplayLoading &&
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0',
              bottom: '0',
              backgroundColor: 'black',
              opacity: '0.5',
              zIndex: '10',
            }}
          >
            <FadeLoader
              color={LoaderColor}
              loading={loading}
              css={override}
              size={250}
            />
          </div>}
        <div className="OuterContainer d-flex flex-column align-items-center">
          <CSSTransition
            in={contextData.ShowModal}
            timeout={500}
            classNames="alert"
            unmountOnExit
          >
            <Modal
              contentDisplay={contextData.ToggleModal}
              otherClass={contextData.ToggleModalCssClass}
            />
          </CSSTransition>
          <CSSTransition
            in={contextData.BackgroundColorOfModal}
            timeout={500}
            classNames="alert"
            unmountOnExit
          >

            <div
              className="backGroundOfModal CommonCssClassAbsolutePosition"
              style={{
                backgroundColor: contextData.Transparent
                  ? 'transparent'
                  : 'black',
                opacity: '0.8',
              }}
              onClick={() => {
                contextData.HandleBackGroundColorOfModal (false);
                contextData.HandleShowModal (false);
                contextData.HandleDisplayDropDownAlertMessage (false);
                contextData.handleDisplayTemplateModal (false);
                contextData.handleDisplayBackImageModal (false);
                contextData.handleDisplayColorsDropDown (false);
                contextData.HandleDisplayNaveBarDropDown (false);
              }}
            />
          </CSSTransition>
          <div style={{position: 'relative'}}>
            <Resume />
            {contextData.DisplayDropDownAlertMessage &&
              <div className="OuterWrapperDropDownAlertMessage">
                <DropDown ContentDisplay={true} />
              </div>}
            {contextData.DisplayNaveBarDropDown &&
              <div className="CommonCssClassAbsolutePosition OuterWrapperDropDownNaveBar">
                <DropDown ContentDisplay={false} />
              </div>}
          </div>

          {contextData.DisplayTemplateModal &&
            <div
              className="OuterWrapperModalTemplate"
              style={{zIndex: contextData.DisplayTemplateModal ? 8 : 0}}
            >
              <ModalLeftToRight ToggleModal={false} />
            </div>}
          {contextData.DisplayBackImageModal &&
            <div
              className="OuterWrapperModalTemplate"
              style={{zIndex: contextData.DisplayBackImageModal ? 8 : 0}}
            >
              <ModalLeftToRight ToggleModal={true} />
            </div>}
          <div
            className="OuterWrapperDropDown"
            style={{zIndex: contextData.DisplayColorsDropDown ? 8 : 8}}
          >
            <SlideDown closed={!contextData.DisplayColorsDropDown}>
              <SelectedColors />
            </SlideDown>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
