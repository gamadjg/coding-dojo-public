import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PageSelect = (props) => {
	const initial_tabs = props.tabs;
	const [tabs, setTabs] = useState([]);

	useEffect(() => {
		setTabs(initial_tabs);
	}, [initial_tabs]);

	return (
		<div className="tab_container">
			{tabs.map((tab, i) => {
				return (
					<Link key={i} to={tab.path}>
						{tab.text}
					</Link>
				);
			})}
		</div>
	);
};

export default PageSelect;
