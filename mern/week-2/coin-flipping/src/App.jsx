import React, { useState } from "react";
import "./App.css";

function App() {
	const [response, setResponse] = useState("");

	function tossCoin() {
		return Math.random() > 0.5 ? "heads" : "tails";
	}

	function fiveHeads() {
		return new Promise((resolve, reject) => {
			let headsCount = 0;
			let attempts = 0;
			while (headsCount < 5 && attempts < 100) {
				attempts++;
				let result = tossCoin();
				if (result === "heads") {
					headsCount++;
				} else {
					headsCount = 0;
				}
			}
			if (attempts === 100) {
				console.log("failed");
				reject("Failed, over 100 attempts.");
			} else {
				console.log("success");
				resolve(`5 heads in a row completed in ${attempts} attempts`);
			}
		});
	}

	if (!response) {
		fiveHeads()
			.then((res) => {
				console.log(res);
				setResponse(res);
			})
			.catch((err) => {
				console.log(err);
				setResponse(err);
			});
	}

	return <div className="App">{response}</div>;
}

export default App;
