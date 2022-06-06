import axios from 'axios';
import {BaseURL} from './ApiEnviroment';
import UserImg from './Images/UserEmptyImage.PNG';
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

function GetToken () {
  let token = localStorage.getItem ('Users');
  token = JSON.parse (token);
  return token;
}

export async function HandleGetCvBackUp () {
  let data = null;
  const AuthStr = 'Bearer '.concat (GetToken ());
  await axios
    .get (`${BaseURL}/api/CVBackup`, {
      headers: {Authorization: AuthStr},
    })
    .then (function (response) {
      console.log ('res', response);
      data = response;
    })
    .catch (error => {
      console.log ('error', error);
      data = error;
    });
  return data;
}

function GetPreviousData () {
  let CVData = {
    ChartData: {
      InputFieldCartMyTime: '',
      arraySeries: '',
      arraySlice: '',
    },
  };

  let Template = localStorage.getItem ('Template');
  Template = JSON.parse (Template);

  if (Template !== null) {
    CVData.Template = Template;
  } else {
    CVData.Template = false;
  }

  let SectionArray = localStorage.getItem ('SectionsArray');
  SectionArray = JSON.parse (SectionArray);
  if (SectionArray) {
    CVData.SectionArray = SectionArray;
  }

  for (let i = 0; i < SectionArray.Left.length; i++) {
    if (SectionArray.Left[i] === 'MyTime') {
      let InputFieldCartMyTime = localStorage.getItem ('InputFieldCartMyTime');
      InputFieldCartMyTime = JSON.parse (InputFieldCartMyTime);
      if (InputFieldCartMyTime) {
        CVData.ChartData.InputFieldCartMyTime = InputFieldCartMyTime;
      } else {
        CVData.ChartData.InputFieldCartMyTime = [
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
        ];
      }
      let arraySeries = localStorage.getItem ('arraySeries');
      arraySeries = JSON.parse (arraySeries);
      if (arraySeries) {
        CVData.ChartData.arraySeries = arraySeries;
      } else {
        CVData.ChartData.arraySeries = [5, 5, 5];
      }
      let arraySlice = localStorage.getItem ('arraySlice');
      arraySlice = JSON.parse (arraySlice);
      if (arraySlice) {
        CVData.ChartData.arraySlice = arraySlice;
      } else {
        CVData.ChartData.arraySlice = {
          NumberOfSlice6: '#ccc',
          NumberOfSlice3: '#00c091',
          NumberOfSlice9: '#ccc',
          labels: ['A', 'B', 'C'],
        };
      }
      break;
    }
  }

  for (let i = 0; i < SectionArray.Right.length; i++) {
    if (SectionArray.Right[i] === 'MyTime') {
      let InputFieldCartMyTime = localStorage.getItem ('InputFieldCartMyTime');
      InputFieldCartMyTime = JSON.parse (InputFieldCartMyTime);
      if (InputFieldCartMyTime) {
        CVData.ChartData.InputFieldCartMyTime = InputFieldCartMyTime;
      } else {
        CVData.ChartData.InputFieldCartMyTime = [
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
        ];
      }
      let arraySeries = localStorage.getItem ('arraySeries');
      arraySeries = JSON.parse (arraySeries);
      if (arraySeries) {
        CVData.ChartData.arraySeries = arraySeries;
      } else {
        CVData.ChartData.arraySeries = [5, 5, 5];
      }
      let arraySlice = localStorage.getItem ('arraySlice');
      arraySlice = JSON.parse (arraySlice);
      if (arraySlice) {
        CVData.ChartData.arraySlice = arraySlice;
      } else {
        CVData.ChartData.arraySlice = [
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'A'},
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'B'},
          {InputFieldActivity: '', InputFieldPercentage: '', label: 'C'},
        ];
      }
      break;
    }
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
  let HeadingValueStrength = localStorage.getItem ('HeadingValueStrength');
  HeadingValueStrength = JSON.parse (HeadingValueStrength);
  if (HeadingValueStrength) {
    CVData.HeadingValueStrength = HeadingValueStrength;
  }

  let HeadingValueSummary = localStorage.getItem ('HeadingValueSummary');
  HeadingValueSummary = JSON.parse (HeadingValueSummary);
  if (HeadingValueSummary) {
    CVData.HeadingValueSummary = HeadingValueSummary;
  }


  let HeadingValueReference = localStorage.getItem ('HeadingValueReference');
  HeadingValueReference = JSON.parse (HeadingValueReference);
  if (HeadingValueReference) {
    CVData.HeadingValueReference = HeadingValueReference;
  }

  let HeadingValuePublication = localStorage.getItem ('HeadingValuePublication');
  HeadingValuePublication = JSON.parse (HeadingValuePublication);
  if (HeadingValuePublication) {
    CVData.HeadingValuePublication = HeadingValuePublication;
  }

  let HeadingValueAwards = localStorage.getItem ('HeadingValueAwards');
  HeadingValueAwards = JSON.parse (HeadingValueAwards);
  if (HeadingValueAwards) {
    CVData.HeadingValueAwards = HeadingValueAwards;
  }
  let HeadingValueCustom = localStorage.getItem ('HeadingValueCustom');
  HeadingValueCustom = JSON.parse (HeadingValueCustom);
  if (HeadingValueCustom) {
    CVData.HeadingValueCustom = HeadingValueCustom;
  }
  let HeadingValueBook = localStorage.getItem ('HeadingValueBook');
  HeadingValueBook = JSON.parse (HeadingValueBook);
  if (HeadingValueBook) {
    CVData.HeadingValueBook = HeadingValueBook;
  }
  let HeadingValueCertification = localStorage.getItem ('HeadingValueCertification');
  HeadingValueCertification = JSON.parse (HeadingValueCertification);
  if (HeadingValueCertification) {
    CVData.HeadingValueCertification = HeadingValueCertification;
  }
  let HeadingValuePhilosophy = localStorage.getItem ('HeadingValuePhilosophy');
  HeadingValuePhilosophy = JSON.parse (HeadingValuePhilosophy);
  if (HeadingValuePhilosophy) {
    CVData.HeadingValuePhilosophy = HeadingValuePhilosophy;
  }



  let HeadingValueTraining = localStorage.getItem ('HeadingValueTraining');
  HeadingValueTraining = JSON.parse (HeadingValueTraining);
  if (HeadingValueTraining) {
    CVData.HeadingValueTraining = HeadingValueTraining;
  }

  let HeadingValueVolunteering = localStorage.getItem (
    'HeadingValueVolunteering'
  );
  HeadingValueVolunteering = JSON.parse (HeadingValueVolunteering);
  if (HeadingValueVolunteering) {
    CVData.HeadingValueVolunteering = HeadingValueVolunteering;
  }

  let HeadingValueMyTime = localStorage.getItem ('HeadingValueMyTime');
  HeadingValueMyTime = JSON.parse (HeadingValueMyTime);
  if (HeadingValueMyTime) {
    CVData.HeadingValueMyTime = HeadingValueMyTime;
  }

  let HeaderSettingsList = localStorage.getItem ('HeaderSettingsList');
  HeaderSettingsList = JSON.parse (HeaderSettingsList);
  if (HeaderSettingsList) {
    CVData.HeaderSettingsList = HeaderSettingsList;
  } else {
    CVData.HeaderSettingsList = [
      {Label: 'Show Title', selected: true},
      {Label: 'Show Phone', selected: true},
      {Label: 'Show Link', selected: true},
      {Label: 'Show Email', selected: true},
      {Label: 'Show Location', selected: true},
      {Label: 'Uppercase Name', selected: true},
      {Label: 'Show Photo', selected: true},
    ];
  }

  let Philosophy = localStorage.getItem ('Philosophy');
  Philosophy = JSON.parse (Philosophy);
  if (Philosophy) {
    CVData.Philosophy = Philosophy;
  }

  let Certification = localStorage.getItem ('Certification');
  Certification = JSON.parse (Certification);
  if (Certification) {
    CVData.Certification = Certification;
  }
  let Reference = localStorage.getItem ('Reference');
  Reference = JSON.parse (Reference);
  if (Reference) {
    CVData.Reference = Reference;
  }
  let Awards = localStorage.getItem ('Awards');
  Awards = JSON.parse (Awards);
  if (Awards) {
    CVData.Awards = Awards;
  }
  let Custom = localStorage.getItem ('Custom');
  Custom = JSON.parse (Custom);
  if (Custom) {
    CVData.Custom = Custom;
  }
  let Book = localStorage.getItem ('Book');
  Book = JSON.parse (Book);
  if (Book) {
    CVData.Book = Book;
  }
  let Publication = localStorage.getItem ('Publication');
  Publication = JSON.parse (Publication);
  if (Publication) {
    CVData.Publication = Publication;
  }


  let Summary = localStorage.getItem ('Summary');
  Summary = JSON.parse (Summary);
  if (Summary) {
    CVData.Summary = Summary;
  }

  let Training = localStorage.getItem ('Training');
  Training = JSON.parse (Training);
  if (Training) {
    CVData.Training = Training;
  }

  let FindMeOnline = localStorage.getItem ('FindMeOnline');
  FindMeOnline = JSON.parse (FindMeOnline);
  if (FindMeOnline) {
    CVData.FindMeOnline = FindMeOnline;
  }

  let Projects = localStorage.getItem ('Projects');
  Projects = JSON.parse (Projects);
  if (Projects) {
    CVData.Projects = Projects;
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
  } else {
    CVData.indexOfUserImageShape = '1';
  }

  let HeaderInputValue = localStorage.getItem ('HeaderInputValue');
  HeaderInputValue = JSON.parse (HeaderInputValue);
  if (HeaderInputValue) {
    CVData.HeaderInputValue = HeaderInputValue;
  } else {
    CVData.HeaderInputValue = {
      email: '',
      location: '',
      name: 'z',
      phone: '',
      title: '',
      webLink: '',
    };
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
  } else {
    {
      CVData.UserImage = UserImg;
    }
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

  let HeadingValueEducation = localStorage.getItem ('HeadingValueEducation');
  HeadingValueEducation = JSON.parse (HeadingValueEducation);
  if (HeadingValueEducation) {
    CVData.HeadingValueEducation = HeadingValueEducation;
  }

  let HeadingValueExperience = localStorage.getItem ('HeadingValueExperience');
  HeadingValueExperience = JSON.parse (HeadingValueExperience);
  if (HeadingValueExperience) {
    CVData.HeadingValueExperience = HeadingValueExperience;
  }

  let HeadingValueFindMeOnline = localStorage.getItem (
    'HeadingValueFindMeOnline'
  );
  HeadingValueFindMeOnline = JSON.parse (HeadingValueFindMeOnline);
  if (HeadingValueFindMeOnline) {
    CVData.HeadingValueFindMeOnline = HeadingValueFindMeOnline;
  }

  let HeadingValueIndustryExperience = localStorage.getItem (
    'HeadingValueIndustryExperience'
  );
  HeadingValueIndustryExperience = JSON.parse (HeadingValueIndustryExperience);
  if (HeadingValueIndustryExperience) {
    CVData.HeadingValueIndustryExperience = HeadingValueIndustryExperience;
  }

  let HeadingValueLanguage = localStorage.getItem ('HeadingValueLanguage');
  HeadingValueLanguage = JSON.parse (HeadingValueLanguage);
  if (HeadingValueLanguage) {
    CVData.HeadingValueLanguage = HeadingValueLanguage;
  }

  let HeadingValuePassion = localStorage.getItem ('HeadingValuePassion');
  HeadingValuePassion = JSON.parse (HeadingValuePassion);
  if (HeadingValuePassion) {
    CVData.HeadingValuePassion = HeadingValuePassion;
  }

  let HeadingValueProjects = localStorage.getItem ('HeadingValueProjects');
  HeadingValueProjects = JSON.parse (HeadingValueProjects);
  if (HeadingValueProjects) {
    CVData.HeadingValueProjects = HeadingValueProjects;
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

  let Strength = localStorage.getItem ('Strength');
  Strength = JSON.parse (Strength);
  if (Strength) {
    CVData.Strength = Strength;
  }

  let IndustryExperience = localStorage.getItem ('IndustryExperience');
  IndustryExperience = JSON.parse (IndustryExperience);
  if (IndustryExperience) {
    CVData.IndustryExperience = IndustryExperience;
  }

  let Volunteering = localStorage.getItem ('Volunteering');
  Volunteering = JSON.parse (Volunteering);
  if (Volunteering) {
    CVData.Volunteering = Volunteering;
  }

  let Passion = localStorage.getItem ('Passion');
  Passion = JSON.parse (Passion);
  if (Passion) {
    CVData.Passion = Passion;
  }

  let Skills = localStorage.getItem ('Skills');
  Skills = JSON.parse (Skills);
  if (Skills) {
    CVData.Skills = Skills;
  }

  let data = {
    subject: 'Please Add Subject Name',
    data: JSON.stringify (CVData),
    dateAdded: '2022-03-14T04:39:02.471Z',
    dateUpdated: '2022-03-14T04:39:02.471Z',
  };
  return data;
}

export async function HandleUpdateCV () {
  let data = GetPreviousData ();
  const AuthStr = 'Bearer '.concat (GetToken ());
  axios
    .post (`${BaseURL}/api/CVBackup`, data, {
      headers: {Authorization: AuthStr},
    })
    .then (function (response) {
      console.log ('res', response);
    })
    .catch (error => {
      console.log ('error', error);
    });
}

export async function HandleDeleteCvBackUp (id) {
  const AuthStr = 'Bearer '.concat (GetToken ());
  axios
    .delete (`${BaseURL}/api/CVBackup/${id}`, {
      headers: {Authorization: AuthStr},
    })
    .then (() => {
      console.log ('success');
      window.location.reload (false);
    })
    .catch (error => {
      console.log ('error', error);
    });
}

export async function HandlePutCvBackUp (id) {
  let data = GetPreviousData ();
  const AuthStr = 'Bearer '.concat (GetToken ());
  axios
    .put (`${BaseURL}/api/CVBackup/${id}`, data, {
      headers: {Authorization: AuthStr},
    })
    .then (() => {
      console.log ('success');
      // window.location.reload (false);
    })
    .catch (error => {
      console.log ('error', error);
    });
}


export async function HandlePatchCvBackUp (InputValueSubjectName,id) {

  const AuthStr = 'Bearer '.concat (GetToken ());
  await axios.patch (`${BaseURL}/api/CVBackup/${id}/${JSON.stringify(InputValueSubjectName)}`,{}, {
      headers: {authorization:AuthStr},
    })
    .then (function (response) {
      console.log ('res', response);
    })
    .catch (error => {
      console.log ('error', error);
    });

}
