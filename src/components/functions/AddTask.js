import React from "react";

// create todo list
const AddTask = ({ newTask, setNewTask, addTask }) => {
	return (
		<div className="Add">
			<div className="row">
				<div className="col container">
					{/* recive the task name and store it in setNewTask */}
					<input
						value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						className="form-control form-control-lg"
					/>
				</div>
				<div className="col-auto">
					<button onClick={addTask} className="btn btn-lg btn-success">
						Add Task
					</button>
				</div>
			</div>
			<br />
		</div>
	);
};

export default AddTask;
