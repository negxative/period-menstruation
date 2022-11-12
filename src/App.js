import "./App.css";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";
import "./style.css";

function App() {
  const today=new Date();
const [value, setValue] = useState();
const [cycle, cycleValue] = useState("28");
const date = value;
const cycleLength = parseInt(cycle);


return (
	<>
	<div className="text-center">
		<nav className="navbar navbar-light pt-3" style={{background:"#783b3b",color:"white"}} >
		<div className="container-fluid d-flex justify-content-between" style={{background:"#783b3b"}}>
        <div className="d-flex align-items-center">
        <img src={"https://www.pngkey.com/png/full/72-724918_vector-drip-clip-art-blood-drop-clipart-png.png"}  style={{hieght:"20px",width:"30px"}} alt="" /> 
  			<h4>Menstruated: Period Tracker </h4>
        </div>
     <a href="https://menstruated.herokuapp.com/home/" style={{background:"#783b3b",textDecoration:"none",color:"white"}}>
     <h4> Menstruated:Home</h4>
    </a>
		</div>
		</nav>
		<h4 className="mt-5">Predict Next periodand Ovulation Day</h4>

		<label for="cycle">Select Menstruation Cycle Length: </label>
		<select
		onChange={(e) => cycleValue(e.target.value)}
		defaultValue={cycle}
		className="m-2"
		>
		<option value="28">28</option>
		<option value="29">29</option>
		<option value="30">30</option>
		<option value="31">31</option>
		<option value="32">32</option>
		<option value="33">33</option>
		<option value="34">34</option>
		<option value="35">35</option>
		<option value="36">36</option>
		<option value="37">37</option>
		</select>
	</div>

	<p className="text-center">
		Select Your Last Period Start Date from the Calendar <br/>
    (Last select date will be loaded )
	</p>

	<div className="d-flex justify-content-center ">
		<Calendar maxDate={today}  onChange={(e)=>{
      console.log(e)
      setValue(e);
      localStorage.setItem("previousDate", e);
    }} value={value}
		className="calendar mt-0" />
	</div>

	<div className="text-center mt-4 p-2">
		<div className="row">
		<div class="d-flex flex-column align-items-center justify-content-center">
			<div className="col-md-3  m-3 box " style={{background:"#c2d5ff"}}>
			<p>Next Period</p>

			<Moment format="Do MMMM YYYY"
				add={{ days: cycleLength - 1 }}>
				{date}
			</Moment>
			</div>
			<div className="col-md-3 m-3 box " style={{background:"#dec2ff"}}>
			<p> Approximate Ovulation Day</p>

			<Moment
				format="Do MMMM YYYY"
				add={{ days: cycleLength - 1 - 14 }}
			>
				{date}
			</Moment>
			</div>
		</div>
		</div>
	</div>
	</>
);
}

export default App;
