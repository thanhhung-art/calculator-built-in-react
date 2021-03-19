
import React from "react";
import ReactDOM from "react-dom";
import { useState,useEffect } from "react";
import './App.css';

function DisplayCalculator (props){

	return (
			<div className="container_display">
				<div className="container_display_calculation">
					{props.curr}
				</div>
			</div>
		)
}


function Calculator () {
	
	const [calculation, setCalculation] = useState(["_"]);
	const [lastResult, setLastResult] = useState(0);

	const handleTypeNumber = (e) => {
		let ElementValue = e.target.value;
		let Calculation = [...calculation];
		Calculation.push(ElementValue);
		if(Calculation[0] !== "_"){
			Calculation.unshift("_");
		}
		setCalculation(Calculation);
	}

	const handleTypeOperator = (e) => {
		let ElementValue = e.target.value;
		let Calculation = [...calculation];
		if(calculation[calculation.length - 1] === "+" ||
		   calculation[calculation.length - 1] === "-" ||
		   calculation[calculation.length - 1] === "*" ||
		   calculation[calculation.length - 1] === "/" ||
		   calculation[calculation.length - 1] === "." ){
			//nothing
		}
		else{
			Calculation.push(ElementValue);
			if(Calculation[0] !== "_"){
			Calculation.unshift("_");
			}
			setCalculation(Calculation);
		}
	}

	const handleReset = () => {
		setCalculation(["_"]);
	}

	const handleRemove = () => {

		setCalculation(() => {
			if(calculation.length < 2 ){
				return "_";
			}
			else{
				let saveState = [...calculation];
				saveState.pop();

				return saveState;
			}
		});
	}

	const handleButtonEqual = () => {
		if( calculation[0] === "_"){
			calculation.shift();
		}
		try {
		const a = calculation.join("");
		const result = eval(a).toString();
		setCalculation([result]);
		}
		catch(error){
			setCalculation(["error!"]);
		}
	}

	return(
			<div className="container">
				
				<DisplayCalculator curr={calculation} />

				<div className="container_keyboard">
					<button className="number" value="7" onClick={handleTypeNumber}   >7</button>
					<button className="number" value="8" onClick={handleTypeNumber}   >8</button>
					<button className="number" value="9" onClick={handleTypeNumber}   >9</button>
					<button value="del" onClick={handleRemove}      				  >DEL</button>
					<button value="ac" onClick={handleReset}       					  >AC</button>
					<button className="number" value="4" onClick={handleTypeNumber}   >4</button>
					<button className="number" value="5" onClick={handleTypeNumber}   >5</button>
					<button className="number" value="6" onClick={handleTypeNumber}   >6</button>
					<button className="operator" value="+" onClick={handleTypeOperator} >+</button>
					<button className="operator" value="-" onClick={handleTypeOperator} >-</button>
					<button className="number" value="1" onClick={handleTypeNumber}   >1</button>
					<button className="number" value="2" onClick={handleTypeNumber} >2</button>
					<button className="number" value="3" onClick={handleTypeNumber}   >3</button>
					<button className="number" value="*" onClick={handleTypeOperator} >*</button>
					<button className="operator" value="/" onClick={handleTypeOperator} >/</button>
					<button className="number" value="0" onClick={handleTypeNumber}   >0</button>
					<button className="operator" value="." onClick={handleTypeOperator} >.</button>
					<button className="operator" value="(" onClick={handleTypeOperator} >(</button>
					<button className="operator" value=")" onClick={handleTypeOperator} >)</button>
					<button className="operator" value="=" onClick={handleButtonEqual}  >=</button>
				</div>
				
			</div>
			)
}

ReactDOM.render( <Calculator />, document.getElementById("app"));