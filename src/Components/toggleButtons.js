import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

export default function SwitchButtons(props) {
	const [checked, setchecked] = useState(false);
	function handleChange(value) {
		setchecked(value);
		props.function(value)
		localStorage.setItem(props.name, JSON.stringify(value));
	}
	useEffect(() => {
		if (localStorage.getItem(props.name) !== null) {
			let value = localStorage.getItem(props.name)
			setchecked(JSON.parse(value));
		} else {
			localStorage.setItem(props.name, JSON.stringify(false));
		}
	}, []);

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
