import React, {useState, useEffect} from 'react';
import Header from './Header';
import AchievementsOuterSection
  from './SubSections/Achievements/AchievementsOuterSection';
import ExperienceOuterSection
  from './SubSections/Experience/ExperienceOuterSection';
import SummaryOuterSection from './SubSections/Summary/SummaryOuterSection';
import LanguageOuterSection from './SubSections/Language/LanguageOuterSection'
import EducationOuterSection from './SubSections/Education/EducationOuterSection'
import {RiDeleteBinLine} from 'react-icons/ri';
import {BiPencil} from 'react-icons/bi';
function Section (props) {
  let CVBackUpData = JSON.parse (props.list);
  const [DisplayBackgroundColor, setDisplayBackgroundColor] = useState (false);
  console.log ('CVData', CVBackUpData);
  return (
    <div style={{border: '1px solid', padding: '12px'}}>
      <div
        style={{
          width: '530px',
        }}
      >
        <p
          className="text-center text-white mb-2"
          style={{fontSize: '30px', fontWeight: 'bolder'}}
        >
          SubjectName
        </p>
        <div
          style={{
            backgroundColor: 'white',
            padding: '12px',
            borderRadius: '9px',
            backgroundImage: `url(${CVBackUpData.BackImage})`,
            //   boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
            position: 'relative',
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
              }}
            >
              <BiPencil className="DeleteIconBackUpCV backGroundColorEditIconBackUpCV  " />
              <RiDeleteBinLine className="DeleteIconBackUpCV backGroundColorDeleteIconBackUpCV " />
            </div>}
          <Header
            HeaderSettingsList={CVBackUpData.HeaderSettingsList}
            HeaderInputValue={CVBackUpData.HeaderInputValue}
            image={CVBackUpData.UserImage}
          />
          {CVBackUpData.SectionArray.Left.map ((item, index) => {
            if (item === 'Achievements') {
              return (
                <AchievementsOuterSection list={CVBackUpData.Achievements} />
              );
            }
            if (item === 'Experience') {
              return <ExperienceOuterSection list={CVBackUpData.Experience} />;
            }
            if (item === 'Summary') {
              return <SummaryOuterSection list={CVBackUpData.Summary} />;
            }
            if (item === "Language") {
                return <LanguageOuterSection list={CVBackUpData.Language} />;
              }
          })}
          {CVBackUpData.SectionArray.Right.map ((item, index) => {
             if (item === "Education") {
                return <EducationOuterSection list={CVBackUpData.Education} />;
              }
          })}
        </div>
      </div>
    </div>
  );
}

export default Section;
