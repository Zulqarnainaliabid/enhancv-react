import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

export default function SwitchButtons(props) {
	const [checked, setchecked] = useState(true);
	function handleChange(value) {
		setchecked(value);
	    props.handleToggglebutton(props.index,value)
	}
	useEffect(() => {
		if (localStorage.getItem("arrayAchievement") !== null) {
			let value = localStorage.getItem("arrayAchievement")
			    value = JSON.parse(value)
				setchecked(value[props.indexouterarray].togglebuttonlist[props.index].selected)
		}	
	},[]);
	return (
		<label htmlFor="normal-switch">
			<Switch
				height={25}
				width={45}
				offColor="#888"
				onColor="#00c091"
				activeBoxShadow="null"
				uncheckedIcon={false}
				checkedIcon={false}
				onChange={handleChange}
				checked={checked}
				id="normal-switch"
			/>
		</label>
	);
}
