import React, {useState, useEffect, useContext} from 'react';
import Header from './Header';
import {Context} from '../Context/Context';
import AchievementsOuterSection
  from './SubSections/Achievements/AchievementsOuterSection';
import ExperienceOuterSection
  from './SubSections/Experience/ExperienceOuterSection';
import SummaryOuterSection from './SubSections/Summary/SummaryOuterSection';
import LanguageOuterSection from './SubSections/Language/LanguageOuterSection';
import EducationOuterSection
  from './SubSections/Education/EducationOuterSection';
import FindMeOuterSection from './SubSections/FindMe/FindMeOuterSection';
import IndustryExperienceOuterSection
  from './SubSections/IndustryExperience/IndustryExperienceOuterSection';
import MyTimeOuterSection from './SubSections/MyTime/MuTimeOuterSection';
import ProjectsOuterSection from './SubSections/Projects/ProjectsOuterSection';
import SkillsOuterSection from './SubSections/Skills/SkillOuterSection';
import StrengthOuterSection from './SubSections/Strength/StrengthOuterSection';
import TrainingOuterSection
  from './SubSections/TrainingCourses/TrainingCoursesOuterSection';
import VolunteeringOuterSection
  from './SubSections/Volunteering/VolunteeringOuterSection';
import {RiDeleteBinLine} from 'react-icons/ri';
import PassionOuterSection from './SubSections/Passion/PassionOuterSection';
import {BiPencil} from 'react-icons/bi';
import {HandleDeleteCvBackUp, HandlePatchCvBackUp} from '../Services';

import AwardsOuterSection from './SubSections/Awards/AwardsOuterSection';
import BookOuterSection from './SubSections/Book/BookOuterSection';
import CertificationOuterSection
  from './SubSections/Certification/CertificationOuterSection';
import CustomOuterSection from './SubSections/Custom/CustomOuterSection';
import PhilosophyOuterSection
  from './SubSections/Philosophy/PhilosophyOuterSection';
import PublicationOuterSection
  from './SubSections/Publicatoin/PublicationOuterSection';
import ReferenceOuterSection
  from './SubSections/Reference/ReferenceOuterSection';

