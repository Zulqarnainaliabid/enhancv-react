import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { CgArrangeFront } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import { CgFormatUppercase } from 'react-icons/cg';
import SwitchButtons from './toggleButtons';
import MyStatefulEditor from './RichTextEditor'
export function ToolAndTechnology() {
	return <input type="text" placeholder="Tool/Tecnology" className="ToolAndTechnologyTechStockSection" />;
}

export function TechStockAddSection(props) {
	const [Border, setBorder] = useState(null);
	const [ShowHeaderUnderButton, setShowHeaderUnderButton] = useState('none');
	const [backgroundColor, setbackgroundColor] = useState(null);
	const [ToggleButtons, setToggleButtons] = useState(false);
	const [ShowDescription, setShowDescription] = useState("block");
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
	function HandleShodiscriptionTrainingCourses(toggle) {
		if (toggle) {
			setShowDescription('block');
		} else {
			setShowDescription('none');
		}
	}
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
						<div className="InnerWraperToggleButtons">
							<div className="ToggleButtonsLabel">Show Discription</div>
							<div className="outerWraperSwitchClass">
								<SwitchButtons name={'showdiscriptiontrainingsection'} function={HandleShodiscriptionTrainingCourses} />
							</div>
						</div>
					</div>
				)}
			</div>
			<div
				className="outerWraperBoxTechStockSection"
				onClick={HandleBoarderUnder}
				style={{ border: Border, backgroundColor: backgroundColor, borderRadius: '5px' }}
			>
				<input
					className="outerWraperGroupTitle"
					placeholder="Course title"
				/>
				<div style={{display:ShowDescription}}>
				<MyStatefulEditor data={"Which Institution provided the course"} />
				</div>
			</div>
		</>
	);
}
export default function TrainingCourse(props) {
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
						<div style={{ borderBottom: '4px solid' }}>TRAINING/COURSES</div>
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
