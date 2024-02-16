function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
let student1 = new Student();
let tudent2 = new Student();

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		console.log("Error: Student has been expelled.");
		return;
	}
	this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) {
		return 0;
	}
	return this.marks.reduce((acc, curr) => acc + curr) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}