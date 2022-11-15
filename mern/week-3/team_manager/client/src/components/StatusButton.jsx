import React, { useEffect, useState } from "react";

const StatusButton = (props) => {
	const { thisPlayer, thisGame, text, activate } = props;
	// const {player, initialStatus, text, activate } = props;
	const [player, setPlayer] = useState([]);
	const [game, setGame] = useState(0);
	const [status, setStatus] = useState("Undecided");
	const [buttonText, setButtonText] = useState(text);
	let renderButton = "";

	useEffect(() => {
		// setStatus(initialStatus);
		setPlayer(thisPlayer);
		setStatus(this.player.games);
	}, [thisPlayer]);

	// if(buttonText === "Playing" && status === "playing"){
	// 	renderButton = <button className="active_playing">{buttonText}</button>;
	// }else if(buttonText === "Playing" && status === "playing"){

	// }else if{}

	const handleClick = (e) => {
		const isActive = e.target.dataset.select;
		const whichButton = e.target.value;
		console.log(isActive);
		if (!isActive) {
			activate(whichButton);
		}
	};

	switch (status) {
		case "playing":
			if (buttonText === "Playing") {
				renderButton = (
					<button
						className="active_playing"
						onClick={handleClick}
						data-select="true"
					>
						{buttonText}
					</button>
				);
			} else {
				renderButton = (
					<button
						className="not_active"
						onClick={handleClick}
						data-select="false"
					>
						{buttonText}
					</button>
				);
			}
			break;
		case "not playing":
			renderButton = (
				<button className="active_not_playing">{buttonText}</button>
			);
			break;
		case "undecided":
			renderButton = <button className="active_undecided">{buttonText}</button>;
			break;
		default:
			<button>{buttonText}</button>;
			break;
	}

	return <div>{renderButton}</div>;
};

export default StatusButton;
