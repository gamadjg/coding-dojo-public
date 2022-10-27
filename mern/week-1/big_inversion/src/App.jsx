import "./App.css";
import PersonCard from "./components/person_card";

function App() {
	class User {
		constructor(firstName, lastName, age, hairColor) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
			this.hairColor = hairColor;
		}
	}

	const users = [];
	users.push(new User("Jane", "Doe", 45, "Black"));
	users.push(new User("John", "Smith", 88, "Brown"));
	users.push(new User("Millard", "Fillmore", 50, "Brown"));
	users.push(new User("Maria", "Smith", 62, "Brown"));

	let comp_list = users.map((user, id) => (
		<PersonCard
			key={id}
			firstName={user.firstName}
			lastName={user.lastName}
			age={user.age}
			hairColor={user.hairColor}
		/>
	));

	return <div>{comp_list}</div>;
}

export default App;
