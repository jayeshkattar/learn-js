function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.login = () => {
  console.log(this.name, "logged in");
};
Student.prototype.logout = () => {
  console.log(this.name, "logged out");
};

function Monitor(...args) {
  Student.apply(this, args);
  this.role = "monitor";
}
Monitor.prototype = Object.create(Student.prototype);
Monitor.prototype.deleteStudent = (stud) => {
  students = students.filter((s) => {
    return s.grade != stud.grade;
  });
};

const stud1 = new Student("adhyayan", "class IV");
const stud2 = new Student("shivank", "class V");
const stud3 = new Student("sarthak", "class III");
const monitor = new Monitor("samridh", "prep");
students = [stud1, stud2, stud3, monitor];
monitor.deleteStudent(stud2);
console.log(students);