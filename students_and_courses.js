var Student = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype.name = function(){
  return this.firstName + " " + this.lastName;
};

// Student.prototype.courses = function(){
//   return this.courses;
// };

Student.prototype.enroll = function(course){
  if(!include(this.courses, course)){
    this.courses.push(course)
    course.students.push(this)
  }
}

var include = function(array, obj) {
  for (var j = 0; j < array.length; j ++) {
    if (array[j] === obj) {
      return true;
    }
  }
  return false;
};

Student.prototype.courseLoad = function(){
  var result = {}
  for (var i = 0; i < this.courses.length; i++){
    debugger
    if (include(Object.keys(result), this.courses[i].dept)) {
      result[this.courses[i].dept] += this.courses[i].numCredits
    } else {
      result[this.courses[i].dept] = this.courses[i].numCredits
    }
  }
  return result
}

var Course = function(courseName, dept, numCredits){
  this.courseName = courseName;
  this.dept = dept;
  this.numCredits = numCredits;
  this.students = []
};

// Course.prototype.students = function(){
//   return this.students;
// }

Course.prototype.addStudent = function(student){
  student.enroll(this)
}



// var func = jeff.name();
//creates a new empty object
//runs the function, the new object is the 'this'
//returns the new object (doesn't need an excplicit return statement)
// sets the __proto__ of the new object to the Constructor function's prototype


student1 = new Student("Mark", "Uno")
student2 = new Student("Mark", "Dos")

course1 = new Course(8.04, "8", 12)
course2 = new Course(6.01, "6", 12)
course3 = new Course(8.06, "8", 6)

// console.log(students1.courses);

student1.enroll(course1);
// console.log(student1.courses);
// console.log(course1.students);
student1.enroll(course2);
// console.log(student1.courses);
student1.enroll(course3);
console.log(student1.courseLoad());