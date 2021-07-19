import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import './index.css';
function SliderComponent(props) {
	const [value, setvalue] = useState(0);
	const [Language, setLanguage] = useState('Begineer');
	const handleChange = (value) => {
		setvalue(value);
		if (value === 1) setLanguage('Begineer');
		else if (value === 2) setLanguage('Intermediate');
		else if (value === 3) setLanguage('Advanced');
		else if (value === 4) setLanguage('Proficient');
		else if (value === 5) setLanguage('Native');
	};
	return (
		<div className="slider">
			<div className="outerWraperTextHolder" >
				<div className="language">Language</div>
				<div className="value" style={{ display:props.data }}>{Language}</div>
			</div>
			<Slider min={1} max={5} tooltip={false} value={value} onChange={handleChange} />
		</div>
	);
}
export default SliderComponent;
