import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { CgArrangeFront } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import { CgFormatUppercase } from 'react-icons/cg';
import SwitchButtons from './toggleButtons';
import MyStatefulEditor from './RichTextEditor';
import { GrDiamond } from 'react-icons/gr';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import { FcFlashOn } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { AiFillFolderOpen } from 'react-icons/ai';
import { RiToolsFill } from 'react-icons/ri';
import { BsFillChatFill } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { TiInfinity } from 'react-icons/ti';
import { GiFlatStar } from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';
import { GiTargeted } from 'react-icons/gi';
import { AiOutlineLink } from 'react-icons/ai';
import { DiWindows } from 'react-icons/di';
import { GiSkeletonKey } from 'react-icons/gi';
import { BsStarFill } from 'react-icons/bs';
import { GiWhiteBook } from 'react-icons/gi';
import { DiGithubAlt } from 'react-icons/di';
import { AiFillApple } from 'react-icons/ai';
import { CgBell } from 'react-icons/cg';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { TiLightbulb } from 'react-icons/ti';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiDesktop } from 'react-icons/bi';
import { FaMobileAlt } from 'react-icons/fa';
import { RiRuler2Fill } from 'react-icons/ri';
import { FaCloud } from 'react-icons/fa';
import { RiSunFill } from 'react-icons/ri';
import { BiWindowAlt } from 'react-icons/bi';
import { FaRobot } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { DiDatabase } from 'react-icons/di';
import { BiTachometer } from 'react-icons/bi';
import { GiShare } from 'react-icons/gi';
import { CgGirl } from 'react-icons/cg';
import { FaPaperPlane } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { ImHammer2 } from 'react-icons/im';
import { FaDollarSign } from 'react-icons/fa';
import { BiBitcoin } from 'react-icons/bi';
import { FaGlobeAfrica } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';
import { FaCar } from 'react-icons/fa';
import { HiMusicNote } from 'react-icons/hi';
import { RiHeadphoneFill } from 'react-icons/ri';
import { BsMicFill } from 'react-icons/bs';
import { CgPiano } from 'react-icons/cg';
import { GiPianoKeys } from 'react-icons/gi';
import { FaGuitar } from 'react-icons/fa';
import { GiGuitarBassHead } from 'react-icons/gi';
import { GiGuitar } from 'react-icons/gi';
import { BsFillAwardFill } from 'react-icons/bs';
import { BiAward } from 'react-icons/bi';
import { BsAwardFill } from 'react-icons/bs';
import { RiAwardLine } from 'react-icons/ri';
import { RiAwardFill } from 'react-icons/ri';
import { FaAward } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { GiMedal } from 'react-icons/gi';
import { GiMedalSkull } from 'react-icons/gi';
import { FaMedal } from 'react-icons/fa';
import { BiMedal } from 'react-icons/bi';
import { GiSportMedal } from 'react-icons/gi';
import { GiRibbonMedal } from 'react-icons/gi';
import { AiFillFlag } from 'react-icons/ai';
import { AiOutlineFlag } from 'react-icons/ai';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { FaFlagCheckered } from 'react-icons/fa';
import { FaCrown } from 'react-icons/fa';
import { AiTwotoneCrown } from 'react-icons/ai';
import { AiOutlineCrown } from 'react-icons/ai';
import { AiFillCrown } from 'react-icons/ai';
import { BiPlanet } from 'react-icons/bi';
import { IoMdPlanet } from 'react-icons/io';
import { GiReactor } from 'react-icons/gi';
import { FaReacteurope } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { GiGraduateCap } from 'react-icons/gi';
import { FaUserGraduate } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FcGraduationCap } from 'react-icons/fc';
import { CgShoppingCart } from 'react-icons/cg';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPuzzle } from 'react-icons/bs';
import { FaPuzzlePiece } from 'react-icons/fa';
import { BsPuzzleFill } from 'react-icons/bs';
import { BsFillPuzzleFill } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';
import { AiOutlineDotChart } from 'react-icons/ai';
import { BsFillBarChartFill } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { FcGenericSortingAsc } from 'react-icons/fc';
import { BsCursorText } from 'react-icons/bs';
import { AiOutlineSortDescending } from 'react-icons/ai';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { TiBatteryCharge } from 'react-icons/ti';
export function ToolAndTechnology() {
	return <input type="text" placeholder="Tool/Tecnology" className="ToolAndTechnologyTechStockSection" />;
}

