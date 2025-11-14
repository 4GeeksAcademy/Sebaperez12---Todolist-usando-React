import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";




//create your first component
const Home = () => {

	let [task, setTask] = useState("")
	let [list, setList] = useState([])

	const addTask = () => {
		setList([...list, task]);
		setTask("");
	};


	const deleteTask = (indexToDelete) => {
		setList(list.filter((item, index) => index !== indexToDelete));
	};


	function sendData(event) {
		event.preventDefault();
		addTask();
	}




	return (

		<div className=" container justify-content-center align-items-center ">
<h1 style={{fontSize: "100px", fontWeight: "lighter"}} className=" col-5 container justify-content-center align-items-center  mt-3" >todos</h1>
			<form  onSubmit={sendData} className=" col-5 container justify-content-center align-items-center background-white p-4 shadow-lg mt-2 ">
				<label htmlFor="text1">  </label>
				<input type="text" className="form-control border border-0 shadow-none fs-5 fw-light" id="text1" value={task} placeholder="What needs to be done?" onChange={(event) => setTask(event.target.value)} />
				<ul className="list-unstyled">

					{list.map((item, index) => (

						<div className="border-bottom p-2 mt-2 pb-3 ">
							<li key={index} className="row" id="cruzbox">
								<div className="d-flex flex-row col-10 text-body-secondary fs-5 fw-light"  >
									{item}
								</div>
								<div id="cruzOpacity"  className="d-flex flex-row-reverse col-2 " role="button" onClick={() => deleteTask(index)} >
									<FontAwesomeIcon  className="text-body-danger pt-2 " icon={faXmark} style= {{color: "red"}} />
								</div>
								
							</li>
						</div>
						
					))}


				</ul>
<p> {list.length} items left</p>

			</form >
							<div className="paper col-5 container justify-content-center  "></div>

		</div >




	);
};


export default Home;