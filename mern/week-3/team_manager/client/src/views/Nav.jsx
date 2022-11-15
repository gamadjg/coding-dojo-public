import "../assets/App.css";
import "../assets/style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
	const { propTabs, handleClick } = props;

	const [tabs, setTabs] = useState([]);

	useEffect(() => {
		setTabs(propTabs);
	}, [propTabs]);

	return (
		<nav>
			<div className="tab_container">
				{tabs.map((tab, i) => {
					return (
						<Link
							key={i}
							to={tab.path}
							onClick={handleClick}
							data-select={tab.text}
						>
							{tab.text}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
