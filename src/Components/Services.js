import axios from 'axios';
import {BaseURL} from './ApiEnviroment';

export async function HandleSignUpPostRequest (data) {
  let data1 = null;
  await axios
    .post (`${BaseURL}/api/Auth/SignUp`, data)
    .then (function (response) {
      data1 = response.status;
    })
    .catch (error => {
      data1 = error.response.data.detail;
    });
  return data1;
}

export async function HandleSignInPostRequest (data) {
  let data1 = null;
  await axios
    .post (`${BaseURL}/api/Auth/SignIn`, data)
    .then (function (response) {
      localStorage.setItem ('Users', JSON.stringify (response.data));
      data1 = response.status;
    })
    .catch (error => {
      data1 = error.response.data;
    });
  return data1;
}

export async function HandleGetCvBackUp () {
  let data = null
  let token = localStorage.getItem ('Users');
  token = JSON.parse (token);
  const AuthStr = 'Bearer '.concat (token);
  await axios
    .get (`${BaseURL}/api/CVBackup`, {
      headers: {Authorization: AuthStr},
    })
    .then (function (response) {
      console.log ('loki', response);
      data = response
    })
    .catch (error => {
      console.log ('loki', error);
      data = error
    });
    return data
}

export async function HandleUpdateCV () {
  let CVData = {
    SectionArray: '',
  };
  let SectionArray = localStorage.getItem ('SectionsArray');
  SectionArray = JSON.parse (SectionArray);
  if (SectionArray) {
    CVData.SectionArray = SectionArray;
  }

  let UserImageShape = localStorage.getItem ('UserImageShape');
  UserImageShape = JSON.parse (UserImageShape);
  if (UserImageShape) {
    CVData.UserImageShape = UserImageShape;
  }

  let HeadingValueSkills = localStorage.getItem ('HeadingValueSkills');
  HeadingValueSkills = JSON.parse (HeadingValueSkills);
  if (HeadingValueSkills) {
    CVData.HeadingValueSkills = HeadingValueSkills;
  }

  let HeaderSettingsList = localStorage.getItem ('HeaderSettingsList');
  HeaderSettingsList = JSON.parse (HeaderSettingsList);
  if (HeaderSettingsList) {
    CVData.HeaderSettingsList = HeaderSettingsList;
  }

  let Summary = localStorage.getItem ('Summary');
  Summary = JSON.parse (Summary);
  if (Summary) {
    CVData.Summary = Summary;
  }

  let ArrayLower = localStorage.getItem ('ArrayLower');
  ArrayLower = JSON.parse (ArrayLower);
  if (ArrayLower) {
    CVData.ArrayLower = ArrayLower;
  }

  let ArrayUper = localStorage.getItem ('ArrayUper');
  ArrayUper = JSON.parse (ArrayUper);
  if (ArrayUper) {
    CVData.ArrayUper = ArrayUper;
  }

  let indexOfUserImageShape = localStorage.getItem ('indexOfUserImageShape');
  indexOfUserImageShape = JSON.parse (indexOfUserImageShape);
  if (indexOfUserImageShape) {
    CVData.indexOfUserImageShape = indexOfUserImageShape;
  }

  let HeaderInputValue = localStorage.getItem ('HeaderInputValue');
  HeaderInputValue = JSON.parse (HeaderInputValue);
  if (HeaderInputValue) {
    CVData.HeaderInputValue = HeaderInputValue;
  }

  let SelectedColorIndex = localStorage.getItem ('SelectedColorIndex');
  SelectedColorIndex = JSON.parse (SelectedColorIndex);
  if (SelectedColorIndex) {
    CVData.SelectedColorIndex = SelectedColorIndex;
  }

  let BorderStyle = localStorage.getItem ('BorderStyle');
  BorderStyle = JSON.parse (BorderStyle);
  if (BorderStyle) {
    CVData.BorderStyle = BorderStyle;
  }

  let UserImage = localStorage.getItem ('UserImage');
  UserImage = JSON.parse (UserImage);
  if (UserImage) {
    CVData.UserImage = UserImage;
  }

  let BackImage = localStorage.getItem ('BackImage');
  BackImage = JSON.parse (BackImage);
  if (BackImage) {
    CVData.BackImage = BackImage;
  }

  let HeadingValueAchievements = localStorage.getItem (
    'HeadingValueAchievements'
  );
  HeadingValueAchievements = JSON.parse (HeadingValueAchievements);
  if (HeadingValueAchievements) {
    CVData.HeadingValueAchievements = HeadingValueAchievements;
  }

  let Colors = localStorage.getItem ('Colors');
  Colors = JSON.parse (Colors);
  if (Colors) {
    CVData.Colors = Colors;
  }

  let Language = localStorage.getItem ('Language');
  Language = JSON.parse (Language);
  if (Language) {
    CVData.Language = Language;
  }

  let Achievements = localStorage.getItem ('Achievements');
  Achievements = JSON.parse (Achievements);
  if (Achievements) {
    CVData.Achievements = Achievements;
  }

  let Education = localStorage.getItem ('Education');
  Education = JSON.parse (Education);
  if (Education) {
    CVData.Education = Education;
  }

  let Experience = localStorage.getItem ('Experience');
  Experience = JSON.parse (Experience);
  if (Experience) {
    CVData.Experience = Experience;
  }

  let Skills = localStorage.getItem ('Skills');
  Skills = JSON.parse (Skills);
  if (Skills) {
    CVData.Skills = Skills;
  }

  let data = {
    subject: 'zaka',
    data: JSON.stringify (CVData),
    dateAdded: '2022-03-14T04:39:02.471Z',
    dateUpdated: '2022-03-14T04:39:02.471Z',
  };

  let token = localStorage.getItem ('Users');
  token = JSON.parse (token);
  const AuthStr = 'Bearer '.concat (token);
  axios
    .post (`${BaseURL}/api/CVBackup`, data, {
      headers: {Authorization: AuthStr},
    })
    .then (function (response) {
      console.log ('log', response);
    })
    .catch (error => {
      console.log ('error', error);
    });
}
