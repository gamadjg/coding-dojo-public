const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Faker Api: https://fakerjs.dev/api/address.html

class User {
	constructor(password, email, phoneNumber, lastName, firstName, _id) {
		this.password = password;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.lastName = lastName;
		this.firstName = firstName;
		this.id = _id;
	}
}

class Company {
	constructor(_id, name, address) {
		this.id = _id;
		this.name = name;
		this.address = address;
	}
}

const createUser = () => {
	return new User(
		faker.internet.password(),
		faker.internet.email(),
		faker.phone.number(),
		faker.name.lastName(),
		faker.name.firstName(),
		faker.datatype.uuid()
	);
};

const createCompany = () => {
	return new Company(faker.datatype.uuid(), faker.company.name(), {
		street: faker.address.street(),
		city: faker.address.city(),
		state: faker.address.state(),
		zipZCode: faker.address.zipCode(),
		country: faker.address.country(),
	});
};

app.get("/", (req, res) => {
	res.json("CodingDojo, Assignment: Faker API");
});

app.get("/api/users/new", (req, res) => {
	res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
	res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
	res.json({ user: createUser(), company: createCompany() });
});

const server = app.listen(8000, () =>
	console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
