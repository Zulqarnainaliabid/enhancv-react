import Home from './Components/HomePage';
import {transitions, positions, Provider as AlertProvider} from 'react-alert';
import React, {useState, useEffect, useRef} from 'react';
import './index.css';
import {createStore} from 'redux';
import allReducers from './Components/Redux/reducer/index';
import AlertTemplate from 'react-alert-template-basic';
import {Sections} from './Components/Section';
import {HiPlusCircle} from 'react-icons/hi';
import HomaPageSabSection from './Components/HomePageSabSection';
import {CgArrangeFront} from 'react-icons/cg';
import {BiDownload} from 'react-icons/bi';
import {Provider} from 'react-redux';
import Achievements from './Components/Achivement';
import TechStockSection from './Components/TechStockSection';
import Projects from './Components/Projects';
import TrainingCourse from './Components/TrainingCourse';
import MyTime from './Components/MyTime';
import Language from './Components/Language';
import {CgArrangeBack} from 'react-icons/cg';
import Passions from './Components/Passions';
import IndustryExperience from './Components/IndustryExperience';
import FindMeOnline from './Components/FindMeOnline';
import Summry from './Components/Summry';
import Strength from './Components/Strength';
import Volunteering from './Components/Volunteering';
import ExperienceSection from './Components/ExperienceSection';
import {HiTemplate} from 'react-icons/hi';
import {useDispatch, useSelector} from 'react-redux';
import {MdArrowDropDown} from 'react-icons/md';
import Education from './Components/Education';
import Modal from './Components/AnimatedModal';
import axios from 'axios';
import ReactToPdf from 'react-to-pdf';
import ComponentToPrint from './Components/ComponentToPrint';
import ReactDOMServer from 'react-dom/server';
import ReactToPrint from 'react-to-print';
import Pdf from 'react-to-pdf';
import {
  INCREMENTBACKGROUNDCOLORVOLUNTEERING,
  INCREMENTBACKGROUNDCOLORINDUSTERYEXPERIENCE,
  INCREMENTBACKGROUNDCOLORSTRENGTH,
  INCREMENTBACKGROUNDCOLORSUMMARY,
  INCREMENTBACKGROUNDCOLORLANGUAGE,
  INCREMENTBACKGROUNDCOLOFINDMEONLINE,
  INCREMENTBACKGROUNDCOLOMYTIME,
  INCREMENTBACKGROUNDCOLORPROJECT,
  INCREMENTBACKGROUNDCOLORSKILL,
  INCREMENTBACKGROUNDCOLOREXPERIENCE,
  INCREMENTBACKGROUNDCOLORTRAINING,
  INCREMENTBACKGROUNDCOLORPASSION,
  INCREMENTBACKGROUNDCOLOREDUCATION,
  INCREMENTBACKGROUNDCOLORACHIEVEMENT,
  TOGGLEREARRANGEBUTTONS,
  TOGGLEUSERIMGMODALBUTTONS,
  UPDATEWIDTHLEFTRIGTH,
  BACKGROUNDCOLORDATPICKER,
  SINGLECOLUMN,
  UPDATECOLOR,
  INCREMENTBACKGROUNDNULL,
  ACHIEVEMENTYES,
  TOGGLELEFT,
} from './Components/Redux/actions/indux';
import {Document, Page} from 'react-pdf';