export function TechStockAddSection(props) {
	const [Border, setBorder] = useState(null);
	const [ShowHeaderUnderButton, setShowHeaderUnderButton] = useState('none');
	const [backgroundColor, setbackgroundColor] = useState(null);
	const [ShowGroupName, setShowGroupName] = useState('block');
	const [ToggleButtons, setToggleButtons] = useState(false);
	const [listIcon, setlistIcon] = useState(false);
	const [Icon, setIcon] = useState(<GrDiamond />);
	const [ShowDiscription, setShowDiscription] = useState('block');

	function HandleBoarderUnder() {
		props.button();
		setlistIcon(false);
		setToggleButtons(false);
		setBorder('1px solid #60d5ba');
		setbackgroundColor('white');
		setShowHeaderUnderButton('flex');
	}
	useEffect(() => {
		setbackgroundColor(null);
		setBorder(null);
		setlistIcon(false);
		setToggleButtons(false);
		setShowHeaderUnderButton('none');
	}, [props.data]);
	function HandleShowGroupName(toggle) {
		if (toggle) {
			setShowGroupName('block');
		} else {
			setShowGroupName('none');
		}
	}
	function HandleShowDiscription(toggle) {
		if (toggle) {
			setShowDiscription('block');
		} else {
			setShowDiscription('none');
		}
	}
	const iconListData = [
		{ icon: <GrDiamond /> },
		{ icon: <AiOutlineSearch /> },
		{ icon: <FaRegThumbsUp /> },
		{ icon: <ImCheckmark /> },
		{ icon: <FaMapMarkerAlt /> },
		{ icon: <BsFillEyeFill /> },
		{ icon: <MdLocationOn /> },
		{ icon: <AiFillFolderOpen /> },
		{ icon: <MdEmail /> },
		{ icon: <FcFlashOn /> },
		{ icon: <TiInfinity /> },
		{ icon: <FiPaperclip /> },
		{ icon: <BsFillChatFill /> },
		{ icon: <RiToolsFill /> },
		{ icon: <AiOutlineLink /> },
		{ icon: <GiTargeted /> },
		{ icon: <AiOutlineStar /> },
		{ icon: <GiFlatStar /> },
		{ icon: <BsStarFill /> },
		{ icon: <GiSkeletonKey /> },
		{ icon: <DiWindows /> },
		{ icon: <AiFillApple /> },
		{ icon: <DiGithubAlt /> },
		{ icon: <GiWhiteBook /> },
		{ icon: <FaPencilAlt /> },
		{ icon: <FaRegCalendarAlt /> },
		{ icon: <CgBell /> },
		{ icon: <FaPhoneAlt /> },
		{ icon: <AiOutlineClockCircle /> },
		{ icon: <TiLightbulb /> },
		{ icon: <HiLightBulb /> },
		{ icon: <TiBatteryCharge /> },
		{ icon: <BiDesktop /> },
		{ icon: <FaMobileAlt /> },
		{ icon: <RiRuler2Fill /> },
		{ icon: <FaCloud /> },
		{ icon: <RiSunFill /> },
		{ icon: <BiWindowAlt /> },
		{ icon: <FaRobot /> },
		{ icon: <BiCodeAlt /> },
		{ icon: <DiDatabase /> },
		{ icon: <BiTachometer /> },
		{ icon: <GiShare /> },
		{ icon: <CgGirl /> },
		{ icon: <FaPaperPlane /> },
		{ icon: <IoIosRocket /> },
		{ icon: <ImHammer2 /> },
		{ icon: <FaDollarSign /> },
		{ icon: <BiBitcoin /> },
		{ icon: <FaGlobeAfrica /> },
		{ icon: <ImTruck /> },
		{ icon: <FaCar /> },
		{ icon: <HiMusicNote /> },
		{ icon: <RiHeadphoneFill /> },
		{ icon: <BsMicFill /> },
		{ icon: <CgPiano /> },
		{ icon: <GiPianoKeys /> },
		{ icon: <FaGuitar /> },
		{ icon: <GiGuitarBassHead /> },
		{ icon: <GiGuitar /> },
		{ icon: <BsFillAwardFill /> },
		{ icon: <BiAward /> },
		{ icon: <BsAwardFill /> },
		{ icon: <RiAwardLine /> },
		{ icon: <RiAwardFill /> },
		{ icon: <FaAward /> },
		{ icon: <FiAward /> },
		{ icon: <GiMedal /> },
		{ icon: <GiMedalSkull /> },
		{ icon: <FaMedal /> },
		{ icon: <BiMedal /> },
		{ icon: <GiSportMedal /> },
		{ icon: <GiRibbonMedal /> },
		{ icon: <AiFillFlag /> },
		{ icon: <AiOutlineFlag /> },
		{ icon: <FaFontAwesomeFlag /> },
		{ icon: <FaFlagCheckered /> },
		{ icon: <FaCrown /> },
		{ icon: <AiTwotoneCrown /> },
		{ icon: <AiOutlineCrown /> },
		{ icon: <AiFillCrown /> },
		{ icon: <BiPlanet /> },
		{ icon: <IoMdPlanet /> },
		{ icon: <GiReactor /> },
		{ icon: <FaReacteurope /> },
		{ icon: <FaReact /> },
		{ icon: <DiReact /> },
		{ icon: <GiGraduateCap /> },
		{ icon: <FaUserGraduate /> },
		{ icon: <FaGraduationCap /> },
		{ icon: <FcGraduationCap /> },
		{ icon: <CgShoppingCart /> },
		{ icon: <MdRemoveShoppingCart /> },
		{ icon: <FiShoppingCart /> },
		{ icon: <AiOutlineShoppingCart /> },
		{ icon: <BsPuzzle /> },
		{ icon: <FaPuzzlePiece /> },
		{ icon: <BsPuzzleFill /> },
		{ icon: <BsFillPuzzleFill /> },
		{ icon: <AiOutlineDotChart /> },
		{ icon: <AiOutlineBarChart /> },
		{ icon: <BsFillBarChartFill /> },
		{ icon: <AiFillPieChart /> },
		{ icon: <FcGenericSortingAsc /> },
		{ icon: <BsCursorText /> },
		{ icon: <AiOutlineSortDescending /> },
		{ icon: <AiOutlineSortAscending /> },
	];
	return (
		<>
			<div style={{ position: 'relative' }}>
				<div style={{ display: ShowHeaderUnderButton }} className="headingOptionUnderPAssionSection">
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
					<div
						className="ArrangeIcon"
						onClick={() => {
							setlistIcon(!listIcon);
						}}
					>
						{Icon}
					</div>
					<RiSettings5Fill
						onClick={() => {
							setToggleButtons(!ToggleButtons);
						}}
						style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.26)' }}
						className="ArrangeIcon"
					/>
				</div>
				{listIcon && (
					<div className="outerWraperListIcon">
						{iconListData &&
							iconListData.map((item) => {
								return (
									<div
										className="iconsList"
										onClick={() => {
											setIcon(item.icon);
										}}
									>
										{item.icon}
									</div>
								);
							})}
					</div>
				)}
			</div>
			<div style={{ position: 'relative' }}>
				{ToggleButtons && (
					<div style={{ marginLeft: '110px' }} className="OuterWraperToggleButtonsExperienceSection">
						<div className="InnerWraperToggleButtons">
							<div className="ToggleButtonsLabel">Show Icon</div>
							<div className="outerWraperSwitchClass">
								<SwitchButtons name={'ShowIcon'} function={HandleShowGroupName} />
							</div>
						</div>
						<div className="InnerWraperToggleButtons">
							<div className="ToggleButtonsLabel">Show Discription</div>
							<div className="outerWraperSwitchClass">
								<SwitchButtons name={'ShowIcon'} function={HandleShowDiscription} />
							</div>
						</div>
					</div>
				)}
			</div>

			<div
				className="outerWraperBoxTechStockSection"
				onClick={HandleBoarderUnder}
				style={{ border: Border, backgroundColor: backgroundColor, borderRadius: '5px',width:"373px" }}
			>
				<div style={{ display: 'flex' }}>
					<div style={{ display: ShowGroupName }} className="Icon">
						{Icon}
					</div>
					<input className="outerWraperGroupTitle" placeholder="Career Interest / passion" />
				</div>
				<div style={{ display: ShowDiscription }}>
					<MyStatefulEditor
						data={'What are you looking for in you next company?(e.g Learning Opportunitiess)'}
					/>
				</div>
			</div>
		</>
	);
}
export default function Passion(props) {
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
						<div style={{ borderBottom: '4px solid' }}>PASSION</div>
					</div>
					<div style={{ zIndex: '3', width: '812px' }}>
						<div style={{ display: 'flex', flexWrap: 'wrap' }}>
							{ArrayadingToolAndTechnologySection &&
								ArrayadingToolAndTechnologySection.map((number) => {
									return (
										<TechStockAddSection
											data={props.data}
											button={props.button}
											handlerDeletingToolAndTechnologySection={
												handlerDeletingToolAndTechnologySection
											}
											handlerAddingToolAndTechnologySection={
												handlerAddingToolAndTechnologySection
											}
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
