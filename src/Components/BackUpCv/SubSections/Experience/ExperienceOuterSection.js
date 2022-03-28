import React, {useState, useEffect, useContext} from 'react';
import ExperienceInnerSection from './ExperienceInnerSection';
import TextareaAutosize from 'react-autosize-textarea';

var HtmlToReact = require ('html-to-react');
var HtmlToReactParser = require ('html-to-react').Parser;
export default function ExperienceOuterSection (props) {
  const [HighLighter, setHighLighter] = useState (false);
  const [array, setState] = useState ([
    {
      selected: false,
      toggleSwitch: [
        {name: 'Show Title', selected: true},
        {name: 'Show CompanyName', selected: true},
        {name: 'Show Description', selected: true},
        {name: 'Show Bullets', selected: true},
        {name: 'Show Location', selected: true},
        {name: 'Show Period', selected: true},
        {name: 'Show Link', selected: true},
      ],
      value: {
        title: '',
        companyName: '',
        timePeriod: '',
        location: '',
        url: '',
        companyDescription: '',
        bullets: '',
      },
      date: {
        monthFrom: '',
        monthOngoing: '',
        yearFrom: '',
        yearOngoing: '',
        selectedSlashFrom: false,
        selectedSlashOngoing: false,
        selectedMinus: false,
        onGoing: false,
      },
      yearFromPicker: [
        {name: '2011', selected: false},
        {name: '2012', selected: false},
        {name: '2013', selected: false},
        {name: '2014', selected: false},
        {name: '2015', selected: false},
        {name: '2016', selected: false},
        {name: '2017', selected: false},
        {name: '2018', selected: false},
        {name: '2019', selected: false},
        {name: '2020', selected: false},
        {name: '2021', selected: false},
        {name: '2022', selected: false},
      ],
      yearToPicker: [
        {name: '2011', selected: false},
        {name: '2012', selected: false},
        {name: '2013', selected: false},
        {name: '2014', selected: false},
        {name: '2015', selected: false},
        {name: '2016', selected: false},
        {name: '2017', selected: false},
        {name: '2018', selected: false},
        {name: '2019', selected: false},
        {name: '2020', selected: false},
        {name: '2021', selected: false},
        {name: '2022', selected: false},
      ],
      monthFromPicker: [
        {name: 'Jan', number: '01', selected: false},
        {name: 'Feb', number: '02', selected: false},
        {name: 'Mar', number: '03', selected: false},
        {name: 'Apr', number: '04', selected: false},
        {name: 'May', number: '05', selected: false},
        {name: 'Jun', number: '06', selected: false},
        {name: 'Jul', number: '07', selected: false},
        {name: 'Aug', number: '08', selected: false},
        {name: 'Sep', number: '09', selected: false},
        {name: 'Oct', number: '10', selected: false},
        {name: 'Nov', number: '11', selected: false},
        {name: 'Dec', number: '12', selected: false},
      ],
      monthToPicker: [
        {name: 'Jan', number: '01', selected: false},
        {name: 'Feb', number: '02', selected: false},
        {name: 'Mar', number: '03', selected: false},
        {name: 'Apr', number: '04', selected: false},
        {name: 'May', number: '05', selected: false},
        {name: 'Jun', number: '06', selected: false},
        {name: 'Jul', number: '07', selected: false},
        {name: 'Aug', number: '08', selected: false},
        {name: 'Sep', number: '09', selected: false},
        {name: 'Oct', number: '10', selected: false},
        {name: 'Nov', number: '11', selected: false},
        {name: 'Dec', number: '12', selected: false},
      ],
    },
  ]);

  var htmlToReactParser = new HtmlToReactParser ();
  var isValidNode = function () {
    return true;
  };
  var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions (React);
  var processingInstructions = [
    {
      replaceChildren: true,
      shouldProcessNode: function (node) {
        return node.attribs && node.attribs['data-test'] === 'foo';
      },
      processNode: function (node, children, index) {
        return React.createElement ('h1', {key: index}, 'Heading');
      },
    },
    {
      shouldProcessNode: function (node) {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode,
    },
  ];

  return (
    <div>
      <div className="outerWrapperCompleteBox">
        <div className="HeadingNameBox BorderRadius">
          <TextareaAutosize
            className="outerWrapperSectionsHeadingValue"
            placeholder="EXPERIENCE"
            value={props.HeadingValue}
            onChange={() => {
              console.log ('ll');
            }}
            draggable="false"
          />
        </div>
        <div className="BorderOuterSectionBackUpCv">
          {props.list &&
            props.list.map ((item, index) => {
              let display_dashesLine = true;
              if (props.list.length - 1 === index) {
                display_dashesLine = false;
              }
              return (
                <div key={index}>
                  <ExperienceInnerSection
                    item={item}
                    index={index}
                    list={props.list}
                    display_dashesLine={display_dashesLine}
                    Colors={props.Colors}
                    Template={props.Template}
                    Sections={props.Sections}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
