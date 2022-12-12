import React from "react";

const Updatelist = ({ updateData, changeTask, update, cancel }) => {
	return (
		<>
			{/* Update Task */}
			<div className="row">
				<div className="col">
					<input
						value={updateData && updateData.title}
						onChange={(e) => changeTask(e)}
						className="form-control form-control-lg update"
					/>
				</div>
				<div className="col-auto">
					<button onClick={update} className="btn btn-lg btn-success mr-20">
						Update
					</button>
					<button onClick={cancel} className="btn btn-lg btn-warning">
						Cancel
					</button>
				</div>
			</div>
			<br />
		</>
	);
};

export default Updatelist;
