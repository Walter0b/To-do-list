import React from "react";
import { useState } from "react";
import AddTaskForm from "./components/functions/AddTaskForm";
import Updatelist from "./components/functions/Updatelist";
import ToDo from "./components/functions/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Style/App.css";
function App() {
	const [toDo, setToDo] = useState([
		{ id: 1, title: "Study React", status: true },
		{ id: 2, title: "Study Next", status: false },
	]);
	const [newTask, setNewTask] = useState("");
	const [updateData, setUpdateData] = useState("");

	const update = () => {
		//  distructuring recorder and filter by id
		let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
		//store the object to be updated
		let updatedObject = [...filterRecords, updateData];
		setToDo(updatedObject);
	};

	const deleteTask = (id) => {
		let newTasks = toDo.filter((task) => task.id !== id);
		setToDo(newTasks);
	};

	const markDone = (id) => {
		let newTask = toDo.map((task) => {
			if (task.id === id) {
				return { ...task, status: !task.status };
			}
			return task;
		});
		setToDo(newTask);
	};

	const cancel = () => {
		setUpdateData("");
	};

	const addTask = () => {
		if (newTask) {
			let num = toDo.length + 1;
			let newEntry = { id: num, title: newTask, status: false };
			setToDo([...toDo, newEntry]);
			setNewTask("");
		}
	};

	const changeTask = (e) => {
		let newEntry = {
			id: updateData.id,
			title: e.target.value,
			status: updateData.status ? true : false,
		};
		setUpdateData(newEntry);
	};

	return (
		// update list
		<div className="container App">
			<h2>To-Do list</h2>
			{updateData && updateData ? (
				<Updatelist
					updateData={updateData}
					changeTask={changeTask}
					update={update}
					cancel={cancel}
				/>
			) : (
				// add new element to list
				<div className="add">
					<AddTaskForm
						newTask={newTask}
						setNewTask={setNewTask}
						addTask={addTask}
					/>
				</div>
			)}
			{toDo && toDo.length ? "" : "No Tasks Available"}
			<ToDo
				toDo={toDo}
				markDone={markDone}
				setUpdateData={setUpdateData}
				deleteTask={deleteTask}
			/>
		</div>
	);
}
export default App;
