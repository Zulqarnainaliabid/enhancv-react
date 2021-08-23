import React, { useState , useEffect} from 'react';
import Switch from 'react-switch';

export default function SwitchButtons(props) {
	const [checked, setchecked] = useState(true);
	function handleChange(value) {
		setchecked(value);
		props.function(value)
		localStorage.setItem(props.name, JSON.stringify(value));
	}
	useEffect(() => {
		if (localStorage.getItem(props.name) !== null) {
			let value = localStorage.getItem(props.name)
			    value = JSON.parse(value)
				setchecked(value)
		}	
	},[]);
	return (
		<label>
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
