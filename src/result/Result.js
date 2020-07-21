import React from 'react';
import './Result.css';

const Result = props => {
	return (
		<div className="result">
			<p>{props.result}</p>
		</div>
	);
};

export default Result;