import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { CgArrangeFront } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import { CgFormatUppercase } from 'react-icons/cg';
import SwitchButtons from './toggleButtons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdLocationOn } from 'react-icons/md';
import { BiLinkAlt } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import MyStatefulEditor from './RichTextEditor';

export function ToolAndTechnology() {
	return <input type="text" placeholder="Tool/Tecnology" className="ToolAndTechnologyTechStockSection" />;
}

export function TechStockAddSection(props) {
	const [Border, setBorder] = useState(null);
	const [ShowHeaderUnderButton, setShowHeaderUnderButton] = useState('none');
	const [backgroundColor, setbackgroundColor] = useState(null);
	const [ToggleButtons, setToggleButtons] = useState(false);
	const [ShowDescription, setShowDescription] = useState('block');
	const [ShoBullets, setShoBullets] = useState('flex');

	const [ShowLocation, setShowLocation] = useState('flex');
	const [ShowPerioid, setShowPerioid] = useState('flex');
	const [ShowLinks, setShowLinks] = useState('block');

	const [startDate, setStartDate] = useState(new Date());
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
	function handleshowdescriptionprojectsection(toggle) {
		if (toggle) {
			setShowDescription('flex');
		} else {
			setShowDescription('none');
		}
	}
	function handleshowcbulletsprojectsection(toggle) {
		if (toggle) {
			setShoBullets('flex');
		} else {
			setShoBullets('none');
		}
	}
	function handleshowlocationprojectsection(toggle) {
		if (toggle) {
			setShowLocation('flex');
		} else {
			setShowLocation('none');
		}
	}
	function handleshowperiodprojectsection(toggle) {
		if (toggle) {
			setShowPerioid('flex');
		} else {
			setShowPerioid('none');
		}
	}
	function handleshowlinkprojectsection(toggle) {
		if (toggle) {
			setShowLinks('flex');
		} else {
			setShowLinks('none');
		}
	}
	let data = [
		{ lebel: 'Show Discription', name: 'showdescriptionprojectsection', set: handleshowdescriptionprojectsection },
		{ lebel: 'Show Bullets', name: 'showcbulletsprojectsection', set: handleshowcbulletsprojectsection },
		{ lebel: 'Show Location', name: 'showlocationprojectsection', set: handleshowlocationprojectsection },
		{ lebel: 'Show Period', name: 'showperiodprojectsection', set: handleshowperiodprojectsection },
		{ lebel: 'Show Link', name: 'showlinkprojectsection', set: handleshowlinkprojectsection },
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
						{data &&
							data.map((item) => {
								return (
									<div className="InnerWraperToggleButtons">
										<div className="ToggleButtonsLabel">{item.lebel}</div>
										<div className="outerWraperSwitchClass">
											<SwitchButtons name={item.name} function={item.set} />
										</div>
									</div>
								);
							})}
					</div>
				)}
			</div>
			<div
				className="outerWraperBoxTechStockSection"
				onClick={HandleBoarderUnder}
				style={{ border: Border, backgroundColor: backgroundColor, borderRadius: '5px',width:"381px" }}
			>
				<input className="outerWraperGroupTitle" placeholder="Area of expertise" />
				<div style={{ display: 'flex' }}>
					<div style={{ display: ShowPerioid }} className="outerWraperDateExperienceSection">
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
					<div style={{ display: ShowLocation }} className="outerWraperDateExperienceSection">
						<MdLocationOn className="dateIcone" />
						<input type="text" placeholder="Location" />
					</div>
				</div>
				<div style={{ display: ShowLinks }} className="outerWraperDateExperienceSection">
					<BiLinkAlt className="dateIcone" />
					<input type="text" placeholder="Url" />
				</div>
				<div style={{ display: ShowDescription }} >
				<MyStatefulEditor data={'Short Summary of your work'} />
				</div>
				<div style={{ display: ShoBullets }}>
				<MyStatefulEditor
					data={'What was a successful outcome of your work (e.g Raised $3,000 for the charity)'}
				/>
				</div>
			</div>
		</>
	);
}
export default function Projects(props) {
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
						<div style={{ borderBottom: '4px solid' }}>PROJECT</div>
					</div>
					{ArrayadingToolAndTechnologySection &&
						ArrayadingToolAndTechnologySection.map((number, index1) => {
							return (
								<TechStockAddSection
									index1={index1}
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
