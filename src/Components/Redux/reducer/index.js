import counterReducer from './counter'
import IncrementData from './isLogged'
import MonthFromCrossIcon from './MonthFromCrossIcon'
import MonthFrom from './MonthFrom'
import UpdateIndex from './UpdateIndex'
import UpdateNumber from './UpdateNumber'
import CountingUpdateNumber from './CountingUpdateNumber'
import IncrementState from './Incrementstate'
import UpdateYearFrom from './UpdateYearFrom'
import { combineReducers } from "redux" 
import IncrementBackgroundColorPassion from './IncrementBackgroundcolorPassion'
import IncrementBackgroundColorTraining from './IncrementBackgroundcolorTraining'
import IncrementBackgroundColorExperience from './IncrementBackgroundcolorExperience'
import IncrementBackgroundColorAchievement from './IncrementBackgroundcolorAchievement'
import IncrementBackgroundColorSkill from './IncrementBackgroundcolorSkill'
import IncrementBackgroundColorProject from './IncrementBackgroundcolorProject'
import IncrementBackgroundColorMyTime from './IncrementBackgroundcolorMyTime'
import IncrementBackgroundColorLanguage from './IncrementBackgroundcolorLanguage'
import IncrementBackgroundColorFindMeOnline from './IncrementBackgroundcolorFindmeOnline'
import IncrementBackgroundColorSummary from './IncrementBackgroundcolorsummary'
import IncrementBackgroundColorStrength from './IncrementBackgroundcolorStrength'
import IncrementBackgroundColorVolunteering from './IncrementBackgroundcolorVolunteering'
import IncrementBackgroundColorEducation from './IncrementBackgroundcolorEducation'
import IncrementBackgroundColorIndusteryExperience from './IncrementBackgroundcolorIndusteryExperience'
import RemoveAchievement from './RemoveAchievement'
import Achievementyes from './AchievementYes'
import IncrementNull from './IncrementNull'
import Section from './SectionArray'
import UpdateAchievement from './UpdateAchievement'
import EducationYes from './EducationYes'
import ExperienceYes from './ExperienceYes'
import FindmeOnlineYes from './FindmeonlineYes'
import IndustryExperienceYes from './IndusteryExperienceYes'
import LanguageYes from './LanguageYes'
import MytimeYes from './MyTimeYes'
import PassionYes from './PassionYes'
import VolunteeringYes from './VolunteeringYes'
import TrainingYes from './TrainingYes'
import TechstockYes from './TechStockYes'
import SummaryYes from './SummaryYes'
import StrengthYes from './StrengthYes'
import ProjectYes from './ProjectYes'
import InduxAchievement from './InduxAchievement'
import InduxFindmeOnline from './IndexFindMeOnline'
import InduxLanguage from './IndexLanguage'
import InduxPassion from './IndexPassion'
import InduxProject from './IndexProject'
import InduxStrength from './IndexStrength'
import InduxSummary from './IndexSummary'
import InduxTechstock from './IndexTechStack'
import InduxTraining from './IndexTraining'
import InduxVolunteering from './IndexVolunteering'
import InduxEducation from './InduxEducation'
import InduxExperience from './InduxExperience'
import InduxIndestryExperience from './InduxIndesteryErpeience'
import ToggleLeft from './ToggleLeft'
const allReducers = combineReducers({
counter:counterReducer,
CounterData:IncrementData,
MonthFromCrossIcon:MonthFromCrossIcon,
MonthFrom:MonthFrom,
UpdateIndex:UpdateIndex,
UpdateNumber:UpdateNumber,
CountingUpdateNumber,CountingUpdateNumber,
IncrementState:IncrementState,
UpdateYearFrom:UpdateYearFrom,
Section:Section,
UpdateAchievement:UpdateAchievement,
IncrementBackgroundColorPassion:IncrementBackgroundColorPassion,
IncrementBackgroundColorTraining:IncrementBackgroundColorTraining,
IncrementBackgroundColorExperience:IncrementBackgroundColorExperience,
IncrementBackgroundColorAchievement:IncrementBackgroundColorAchievement,
IncrementBackgroundColorSkill:IncrementBackgroundColorSkill,
IncrementBackgroundColorProject:IncrementBackgroundColorProject,
IncrementBackgroundColorMyTime:IncrementBackgroundColorMyTime,
IncrementBackgroundColorLanguage:IncrementBackgroundColorLanguage,
IncrementBackgroundColorFindMeOnline:IncrementBackgroundColorFindMeOnline,
IncrementBackgroundColorSummary:IncrementBackgroundColorSummary,
IncrementBackgroundColorStrength:IncrementBackgroundColorStrength,
IncrementBackgroundColorVolunteering:IncrementBackgroundColorVolunteering,
IncrementBackgroundColorEducation:IncrementBackgroundColorEducation,
IncrementBackgroundColorIndusteryExperience:IncrementBackgroundColorIndusteryExperience,
IncrementNull:IncrementNull,
RemoveAchievement:RemoveAchievement,
Achievementyes:Achievementyes,
EducationYes:EducationYes,
ExperienceYes:ExperienceYes,
FindmeOnlineYes:FindmeOnlineYes,
IndustryExperienceYes:IndustryExperienceYes,
LanguageYes:LanguageYes,
MytimeYes:MytimeYes,
PassionYes:PassionYes,
VolunteeringYes,VolunteeringYes,
TrainingYes:TrainingYes,
TechstockYes:TechstockYes,
SummaryYes:SummaryYes,
ProjectYes:ProjectYes,
StrengthYes:StrengthYes,
InduxAchievement:InduxAchievement,
InduxFindmeOnline:InduxFindmeOnline,
InduxLanguage:InduxLanguage,
InduxPassion:InduxPassion,
InduxProject:InduxProject,
InduxStrength:InduxStrength,
InduxSummary:InduxSummary,
InduxTechstock:InduxTechstock,
InduxTraining:InduxTraining,
InduxVolunteering:InduxVolunteering,
InduxEducation:InduxEducation,
InduxExperience:InduxExperience,
InduxIndestryExperience:InduxIndestryExperience,
ToggleLeft:ToggleLeft,
});
export default allReducers