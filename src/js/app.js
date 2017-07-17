import DoMath from "./modules/doMath.js";
import Speak from "./modules/speak.js";

const user = {
	"age": 29,
	"firstname": "Rob",
	"lastname": "Howells"
};

class Person {

	constructor(data) {
		this.firstname = data.firstname;
		this.lastname = data.lastname;
		this.age = data.age;
	}

	introduction() {
		const increment = 1;
		const sum = new DoMath(this.age);
		const ageNextYear = sum.init(increment);
		const content = `
				Hello my name is ${this.firstname} ${this.lastname}.
				Next birthday I'll be ${ageNextYear} years old.`;
		const talk = new Speak(content);
		talk.init();
	}

}

const rob = new Person(user);
rob.introduction();
