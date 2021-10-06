import React, { useState } from "react";

const Secondscounter = () => {
	const [counter, setCounter] = useState(0);
	setTimeout(() => setCounter(counter + 1), 1000);
	return (
		<div className="container mt-5">
			<div className="row d-flex flex-row justify-content-center">
				<div className="col-sm-2 mx-2 text-center">
					<i className="far fa-clock"></i>
				</div>
				<div className="col-sm-1 mx-2 text-center">0</div>
				<div className="col-sm-1 mx-2 text-center">0</div>
				<div className="col-sm-1 mx-2 text-center">0</div>
				<div className="col-sm-1 mx-2 text-center">0</div>
				<div className="col-sm-1 mx-2 text-center">0</div>
				<div className="col-sm-1 mx-2 text-center">{counter}</div>
			</div>
		</div>
	);
};
export default Secondscounter;
