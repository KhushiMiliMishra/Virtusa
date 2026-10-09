
import * as readline from "readline";

class Student {
    name: string;
    age: number;
    course: string;

    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails(): void {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + this.course);
    }

    introduce(): void {
        console.log("Hello, my name is " + this.name + ".");
    }
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter student name: ", (name: string) => {
    input.question("Enter student age: ", (ageInput: string) => {
        input.question("Enter student course: ", (course: string) => {
            const student = new Student(name, Number(ageInput), course);
            student.displayDetails();
            student.introduce();
            input.close();
        });
    });
});
