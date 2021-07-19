import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { CgArrangeFront } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import { CgFormatUppercase } from 'react-icons/cg';
import SwitchButtons from './toggleButtons';
import SliderComponent from './Slider';
export function ToolAndTechnology() {
	return <input type="text" placeholder="Tool/Tecnology" className="ToolAndTechnologyTechStockSection" />;
}

export function TechStockAddSection(props) {
	const [Border, setBorder] = useState(null);
	const [ShowHeaderUnderButton, setShowHeaderUnderButton] = useState('none');
	const [backgroundColor, setbackgroundColor] = useState(null);
	const [ToggleButtons, setToggleButtons] = useState(false);
	const [ShowSlider, setShowSlider] = useState('block');
	const [ShowProfenciency, setShowProfenciency] = useState('flex');
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
	function HandleShowSlider(toggle) {
		if (toggle) {
			setShowSlider('block');
		} else {
			setShowSlider('none');
		}
	}
	function HandleShowProfenciency(toggle) {
		if (toggle) {
			setShowProfenciency('flex');
		} else {
			setShowProfenciency('none');
		}
	}
	return (
		<>
			<div style={{ position: 'relative' }}>
				<div style={{ display: ShowHeaderUnderButton }} className="headingOptionUnderLanguageSection">
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
						<div className="InnerWraperToggleButtons">
							<div className="ToggleButtonsLabel">Show Slider</div>
							<div className="outerWraperSwitchClass">
								<SwitchButtons name={'ShowSlider'} function={HandleShowSlider} />
							</div>
						</div>
						<div className="InnerWraperToggleButtons">
							<div className="ToggleButtonsLabel">Profenciency</div>
							<div className="outerWraperSwitchClass">
								<SwitchButtons name={'ShowProfenciency'} function={HandleShowProfenciency} />
							</div>
						</div>
					</div>
				)}
			</div>
			<div
				className="outerWraperBoxTechStockSection"
				onClick={HandleBoarderUnder}
				style={{ border: Border, backgroundColor: backgroundColor, borderRadius: '5px',width:"373px"}}
			>
				<input className="outerWraperGroupTitle" placeholder="Area of expertise" />
				<div style={{ display: ShowSlider }}>
					<SliderComponent data={ShowProfenciency} />
				</div>
			</div>
		</>
	);
}
export default function Language(props) {
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
				<div style={{ display: ShowHeaderButton }} className="headingOptionAchievementsSection">
					<div className="outerWraperPlusAndNewEntry" onClick={handlerAddingToolAndTechnologySection}>
						<FaPlus className="newEntryPlusIcon" />
						<div className="newEntryText">New Entry</div>
					</div>
					<RiDeleteBin6Line className="DeleteIcon" onClick={handlerDeletingToolAndTechnologySection} />
					<CgArrangeFront className="ArrangeIcon" />
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div
						style={{ border: Border, backgroundColor: BackGroundColor, width: '780px' }}
						className="HeadingNameBoxStockSection"
						onClick={HandleBoarder}
					>
						<div style={{ borderBottom: '4px solid' }}>LANGUAGE</div>
					</div>
					<div style={{zIndex:"3",width:"812px"}}>
					<div style={{ display: 'flex',flexWrap: "wrap"}}>
						{ArrayadingToolAndTechnologySection &&
							ArrayadingToolAndTechnologySection.map((number) => {
								return (
									<TechStockAddSection
										data={props.data}
										button={props.button}
										handlerDeletingToolAndTechnologySection={
											handlerDeletingToolAndTechnologySection
										}
										handlerAddingToolAndTechnologySection={handlerAddingToolAndTechnologySection}
									/>
								);
							})}
					</div>
					</div>
				</div>
			</div>
		</>
	);
}
