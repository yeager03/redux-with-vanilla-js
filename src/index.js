import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const counter = document.querySelector(".counter"),
	inc = document.querySelector("#inc"),
	dec = document.querySelector("#dec"),
	rnd = document.querySelector("#rnd"),
	max = document.querySelector("#max");

// our redux store
const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

// const bindActionCreator =
// 	(creator, dispatch) =>
// 	(...args) => {
// 		dispatch(creator(...args));
// 	};

// actions
const { incAction, decAction, rndAction } = bindActionCreators(actions, dispatch);

// listeners
inc.addEventListener("click", incAction);

dec.addEventListener("click", decAction);

rnd.addEventListener("click", () => {
	if (max.value === "") {
		alert("Type max and min numb!");
		return;
	}
	const random = Math.floor(Math.random() * max.value);
	rndAction(random);
});

// subscribe on changes in store
const updateUI = () => (counter.textContent = getState().value);
subscribe(updateUI); // method subscribe for updating our UI

ReactDOM.render(
	<React.StrictMode>
		<></>
	</React.StrictMode>,
	document.getElementById("root")
);
