import React, { useState } from "react";

//create your first component

const Note = () => {
	// La constante task almacena la info en la array
	const [task, setTask] = useState([]);
	// La constante text muestra la  info por pantalla
	const [text, setText] = useState("");

	const handleChange = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		setText(event.target.value);
	};
	// const Delete the list of task
	const Delete = (item) =>
		setTask(task.filter((deleteMe) => item != deleteMe));
	//const Save Task
	const Save = (e) => {
		if (text === "" || task.includes(text)) {
			alert("La tarea ya exicte o el campo esta vacío");
		} else {
			setTask([...task, text]);
			setText("");
		}
	};

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="row border border-info bg-white">
					<div className="row">
						<h6 className="mt-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-list-task m-2"
								viewBox="0 0 16 16">
								<path
									fillRule="evenodd"
									d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
								/>
								<path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
								<path
									fillRule="evenodd"
									d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
								/>
							</svg>
							Tasks:{task.length}
						</h6>
						<h1 className="text-center">TodoList with React</h1>
					</div>
					<div className="row ">
						<div className="input-group justify-content-center">
							<input
								type="text"
								className="form-control "
								placeholder="Add task"
								aria-label="Add task"
								aria-describedby="button-addon2"
								onChange={handleChange}
								value={text}
								onKeyDown={(e) => {
									{
										e.key === "Enter" ? Save(e) : "";
									}
								}}
							/>

							<button
								className="btn btn-outline-success"
								type="button"
								id="button-addon2"
								onClick={(e) => {
									Save(e);
								}}>
								Button
							</button>
						</div>
						<div className="row"></div>
					</div>
					<div className="row">
						<ul className="list-group list-group-flush mb-2 ps-2">
							{task.map((value, index) => (
								<li
									key={index}
									className="list-group-item mt-2 btn btn-outline-secondary">
									<h6 className="text-info">
										New task: {index + 1}
									</h6>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-pencil"
										viewBox="0 0 16 16">
										<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
									</svg>

									{value}

									<button
										type="button"
										className="btn btn-outline-danger d-flex justify-content-end mt-2"
										width="16"
										height="16"
										onClick={() => Delete(value)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-file-earmark-x"
											viewBox="0 0 16 16">
											<path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z" />
											<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
										</svg>
									</button>
								</li>
							))}
						</ul>

						{task.length === 0 ? (
							<div className="alert alert-success " role="alert">
								Great Job !!! You can go at home !!!
							</div>
						) : (
							<div className="alert alert-danger " role="alert">
								You have job hard... take your time.
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Note;
