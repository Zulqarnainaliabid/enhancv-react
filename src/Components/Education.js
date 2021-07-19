import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { CgArrangeFront } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import { CgFormatUppercase } from 'react-icons/cg';
import { MdLocationOn } from 'react-icons/md';
import { BiLinkAlt } from 'react-icons/bi';
import SwitchButtons from './toggleButtons';
import {MdDateRange} from 'react-icons/md'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MyStatefulEditor from './RichTextEditor';


export function ToolAndTechnology() {
	return <input type="text" placeholder="Tool/Tecnology" className="ToolAndTechnologyTechStockSection" />;
}

export function TechStockAddSection(props) {
	const [Border, setBorder] = useState(null);
	const [ShowHeaderUnderButton, setShowHeaderUnderButton] = useState('none');
	const [backgroundColor, setbackgroundColor] = useState(null);
	const [ToggleButtons, setToggleButtons] = useState(false);
	const [startDate, setStartDate] = useState(new Date());

	const [ShowGPAEducation, setShowGPAEducation] = useState('block');
	const [ShoLocationEducation, setShoLocationEducation] = useState('flex');
	const [ShowBulletsEducation, setShowBulletsEducation] = useState('flex');
	const [ShowPerioidEducation, setShowPerioidEducation] = useState('flex');
	function HandleBoarderUnder() {
		props.button();
		setToggleButtons(false);
		setBorder('1px solid #60d5ba');
		setbackgroundColor('white');
		setShowHeaderUnderButton('flex');
	}
	useEffect(() => {
		setbackgroundColor(null);
		setBorder(null);
		setToggleButtons(false);
		setShowHeaderUnderButton('none');
	}, [props.data]);
	function handleshowdeGPAEducation(toggle) {
		if (toggle) {
			setShowGPAEducation('block');
		} else {
			setShowGPAEducation('none');
		}
	}
	function handlesshowLocationEducation(toggle) {
		if (toggle) {
			setShoLocationEducation('flex');
		} else {
			setShoLocationEducation('none');
		}
	}
	function handleshowBulletsEducation(toggle) {
		if (toggle) {
			setShowBulletsEducation('flex');
		} else {
			setShowBulletsEducation('none');
		}
	}
	function handleshowPeriodEducation(toggle) {
		if (toggle) {
			setShowPerioidEducation('flex');
		} else {
			setShowPerioidEducation('none');
		}
	}
	let data = [
		{ lebel: 'Show GPA', name: 'showdePGA', set: handleshowdeGPAEducation },
		{ lebel: 'Show Loaction', name: 'showLocationEducation', set: handlesshowLocationEducation },
		{ lebel: 'Show Bullets', name: 'showbulletsEducation', set: handleshowBulletsEducation },
		{ lebel: 'Show Period', name: 'showperiodEducation', set: handleshowPeriodEducation },
	];

	return (
		<>
			<div style={{ position: 'relative' }}>
				<div style={{ display: ShowHeaderUnderButton }} className="headingOptionUnderBoxTechStock">
					<div
						className="outerWraperPlusAndNewEntry"
						onClick={() => {
							props.handlerAddingToolAndTechnologySection();
						}}
					>
						<FaPlus className="newEntryPlusIcon" />
						<div className="newEntryText">New Entry</div>
					</div>

					<RiDeleteBin6Line
						className="ArrangeIcon"
						style={{ borderRight: '1px solid rgba(0, 0, 0, 0.26)' }}
						onClick={() => {
							props.handlerDeletingToolAndTechnologySection();
						}}
					/>
					<CgFormatUppercase
						className="ArrangeIcon"
						style={{ borderRight: '1px solid rgba(0, 0, 0, 0.26)' }}
					/>
					<RiSettings5Fill
						onClick={() => {
							setToggleButtons(!ToggleButtons);
						}}
						style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.26)' }}
						className="ArrangeIcon"
					/>
				</div>
			</div>
			<div style={{ position: 'relative' }}>
				{ToggleButtons && (
					<div style={{ marginLeft: '110px' }} className="OuterWraperToggleButtonsExperienceSection">
					   {data && data.map((item)=>{
						   return(
							<div className="InnerWraperToggleButtons">
							<div className="ToggleButtonsLabel">{item.lebel}</div>
							<div className="outerWraperSwitchClass">
								<SwitchButtons
									name={'showdiscriptiontrainingsection'}
									function={item.set}
								/>
							</div>
						</div>
						   )
					   })}
						
					</div>
				)}
			</div>
			<div
				className="outerWraperBoxTechStockSection"
				onClick={HandleBoarderUnder}
				style={{ border: Border, backgroundColor: backgroundColor, borderRadius: '5px',width:"382px" }}
			>
				<input className="outerWraperGroupTitle" placeholder="Degree and field of study" />
				<input className="outerWraperGroupTitle" placeholder="Scholl or University" />
				<div style={{ display: 'flex' }}>
					<div style={{ display: ShowPerioidEducation }} className="outerWraperDateExperienceSection">
						<label for={props.index1}>
							<MdDateRange className="dateIcone" />
						</label>
						<DatePicker
							id={props.index1}
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							className="datePicker"
						/>
						<div>Date</div>
					</div>
					<div style={{ display: ShoLocationEducation }} className="outerWraperDateExperienceSection">
						<MdLocationOn className="dateIcone" />
						<input type="text" placeholder="Location" />
					</div>
				</div>
				<div style={{display:"flex"}}>
				<div className="outerWraperInputFieldKnowledgeAndExperience" style={{ display: ShowBulletsEducation }}>
				<MyStatefulEditor
					data={'What knowledge or experience did you acquire during your studies ? (e.g. Delivered a comprehensive marketing strategy)'}
				/>
				</div>
				<div className="outerWraperGPAField" style={{display:ShowGPAEducation}}>
				<div className="GPA">GPA</div>
				<div className="outerWraperTextHolderGPAField">
				<input type="text" className="outerWraperIputFieldGPA" placeholder="4.0" />
				<div className="Slash">/</div>
				<input type="text" className="outerWraperIputFieldGPA" placeholder="4.0" />
				</div>
				</div>
				</div>
			</div>
		</>
	);
}
export default function Education(props) {
	const [Border, setBorder] = useState(null);
	const [ArrayadingToolAndTechnologySection, setArrayadingToolAndTechnologySection] = useState([]);
	const [ShowHeaderButton, setShowHeaderButton] = useState('none');
	const [BackGroundColor, setBackGroundColor] = useState(null);
	function HandleBoarder() {
		props.button();
		setBorder('1px solid #60d5ba');
		setShowHeaderButton('flex');
		setBackGroundColor('white');
	}
	useEffect(() => {
		setBorder(null);
		setShowHeaderButton('none');
		setBackGroundColor(null);
	}, [props.data]);
	function handlerAddingToolAndTechnologySection() {
		ArrayadingToolAndTechnologySection.push(1);
		setArrayadingToolAndTechnologySection([...ArrayadingToolAndTechnologySection]);
	}
	function handlerDeletingToolAndTechnologySection() {
		ArrayadingToolAndTechnologySection.pop(1);
		setArrayadingToolAndTechnologySection([...ArrayadingToolAndTechnologySection]);
	}
	return (
		<>
			<div style={{ position: 'relative' }}>
				<div style={{ display: ShowHeaderButton }} className="headingOptionBoxTechStockSection">
					<div className="outerWraperPlusAndNewEntry" onClick={handlerAddingToolAndTechnologySection}>
						<FaPlus className="newEntryPlusIcon" />
						<div className="newEntryText">New Entry</div>
					</div>
					<RiDeleteBin6Line className="DeleteIcon" onClick={handlerDeletingToolAndTechnologySection} />
					<CgArrangeFront className="ArrangeIcon" />
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div
						style={{ border: Border, backgroundColor: BackGroundColor }}
						className="HeadingNameBoxStockSection"
						onClick={HandleBoarder}
					>
						<div style={{ borderBottom: '4px solid' }}>EDUCATION</div>
					</div>
					{ArrayadingToolAndTechnologySection &&
						ArrayadingToolAndTechnologySection.map((number) => {
							return (
								<TechStockAddSection
									data={props.data}
									button={props.button}
									handlerDeletingToolAndTechnologySection={handlerDeletingToolAndTechnologySection}
									handlerAddingToolAndTechnologySection={handlerAddingToolAndTechnologySection}
								/>
							);
						})}
				</div>
			</div>
		</>
	);
}
