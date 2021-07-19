import React from 'react';
import './HomePage.css';
import img from './Backgroundimg/backgroundimg.png';
import Header from '../Components/usernamePAge';
import ExperienceSection from './ExperienceSection'
import TechStockSection from './TechStockSection'
import  { useState } from 'react';
import Achievements from './Achivement'
import Education from './Education'
import FindMeOnline from './FindMeOnline'
import IndustryExperience from './IndustryExperience'
import Language from './Language'
import MyTime from './MyTime'
import  Passions from './Passions'
import Skills from './Skill'
import Summry from './Summry'
import TrainingCourse from './TrainingCourse'
import Projects from './Projects'
export default function Home() {
    const [HoverEffect, SetHoverEffect] = useState(null);
    const [True, SetTrue] = useState(null);
   function HandleSetHoverEffect(){
    SetHoverEffect("rgba(80,77,98,.2)")
    }
    function HandleHoverEffect(){
        SetHoverEffect(null)
        SetTrue(True+1)
    }
	return (
		<div className="outerContainter">
			<div
				className="InnerContainer"
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url(${img})`,
				}}
			>
					<Header button={HandleSetHoverEffect} data={True} />
                    <div className="outerWraperTwoSectionExperienceAndTechstock">
                    <ExperienceSection button={HandleSetHoverEffect} data={True}/>
                       
                        {/* <div>
                    <Achievements button={HandleSetHoverEffect}  data={True} />
                    <Language button={HandleSetHoverEffect}  data={True} />
                    <Passions button={HandleSetHoverEffect}  data={True} />
                    <FindMeOnline button={HandleSetHoverEffect}  data={True} />
                    <IndustryExperience button={HandleSetHoverEffect}  data={True} />
                    <Summry button={HandleSetHoverEffect}  data={True} />
                    </div>
                    <div>
                    <TechStockSection  button={HandleSetHoverEffect}  data={True}/>
                    <Education button={HandleSetHoverEffect}  data={True} />
                    <MyTime button={HandleSetHoverEffect}  data={True} />
                    <Projects button={HandleSetHoverEffect}  data={True} />
                    <TrainingCourse button={HandleSetHoverEffect}  data={True} />
                    </div> */}

                     </div>
                    <div onClick={HandleHoverEffect} style={{position:"absolute",backgroundColor:HoverEffect,left:0,right:0,top:0,bottom:0,zIndex:0}}>
                    </div>
				</div>
		</div>
	);
}