function Section (props) {
  let CVBackUpData = JSON.parse (props.list);
  const contextData = useContext (Context);

  console.log ('helodata', CVBackUpData);

  // console.log ('headingValue', CVBackUpData.Template);
  const [DisplayBackgroundColor, setDisplayBackgroundColor] = useState (false);
  const [SubjectName, setSubjectName] = useState ('');

  function LeftSection () {
    if (CVBackUpData.SectionArray.Left.length === 0 && CVBackUpData.Template) {
      return (
        <div className="outerWrapperAddItemsRightSection">
          <div className="outerWrapperButtonRightSection d-flex justify-content-center">
            <p className="ButtonAddNewSection FontWeight text-center text-white BorderRadius CommonCssClassCursorPointer">
              Add New Section
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {CVBackUpData.SectionArray.Left.map ((item, index) => {
            if (item === 'Book') {
              return (
                <div key={index}>
                  <BookOuterSection
                    list={CVBackUpData.Book}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueBook}
                  />
                </div>
              );
            }
            if (item === 'Custom') {
              return (
                <div key={index}>
                  <CustomOuterSection
                    list={CVBackUpData.Custom}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueCustom}
                  />
                </div>
              );
            }
            if (item === 'Certification') {
              return (
                <div key={index}>
                  <CertificationOuterSection
                    list={CVBackUpData.Certification}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueCertification}
                  />
                </div>
              );
            }
            if (item === 'Philosophy') {
              return (
                <div key={index}>
                  <PhilosophyOuterSection
                    list={CVBackUpData.Philosophy}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValuePhilosophy}
                  />
                </div>
              );
            }
            if (item === 'Publication') {
              return (
                <div key={index}>
                  <PublicationOuterSection
                    list={CVBackUpData.Publication}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValuePublication}
                  />
                </div>
              );
            }
            if (item === 'Reference') {
              return (
                <div key={index}>
                  <ReferenceOuterSection
                    list={CVBackUpData.Reference}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueReference}
                  />
                </div>
              );
            }
            if (item === 'Awards') {
              return (
                <div key={index}>
                  <AwardsOuterSection
                    list={CVBackUpData.Awards}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueAwards}
                  />
                </div>
              );
            }
            if (item === 'Achievements') {
              return (
                <div key={index}>
                  <AchievementsOuterSection
                    list={CVBackUpData.Achievements}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueAchievements}
                  />
                </div>
              );
            }
            if (item === 'Experience') {
              return (
                <div key={index}>
                  <ExperienceOuterSection
                    list={CVBackUpData.Experience}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueExperience}
                  />
                </div>
              );
            }
            if (item === 'Summary') {
              return (
                <div key={index}>
                  <SummaryOuterSection
                    list={CVBackUpData.Summary}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueSummary}
                  />
                </div>
              );
            }
            if (item === 'Language') {
              return (
                <div key={index}>
                  <LanguageOuterSection
                    list={CVBackUpData.Language}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueLanguage}
                  />
                </div>
              );
            }
            if (item === 'IndustryExperience') {
              return (
                <div key={index}>
                  <IndustryExperienceOuterSection
                    list={CVBackUpData.IndustryExperience}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueIndustryExperience}
                  />
                </div>
              );
            }
            if (item === 'MyTime') {
              return (
                <div key={index}>
                  <MyTimeOuterSection
                    Colors={CVBackUpData.Colors}
                    list={CVBackUpData.ChartData}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueMyTime}
                  />
                </div>
              );
            }
            if (item === 'FindMe') {
              return (
                <div key={index}>
                  <FindMeOuterSection
                    list={CVBackUpData.FindMeOnline}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueFindMeOnline}
                  />
                </div>
              );
            }
            if (item === 'Project') {
              return (
                <div key={index}>
                  <ProjectsOuterSection
                    list={CVBackUpData.Projects}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueProjects}
                  />
                </div>
              );
            }
            if (item === 'Skill') {
              return (
                <div key={index}>
                  <SkillsOuterSection
                    list={CVBackUpData.Skills}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueSkills}
                  />
                </div>
              );
            }
            if (item === 'Strength') {
              return (
                <div key={index}>
                  <StrengthOuterSection
                    list={CVBackUpData.Strength}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueStrength}
                  />
                </div>
              );
            }
            if (item === 'TrainingCourses') {
              return (
                <div key={index}>
                  <TrainingOuterSection
                    list={CVBackUpData.Training}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueTraining}
                  />
                </div>
              );
            }
            if (item === 'Volunteering') {
              return (
                <div key={index}>
                  <VolunteeringOuterSection
                    list={CVBackUpData.Volunteering}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueVolunteering}
                  />
                </div>
              );
            }
            if (item === 'Education') {
              return (
                <div key={index}>
                  <EducationOuterSection
                    list={CVBackUpData.Education}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueEducation}
                  />
                </div>
              );
            }
            if (item === 'Passion') {
              return (
                <div key={index}>
                  <PassionOuterSection
                    list={CVBackUpData.Passion}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueAchievement}
                  />
                </div>
              );
            }
          })}
        </div>
      );
    }
  }

  function RightSection () {
    if (CVBackUpData.SectionArray.Right.length === 0 && CVBackUpData.Template) {
      <div className="outerWrapperAddItemsRightSection">
        <div className="outerWrapperButtonRightSection d-flex justify-content-center">
          <p className="ButtonAddNewSection FontWeight text-center text-white BorderRadius CommonCssClassCursorPointer">
            Add New Section
          </p>
        </div>
      </div>;
    } else {
      return (
        <div>
          {CVBackUpData.SectionArray.Right.map ((item, index) => {
            if (item === 'Book') {
              return (
                <div key={index}>
                  <BookOuterSection
                    list={CVBackUpData.Book}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueBook}
                  />
                </div>
              );
            }
            if (item === 'Custom') {
              return (
                <div key={index}>
                  <CustomOuterSection
                    list={CVBackUpData.Custom}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueCustom}
                  />
                </div>
              );
            }
            if (item === 'Certification') {
              return (
                <div key={index}>
                  <CertificationOuterSection
                    list={CVBackUpData.Certification}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueCertification}
                  />
                </div>
              );
            }
            if (item === 'Philosophy') {
              return (
                <div key={index}>
                  <PhilosophyOuterSection
                    list={CVBackUpData.Philosophy}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValuePhilosophy}
                  />
                </div>
              );
            }
            if (item === 'Publication') {
              return (
                <div key={index}>
                  <PublicationOuterSection
                    list={CVBackUpData.Publication}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValuePublication}
                  />
                </div>
              );
            }
            if (item === 'Reference') {
              return (
                <div key={index}>
                  <ReferenceOuterSection
                    list={CVBackUpData.Reference}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueReference}
                  />
                </div>
              );
            }
            if (item === 'Awards') {
              return (
                <div key={index}>
                  <AwardsOuterSection
                    list={CVBackUpData.Awards}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueAwards}
                  />
                </div>
              );
            }
            if (item === 'Achievements') {
              return (
                <div key={index}>
                  <AchievementsOuterSection
                    list={CVBackUpData.Achievements}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueAchievements}
                  />
                </div>
              );
            }
            if (item === 'Experience') {
              return (
                <div key={index}>
                  <ExperienceOuterSection
                    list={CVBackUpData.Experience}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueExperience}
                  />
                </div>
              );
            }
            if (item === 'Summary') {
              return (
                <div key={index}>
                  <SummaryOuterSection
                    list={CVBackUpData.Summary}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueSummary}
                  />
                </div>
              );
            }
            if (item === 'Language') {
              return (
                <div key={index}>
                  <LanguageOuterSection
                    list={CVBackUpData.Language}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueLanguage}
                  />
                </div>
              );
            }
            if (item === 'IndustryExperience') {
              return (
                <div key={index}>
                  <IndustryExperienceOuterSection
                    list={CVBackUpData.IndustryExperience}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueIndustryExperience}
                  />
                </div>
              );
            }
            if (item === 'MyTime') {
              return (
                <div key={index}>
                  <MyTimeOuterSection
                    list={CVBackUpData.ChartData}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueMyTime}
                  />
                </div>
              );
            }
            if (item === 'FindMe') {
              return (
                <div key={index}>
                  <FindMeOuterSection
                    list={CVBackUpData.FindMeOnline}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueFindMeOnline}
                  />
                </div>
              );
            }
            if (item === 'Project') {
              return (
                <div key={index}>
                  <ProjectsOuterSection
                    list={CVBackUpData.Projects}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueProjects}
                  />
                </div>
              );
            }
            if (item === 'Skill') {
              return (
                <div key={index}>
                  <SkillsOuterSection
                    list={CVBackUpData.Skills}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueSkills}
                  />
                </div>
              );
            }
            if (item === 'Strength') {
              return (
                <div key={index}>
                  <StrengthOuterSection
                    list={CVBackUpData.Strength}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueStrength}
                  />
                </div>
              );
            }
            if (item === 'TrainingCourses') {
              return (
                <div key={index}>
                  <TrainingOuterSection
                    list={CVBackUpData.Training}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueTraining}
                  />
                </div>
              );
            }
            if (item === 'Volunteering') {
              return (
                <div key={index}>
                  <VolunteeringOuterSection
                    list={CVBackUpData.Volunteering}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueVolunteering}
                  />
                </div>
              );
            }
            if (item === 'Education') {
              return (
                <div key={index}>
                  <EducationOuterSection
                    list={CVBackUpData.Education}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueEducation}
                  />
                </div>
              );
            }
            if (item === 'Passion') {
              return (
                <div key={index}>
                  <PassionOuterSection
                    list={CVBackUpData.Passion}
                    Colors={CVBackUpData.Colors}
                    Template={CVBackUpData.Template}
                    Sections={CVBackUpData.SectionArray}
                    HeadingValue={CVBackUpData.HeadingValueAchievement}
                  />
                </div>
              );
            }
          })}
        </div>
      );
    }
  }

  useEffect (() => {
    setSubjectName (props.Subject.replace (/['"]+/g, ''));
  }, []);

  return (
    <div>
      <div>
        <div
          style={{
            width: '430px',
          }}
        >
          <p
            className="text-center text-white mb-2"
            style={{fontSize: '30px', fontWeight: 'bolder'}}
          >
            <input
              type="text"
              placeholder="SubjectName"
              className="text-center text-white fw-bold"
              value={SubjectName}
              onChange={e => {
                setSubjectName (e.target.value);
              }}
              onBlur={() => {
                console.log ('kk', SubjectName);
                HandlePatchCvBackUp (SubjectName, props.id);
              }}
            />

          </p>
          <div
            className="outerWrapperBackUpCvSection"
            style={{
              backgroundImage: `url(${CVBackUpData.BackImage})`,
            }}
            onMouseEnter={() => {
              setDisplayBackgroundColor (true);
            }}
          >
            {DisplayBackgroundColor &&
              <div
                className="BackGroundColorSectionBackupCv"
                onMouseLeave={() => {
                  setDisplayBackgroundColor (false);
                  // console.log ('id', props.id);
                }}
              >
                <BiPencil
                  className="DeleteIconBackUpCV backGroundColorEditIconBackUpCV  "
                  onClick={() => {
                    contextData.HandleUpdateBackUpCv (props.id);

                    props.HandleRemovePreviousData ();
                    console.log ('helodata', CVBackUpData);

                    if (CVBackUpData.Achievements) {
                      localStorage.setItem (
                        'Achievements',
                        JSON.stringify (CVBackUpData.Achievements)
                      );
                    }
                    if (CVBackUpData.ArrayLower) {
                      localStorage.setItem (
                        'ArrayLower',
                        JSON.stringify (CVBackUpData.ArrayLower)
                      );
                    }

                    if (CVBackUpData.UserImageShape) {
                      localStorage.setItem (
                        'UserImageShape',
                        JSON.stringify (CVBackUpData.UserImageShape)
                      );
                    }

                    if (CVBackUpData.Skills) {
                      localStorage.setItem (
                        'Skills',
                        JSON.stringify (CVBackUpData.Skills)
                      );
                    }

                    if (CVBackUpData.HeadingValueSkills) {
                      localStorage.setItem (
                        'HeadingValueSkills',
                        JSON.stringify (CVBackUpData.HeadingValueSkills)
                      );
                    }

                    if (CVBackUpData.Summary) {
                      localStorage.setItem (
                        'Summary',
                        JSON.stringify (CVBackUpData.Summary)
                      );
                    }

                    if (CVBackUpData.ArrayUper) {
                      localStorage.setItem (
                        'ArrayUper',
                        JSON.stringify (CVBackUpData.ArrayUper)
                      );
                    }
                    if (CVBackUpData.indexOfUserImageShape) {
                      localStorage.setItem (
                        'indexOfUserImageShape',
                        JSON.stringify (CVBackUpData.indexOfUserImageShape)
                      );
                    }
                    if (CVBackUpData.HeaderInputValue) {
                      localStorage.setItem (
                        'HeaderInputValue',
                        JSON.stringify (CVBackUpData.HeaderInputValue)
                      );
                    }
                    if (CVBackUpData.SelectedColorIndex) {
                      localStorage.setItem (
                        'SelectedColorIndex',
                        JSON.stringify (CVBackUpData.SelectedColorIndex)
                      );
                    }
                    if (CVBackUpData.BorderStyle) {
                      localStorage.setItem (
                        'BorderStyle',
                        JSON.stringify (CVBackUpData.BorderStyle)
                      );
                    }

                    if (CVBackUpData.UserImage) {
                      localStorage.setItem (
                        'UserImage',
                        JSON.stringify (CVBackUpData.UserImage)
                      );
                    }
                    if (CVBackUpData.BackImage) {
                      localStorage.setItem (
                        'BackImage',
                        JSON.stringify (CVBackUpData.BackImage)
                      );
                    }
                    if (CVBackUpData.HeadingValueAchievements) {
                      localStorage.setItem (
                        'HeadingValueAchievements',
                        JSON.stringify (CVBackUpData.HeadingValueAchievements)
                      );
                    }
                    if (CVBackUpData.Colors) {
                      localStorage.setItem (
                        'Colors',
                        JSON.stringify (CVBackUpData.Colors)
                      );
                    }
                    if (CVBackUpData.Language) {
                      localStorage.setItem (
                        'Language',
                        JSON.stringify (CVBackUpData.Language)
                      );
                    }

                    if (CVBackUpData.Education) {
                      localStorage.setItem (
                        'Education',
                        JSON.stringify (CVBackUpData.Education)
                      );
                    }
                    if (CVBackUpData.Experience) {
                      localStorage.setItem (
                        'Experience',
                        JSON.stringify (CVBackUpData.Experience)
                      );
                    }
                    if (CVBackUpData.Training) {
                      localStorage.setItem (
                        'Training',
                        JSON.stringify (CVBackUpData.Training)
                      );
                    }
                    if (CVBackUpData.Projects) {
                      localStorage.setItem (
                        'Projects',
                        JSON.stringify (CVBackUpData.Projects)
                      );
                    }
                    if (CVBackUpData.Passion) {
                      localStorage.setItem (
                        'Passion',
                        JSON.stringify (CVBackUpData.Passion)
                      );
                    }

                    if (CVBackUpData.Volunteering) {
                      localStorage.setItem (
                        'Volunteering',
                        JSON.stringify (CVBackUpData.Volunteering)
                      );
                    }
                    if (CVBackUpData.IndustryExperience) {
                      localStorage.setItem (
                        'IndustryExperience',
                        JSON.stringify (CVBackUpData.IndustryExperience)
                      );
                    }
                    if (CVBackUpData.Strength) {
                      localStorage.setItem (
                        'Strength',
                        JSON.stringify (CVBackUpData.Strength)
                      );
                    }
                    if (CVBackUpData.FindMeOnline) {
                      localStorage.setItem (
                        'FindMeOnline',
                        JSON.stringify (CVBackUpData.FindMeOnline)
                      );
                    }
                    if (CVBackUpData.Template) {
                      localStorage.setItem (
                        'Template',
                        JSON.stringify (CVBackUpData.Template)
                      );
                    }

                    if (CVBackUpData.HeadingValueEducation) {
                      localStorage.setItem (
                        'HeadingValueEducation',
                        JSON.stringify (CVBackUpData.HeadingValueEducation)
                      );
                    }
                    if (CVBackUpData.HeadingValueExperience) {
                      localStorage.setItem (
                        'HeadingValueExperience',
                        JSON.stringify (CVBackUpData.HeadingValueExperience)
                      );
                    }
                    if (CVBackUpData.HeadingValueFindMeOnline) {
                      localStorage.setItem (
                        'HeadingValueFindMeOnline',
                        JSON.stringify (CVBackUpData.HeadingValueFindMeOnline)
                      );
                    }
                    if (CVBackUpData.HeadingValueIndustryExperience) {
                      localStorage.setItem (
                        'HeadingValueIndustryExperience',
                        JSON.stringify (
                          CVBackUpData.HeadingValueIndustryExperience
                        )
                      );
                    }
                    if (CVBackUpData.HeadingValueLanguage) {
                      localStorage.setItem (
                        'HeadingValueLanguage',
                        JSON.stringify (CVBackUpData.HeadingValueLanguage)
                      );
                    }
                    if (CVBackUpData.HeadingValueMyTime) {
                      localStorage.setItem (
                        'HeadingValueMyTime',
                        JSON.stringify (CVBackUpData.HeadingValueMyTime)
                      );
                    }

                    if (CVBackUpData.HeadingValuePassion) {
                      localStorage.setItem (
                        'HeadingValuePassion',
                        JSON.stringify (CVBackUpData.HeadingValuePassion)
                      );
                    }
                    if (CVBackUpData.HeadingValueProjects) {
                      localStorage.setItem (
                        'HeadingValueProjects',
                        JSON.stringify (CVBackUpData.HeadingValueProjects)
                      );
                    }
                    if (CVBackUpData.HeadingValueSkills) {
                      localStorage.setItem (
                        'HeadingValueSkills',
                        JSON.stringify (CVBackUpData.HeadingValueSkills)
                      );
                    }
                    if (CVBackUpData.HeadingValueStrength) {
                      localStorage.setItem (
                        'HeadingValueStrength',
                        JSON.stringify (CVBackUpData.HeadingValueStrength)
                      );
                    }
                    if (CVBackUpData.HeadingValueSummary) {
                      localStorage.setItem (
                        'HeadingValueSummary',
                        JSON.stringify (CVBackUpData.HeadingValueSummary)
                      );
                    }

                    if (CVBackUpData.HeadingValueTraining) {
                      localStorage.setItem (
                        'HeadingValueTraining',
                        JSON.stringify (CVBackUpData.HeadingValueTraining)
                      );
                    }
                    if (CVBackUpData.HeadingValueVolunteering) {
                      localStorage.setItem (
                        'HeadingValueVolunteering',
                        JSON.stringify (CVBackUpData.HeadingValueVolunteering)
                      );
                    }
                    if (CVBackUpData.ChartData.arraySlice) {
                      localStorage.setItem (
                        'arraySlice',
                        JSON.stringify (CVBackUpData.ChartData.arraySlice)
                      );
                    }
                    if (CVBackUpData.ChartData.InputFieldCartMyTime) {
                      localStorage.setItem (
                        'InputFieldCartMyTime',
                        JSON.stringify (
                          CVBackUpData.ChartData.InputFieldCartMyTime
                        )
                      );
                    }
                    if (CVBackUpData.ChartData.arraySeries) {
                      localStorage.setItem (
                        'arraySeries',
                        JSON.stringify (CVBackUpData.ChartData.arraySeries)
                      );
                    }

                    if (CVBackUpData.indexOfUserImageShape) {
                      localStorage.setItem (
                        'indexOfUserImageShape',
                        JSON.stringify (CVBackUpData.indexOfUserImageShape)
                      );
                    }

                    if (CVBackUpData.SectionArray) {
                      localStorage.setItem (
                        'SectionsArray',
                        JSON.stringify (CVBackUpData.SectionArray)
                      );
                    }
                  }}
                />
                <RiDeleteBinLine
                  className="DeleteIconBackUpCV backGroundColorDeleteIconBackUpCV "
                  onClick={() => {
                    HandleDeleteCvBackUp (props.id);
                  }}
                />
              </div>}
            <Header
              HeaderSettingsList={CVBackUpData.HeaderSettingsList}
              HeaderInputValue={CVBackUpData.HeaderInputValue}
              image={CVBackUpData.UserImage}
              Colors={CVBackUpData.Colors}
              ImageShape={CVBackUpData.indexOfUserImageShape}
            />
            <div
              style={{
                width: '100%',
                paddingTop: '12px',
                display: CVBackUpData.Template ? 'flex' : 'block',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: CVBackUpData.Template ? '60%' : '100%',
                }}
              >
                {LeftSection ()}

              </div>
              <div
                style={{
                  width: CVBackUpData.Template ? '40%' : '100%',
                }}
              >
                {RightSection ()}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