function App () {
  const [ToggleRearrangeSection, setToggleRearrangeSection] = useState (null);
  const [ToggleAddNewSection, setToggleAddNewSection] = useState (false);
  const [ToggleAddNewSectionLeft, setToggleAddNewSectionLeft] = useState (
    false
  );
  const [
    ToggleAddNewSectionLeftSingleColumn,
    setToggleAddNewSectionLeftSingleColumn,
  ] = useState (false);
  const [ToggleAddNewSectionRight, setToggleAddNewSectionRight] = useState (
    false
  );
  const [HoverEffect, SetHoverEffect] = useState (null);
  const [Array, setArray] = useState ([]);
  const [HideButtons, setHideButtons] = useState (false);
  const [ShowModal, setShowModal] = useState (false);
  const [CheckToggleImage, setCheckToggleImage] = useState (false);
  const [ShowDropDown, setShowDropDown] = useState (false);
  const [numPages, setNumPages] = useState (null);
  const [pageNumber, setPageNumber] = useState (1);
  const [Effect, setEffect] = useState (false);
  
  const dispatch = useDispatch ();
  const Achievementyes = useSelector (state => state.Achievementyes);
  const EducationYes = useSelector (state => state.EducationYes);
  const ExperienceYes = useSelector (state => state.ExperienceYes);
  const FindmeOnlineYes = useSelector (state => state.FindmeOnlineYes);
  const IndustryExperienceYes = useSelector (
    state => state.IndustryExperienceYes
  );
  const LanguageYes = useSelector (state => state.LanguageYes);
  const MytimeYes = useSelector (state => state.MytimeYes);
  const PassionYes = useSelector (state => state.PassionYes);
  const ProjectYes = useSelector (state => state.ProjectYes);
  const StrengthYes = useSelector (state => state.StrengthYes);
  const SummaryYes = useSelector (state => state.SummaryYes);
  const TrainingYes = useSelector (state => state.TrainingYes);
  const VolunteeringYes = useSelector (state => state.VolunteeringYes);
  const TechstockYes = useSelector (state => state.TechstockYes);
  const ToggleLeft = useSelector (state => state.ToggleLeft);
  const TogglePages = useSelector (state => state.TogglePages);

  const componentRef = useRef ();

  const ToggleRearrangebuttons = useSelector (
    state => state.ToggleRearrangebuttons
  );
  const ToggleUserImgModal = useSelector (state => state.ToggleUserImgModal);
  let SingleColumnTemplate = useSelector (state => state.SingleColumnTemplate);
  // const ref = React.createRef();
  useEffect (
    () => {
      if (Achievementyes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Achievement') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [Achievementyes]
  );

  useEffect (
    () => {
      if (EducationYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Education') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [EducationYes]
  );

  useEffect (
    () => {
      if (ExperienceYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Experience') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [ExperienceYes]
  );

  useEffect (
    () => {
      if (FindmeOnlineYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Find Me') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [FindmeOnlineYes]
  );

  useEffect (
    () => {
      if (IndustryExperienceYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Indestry') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [IndustryExperienceYes]
  );

  useEffect (
    () => {
      if (LanguageYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Langue') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [LanguageYes]
  );

  useEffect (
    () => {
      if (MytimeYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'MyTime') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [MytimeYes]
  );

  useEffect (
    () => {
      if (PassionYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Profesion') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [PassionYes]
  );

  useEffect (
    () => {
      if (ProjectYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Project') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [ProjectYes]
  );

  useEffect (
    () => {
      if (StrengthYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Strength') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [StrengthYes]
  );

  useEffect (
    () => {
      if (SummaryYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Summary') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [SummaryYes]
  );

  useEffect (
    () => {
      if (TrainingYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Training') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [TrainingYes]
  );

  useEffect (
    () => {
      if (VolunteeringYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Volunteering') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [VolunteeringYes]
  );

  useEffect (
    () => {
      if (TechstockYes) {
        let temp = [];
        temp = Array;
        temp.map ((item, index) => {
          if (item.name === 'Skill') {
            temp.splice (index, 1);
          }
        });
        setArray ([...temp]);
        localStorage.setItem ('Section', JSON.stringify (temp));
        HandleAddNewSection ();
      }
    },
    [TechstockYes]
  );

  function HandleRemoveSection (name) {
    let temp = [];
    temp = Array;
    temp.map ((item, index) => {
      if (item.name === name) {
        temp.splice (index, 1);
      }
    });
    setArray ([...temp]);
    localStorage.setItem ('Section', JSON.stringify (temp));
  }

  function HandleSections (data, toggle) {
    if (data !== undefined && data !== null) {
      if (data === 'Achievement') {
        if (!toggle) {
          Array.push ({
            name: 'Achievement',
            section: <Achievements button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Achievement',
            section: <Achievements button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Skill') {
        if (!toggle) {
          Array.push ({
            name: 'Skill',
            section: <TechStockSection button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Skill',
            section: <TechStockSection button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Project') {
        if (!toggle) {
          Array.push ({
            name: 'Project',
            section: <Projects button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Project',
            section: <Projects button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Training') {
        if (!toggle) {
          Array.push ({
            name: 'Training',
            section: <TrainingCourse button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Training',
            section: <TrainingCourse button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'MyTime') {
        if (!toggle) {
          Array.push ({
            name: 'MyTime',
            section: <MyTime button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'MyTime',
            section: <MyTime button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Langue') {
        if (!toggle) {
          Array.push ({
            name: 'Langue',
            section: <Language button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Langue',
            section: <Language button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Profesion') {
        if (!toggle) {
          Array.push ({
            name: 'Profesion',
            section: <Passions button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Profesion',
            section: <Passions button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Indestry') {
        if (!toggle) {
          Array.push ({
            name: 'Indestry',
            section: <IndustryExperience button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Indestry',
            section: <IndustryExperience button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Find Me') {
        if (!toggle) {
          Array.push ({
            name: 'Find Me',
            section: <FindMeOnline button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Find Me',
            section: <FindMeOnline button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Summary') {
        if (!toggle) {
          Array.push ({
            name: 'Summary',
            section: <Summry button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Summary',
            section: <Summry button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Strength') {
        if (!toggle) {
          Array.push ({
            name: 'Strength',
            section: <Strength button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Strength',
            section: <Strength button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Volunteering') {
        if (!toggle) {
          Array.push ({
            name: 'Volunteering',
            section: <Volunteering button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Volunteering',
            section: <Volunteering button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Experience') {
        if (!toggle) {
          Array.push ({
            name: 'Experience',
            section: <ExperienceSection button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Experience',
            section: <ExperienceSection button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      } else if (data === 'Education') {
        if (!toggle) {
          Array.push ({
            name: 'Education',
            section: <Education button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: false,
          });
          HandleAddNewSection ();
        } else {
          Array.push ({
            name: 'Education',
            section: <Education button={HandleSetHoverEffect} />,
            margen: '',
            BoxShedow: '',
            Left: true,
          });
        }
        setArray ([...Array]);
      }
      dispatch (UPDATEWIDTHLEFTRIGTH (Array));
      localStorage.setItem ('Section', JSON.stringify (Array));
    }
  }
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    transition: transitions.SCALE,
  };
  const types = {
    ERROR: 'error',
  };

  function HandleAddNewSection () {
    let temp = [];
    temp = Array;
    if (Array === null || Array === undefined || Array.length === 0) {
      setToggleAddNewSectionRight (false);
      setToggleAddNewSectionLeft (false);
      setToggleAddNewSectionLeftSingleColumn (false);
    } else {
      setToggleAddNewSectionLeftSingleColumn (true);
      if (Array.length === 1) {
        temp.map ((item, index) => {
          if (item.Left === true) {
            setToggleAddNewSectionLeft (true);
            setToggleAddNewSectionRight (false);
          }
        });
        temp.map ((item, index) => {
          if (item.Left === false) {
            setToggleAddNewSectionLeft (false);
            setToggleAddNewSectionRight (true);
          }
        });
      } else {
        let flagRight = true;
        let FlagLeft = true;
        let bothLeft = true;
        let bothRight = true;
        temp.map ((item, index) => {
          if (item.Left === false) {
            bothLeft = false;
            flagRight = false;
          } else {
            bothRight = false;
            FlagLeft = false;
          }
        });
        if (bothRight === false && bothLeft === false) {
          setToggleAddNewSectionLeft (true);
          setToggleAddNewSectionRight (true);
        } else {
          if (flagRight === false) {
            setToggleAddNewSectionRight (true);
            setToggleAddNewSectionLeft (false);
          } else {
            if (FlagLeft === false) {
              setToggleAddNewSectionRight (false);
              setToggleAddNewSectionLeft (true);
            }
          }
        }
      }
    }
  }

  useEffect (() => {
    let temp = [];
    temp = Array;
    if (Array === null || Array === undefined || Array.length === 0) {
      setToggleAddNewSectionRight (false);
      setToggleAddNewSectionLeft (false);
    } else {
      if (Array.length === 1) {
        temp.map ((item, index) => {
          if (item.Left === true) {
            setToggleAddNewSectionLeft (true);
            setToggleAddNewSectionRight (false);
          }
        });
        temp.map ((item, index) => {
          if (item.Left === false) {
            setToggleAddNewSectionLeft (false);
            setToggleAddNewSectionRight (true);
          }
        });
      } else {
        let flagRight = true;
        let FlagLeft = true;
        let bothLeft = true;
        let bothRight = true;
        temp.map ((item, index) => {
          if (item.Left === false) {
            bothLeft = false;
            flagRight = false;
          } else {
            bothRight = false;
            FlagLeft = false;
          }
        });
        if (bothRight === false && bothLeft === false) {
          setToggleAddNewSectionLeft (true);
          setToggleAddNewSectionRight (true);
        } else {
          if (flagRight === false) {
            setToggleAddNewSectionRight (true);
            setToggleAddNewSectionLeft (false);
          } else {
            if (FlagLeft === false) {
              setToggleAddNewSectionRight (false);
              setToggleAddNewSectionLeft (true);
            }
          }
        }
      }
    }
    if (SingleColumnTemplate) {
      if (localStorage.getItem ('NewSection') !== null) {
        let value = localStorage.getItem ('NewSection');
        value = JSON.parse (value);
        let temp = value;
        temp.map ((item, index) => {
          let section = temp[index].name;
          if (temp[index].Left === false) {
            HandleSections (section, temp[index].Left);
            HandleAddNewSection ();
          } else {
            HandleSections (section, temp[index].Left);
            HandleAddNewSection ();
          }
        });
      }
    } else {
      if (localStorage.getItem ('Section') !== null) {
        let value = localStorage.getItem ('Section');
        value = JSON.parse (value);
        let temp = value;
        temp.map ((item, index) => {
          let section = temp[index].name;
          if (temp[index].Left === false) {
            HandleSections (section, temp[index].Left);
            HandleAddNewSection ();
          } else {
            HandleSections (section, temp[index].Left);
            HandleAddNewSection ();
          }
        });
      }
    }
  }, []);

  function HandleSetHoverEffect () {
    SetHoverEffect ('rgba(80,77,98,.2)');
  }

  const store = createStore (
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__ ()
  );

  function onDocumentLoadSuccess({numPages}) {
    setNumPages (numPages);
  }

  // const htmlString = ReactDOMServer.renderToString(
  //   <Provider store={store}>
  // <Home
  //   ref={childRef}
  //   Array={Array}
  //   ToggleAddNewSectionRight={ToggleAddNewSectionRight}
  //   ToggleAddNewSectionLeft={ToggleAddNewSectionLeft}
  //   setToggleAddNewSection={setToggleAddNewSection}
  //   HandleSetHoverEffect={HandleSetHoverEffect}
  //   HoverEffect={HoverEffect}
  //   SetHoverEffect={SetHoverEffect}
  //   SingleColumnTemplate={SingleColumnTemplate}
  //   setArray={setArray}
  //   ToggleAddNewSectionLeftSingleColumn={
  //     ToggleAddNewSectionLeftSingleColumn
  //   }

  // />
  // </Provider>
  // )
  // console.log("element",  htmlString)

  async function handlePdf () {
    // var bodyFormData = new FormData();
    // const data = `<div id="root" />`
    // bodyFormData.append("html",htmlString);
    // try {
    //   // make axios post request
    //   const response = await axios({
    //     method: "post",
    //     url: "https://apihtml2pdf.azurewebsites.net/Html2Pdf",
    //     data: bodyFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   console.log("o",response.data)
    // } catch(error) {
    //   console.log(error)
    // }

    const timer = setTimeout (() => {}, 1000);
    return () => clearTimeout (timer);
  }

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setHideButtons (false);
        setEffect(false)
      }, 1000);
      return () => clearTimeout (timer);
    },
    [HideButtons]
  );

  useEffect (() => {
    if (localStorage.getItem ('Singlecolumn') !== null) {
      let value = localStorage.getItem ('Singlecolumn');
      value = JSON.parse (value);
      dispatch (SINGLECOLUMN (value));
    }
    if (localStorage.getItem ('Color') !== null) {
      let value = localStorage.getItem ('Color');
      value = JSON.parse (value);
      dispatch (UPDATECOLOR (value));
    }
  }, []);

  useEffect (
    () => {
      if (ToggleRearrangebuttons) {
        setToggleRearrangeSection (true);
      }
      dispatch (TOGGLEREARRANGEBUTTONS (false));
    },
    [ToggleRearrangebuttons]
  );

  const optionsToPDF = {
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2],
  };

  // const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef (null);

  const [loading, setLoading] = React.useState (false);
  const [text, setText] = React.useState ('old boring text');

  const handleAfterPrint = React.useCallback (() => {
    console.log ('`onAfterPrint` called');
  }, []);

  const handleBeforePrint = React.useCallback (() => {
    console.log ('`onBeforePrint` called');
  }, []);

  const handleOnBeforeGetContent = React.useCallback (
    () => {
      console.log ('`onBeforeGetContent` called');
      setLoading (true);
      setText ('Loading new text...');

      dispatch (BACKGROUNDCOLORDATPICKER (false));
      setHideButtons (true);
      dispatch (INCREMENTBACKGROUNDCOLORACHIEVEMENT ());
      dispatch (INCREMENTBACKGROUNDCOLOREDUCATION ());
      dispatch (INCREMENTBACKGROUNDCOLORPASSION ());
      dispatch (INCREMENTBACKGROUNDCOLORTRAINING ());
      dispatch (INCREMENTBACKGROUNDCOLOREXPERIENCE ());
      dispatch (INCREMENTBACKGROUNDCOLORSKILL ());
      dispatch (INCREMENTBACKGROUNDCOLORPROJECT ());
      dispatch (INCREMENTBACKGROUNDCOLOMYTIME ());
      dispatch (INCREMENTBACKGROUNDCOLOFINDMEONLINE ());
      dispatch (INCREMENTBACKGROUNDCOLORLANGUAGE ());
      dispatch (INCREMENTBACKGROUNDCOLORSUMMARY ());
      dispatch (INCREMENTBACKGROUNDCOLORSTRENGTH ());
      dispatch (INCREMENTBACKGROUNDCOLORVOLUNTEERING ());
      dispatch (INCREMENTBACKGROUNDCOLORINDUSTERYEXPERIENCE ());
      dispatch(INCREMENTBACKGROUNDNULL());
      SetHoverEffect(null)
      setEffect(true)

      return new Promise (resolve => {
        onBeforeGetContentResolve.current = resolve;
        setTimeout (() => {
          setLoading (false);
          setText ('New, Updated Text!');
          resolve ();
        }, 2000);
      });
    },
    [setLoading, setText]
  );

  React.useEffect (
    () => {
      if (
        text === 'New, Updated Text!' &&
        typeof onBeforeGetContentResolve.current === 'function'
      ) {
        onBeforeGetContentResolve.current ();
      }
    },
    [onBeforeGetContentResolve.current, text]
  );

  const reactToPrintContent = React.useCallback (
    () => {
      return componentRef.current;
    },
    [componentRef.current]
  );

  const reactToPrintTrigger = React.useCallback (() => {
    return (
      <div
        className="outerWraperTemplateButtons"
       style={{marginLeft:"15px"}}
      >
        <BiDownload />
        <div>Download</div>
      </div>
    );
  }, []);

  if (ToggleRearrangeSection === true) {
    return (
      <div>
        <HomaPageSabSection
          setToggleRearrangeSection={setToggleRearrangeSection}
          setArray={setArray}
          Array={Array}
          HandleAddNewSection={HandleAddNewSection}
          HandleRemoveSection={HandleRemoveSection}
          SingleColumnTemplate={SingleColumnTemplate}
        />
      </div>
    );
  } else {
    return (
      <div>
        {/* <AlertProvider template={AlertTemplate} {...types} {...options}> */}
        <div style={{position: 'relative'}}>
          {ToggleUserImgModal &&
            <div
              className="outerWraperModalHover"
              onClick={() => {
                dispatch (TOGGLEUSERIMGMODALBUTTONS (false));
              }}
            />}
          {ToggleAddNewSection &&
            <div
              className="SetBackGroundAddNewSection"
              onClick={() => {
                setToggleAddNewSection (false);
              }}
            />}
          <div
            className="outerContainerButtons"
            style={{display: HideButtons ? 'none' : 'flex'}}
          >

            {TogglePages &&
              <div
                className="outerWraperTemplateButtons"
                onClick={() => {
                  setToggleAddNewSection (true);
                  dispatch (BACKGROUNDCOLORDATPICKER (false));
                }}
              >
                <HiPlusCircle className="RearrangeIcon" />
                Add Section
              </div>}
            {TogglePages &&
              <div
                className="outerWraperTemplateButtons"
                onClick={() => {
                  setToggleRearrangeSection (true);
                  dispatch (BACKGROUNDCOLORDATPICKER (false));
                }}
              >
                <CgArrangeFront className="RearrangeIcon" />
                Rearrange Sections
              </div>}
            <div>

              <div onClick={() => {}} className="Download">
                <ReactToPrint
                  content={reactToPrintContent}
                  documentTitle="AwesomeFileName"
                  onAfterPrint={handleAfterPrint}
                  onBeforeGetContent={handleOnBeforeGetContent}
                  onBeforePrint={handleBeforePrint}
                  removeAfterPrint
                  trigger={reactToPrintTrigger}
                  pageStyle="pageStyle"

                  // content={() => componentRef.current}
                />
                {/* {loading &&
                  <p className="indicator">onBeforeGetContent: Loading...</p>} */}

              </div>
            </div>
            {TogglePages &&
              <div className="outerWraperTemplateButtons">
                <HiTemplate />
                <div
                  onClick={() => {
                    setShowModal (!ShowModal);
                    setCheckToggleImage (false);
                  }}
                >
                  Template
                </div>
              </div>}
            <div className="outerWraperTemplateButtons">
              <CgArrangeBack />
              <div
                onClick={() => {
                  setShowModal (!ShowModal);
                  setCheckToggleImage (true);
                }}
              >
                Select Back Image
              </div>
            </div>
            <div className="outerWraperColorButtons">
              <MdArrowDropDown />
              <div
                onClick={() => {
                  setShowDropDown (!ShowDropDown);
                }}
              >
                Select Color
              </div>
              {ShowDropDown &&
                <div className="DropDown">
                  <div
                    className="ColorBlue"
                    onClick={() => {
                      dispatch (UPDATECOLOR (true));
                      localStorage.setItem ('Color', JSON.stringify (true));
                      setShowDropDown (false);
                    }}
                  >
                    Blue
                  </div>
                  <div
                    className="ColorGreen"
                    onClick={() => {
                      dispatch (UPDATECOLOR (false));
                      localStorage.setItem ('Color', JSON.stringify (false));
                      setShowDropDown (false);
                    }}
                  >
                    Green
                  </div>
                </div>}
            </div>
          </div>
          {TogglePages &&
            <div style={{position: 'absolute', zIndex: '-2'}}>
              <HomaPageSabSection
                setArray={setArray}
                Array={Array}
                HandleAddNewSection={HandleAddNewSection}
                HandleRemoveSection={HandleRemoveSection}
                SingleColumnTemplate={SingleColumnTemplate}
              />
            </div>}
          <div
            className="OuterWraperModalTemplate"
            style={{zIndex: ShowModal ? 5 : -1}}
          >
            {ShowModal &&
              <div
                style={{height: '500px'}}
                onClick={() => {
                  setShowModal (false);
                }}
              >
                <Modal CheckToggleImage={CheckToggleImage} />
              </div>}
          </div>

          {/* <Home
              Array={Array}
              ToggleAddNewSectionRight={ToggleAddNewSectionRight}
              ToggleAddNewSectionLeft={ToggleAddNewSectionLeft}
              setToggleAddNewSection={setToggleAddNewSection}
              HandleSetHoverEffect={HandleSetHoverEffect}
              HoverEffect={HoverEffect}
              SetHoverEffect={SetHoverEffect}
              SingleColumnTemplate={SingleColumnTemplate}
              setArray={setArray}
              ToggleAddNewSectionLeftSingleColumn={
                ToggleAddNewSectionLeftSingleColumn
              }
            /> */}
          {ToggleAddNewSection &&
            <div>
              <Sections
                HandleSections={HandleSections}
                setToggleAddNewSection={setToggleAddNewSection}
                HandleAddNewSection={HandleAddNewSection}
                HandleRemoveSection={HandleRemoveSection}
              />
            </div>}
        </div>
        {/* </AlertProvider> */}

        <ComponentToPrint
          ref={componentRef}
          Array={Array}
          ToggleAddNewSectionRight={ToggleAddNewSectionRight}
          ToggleAddNewSectionLeft={ToggleAddNewSectionLeft}
          setToggleAddNewSection={setToggleAddNewSection}
          HandleSetHoverEffect={HandleSetHoverEffect}
          HoverEffect={HoverEffect}
          SetHoverEffect={SetHoverEffect}
          SingleColumnTemplate={SingleColumnTemplate}
          setArray={setArray}
          Effect={Effect}
          ToggleAddNewSectionLeftSingleColumn={
            ToggleAddNewSectionLeftSingleColumn
          }
        />
      </div>
    );
  }
}

export default App;
