import "./App.css";
import BoxForm from "./components/box_form";
import React, { useState } from "react";
function App() {
	const [msgCache, setMsgCache] = useState("");

	const handleNewMsg = (message) => {
		const msgArr = [...msgCache, message];
		setMsgCache(msgArr);
		console.log(msgArr);
	};

	return (
		<div className="App">
			<BoxForm handleNewMsg={handleNewMsg} />
		</div>
	);
}

export default App;
