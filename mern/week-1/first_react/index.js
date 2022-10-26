// Select root div elemetn
const domContainer = document.querySelector("#root");
// Create the root of react dom
const root = ReactDOM.createRoot(domContainer);

// ExampleButton component
class ExampleButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isCLicked: false };
	}
	render() {
		if (this.state.isCLicked) {
			return "You clicked this";
		}
		return React.createElement(
			"button",
			{ onClick: () => this.setState({ isCLicked: true }) },
			"Click me!"
		);
	}
}

// Choose what to render
// root.render(React.createElement(ExampleButton));
root.render(
	React.createElement("h1", {}, "Our first react page has rendered.")
);
