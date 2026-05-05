// Create a JSON object
let student = {
  name: "SHivasnh",
  age: 21,
  course: "B.Tech"
};

// Display full JSON object
console.log("Original Object:", student);

// Display individual elements
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);

// Add a new attribute
student.college = "NIIT";
console.log("After Adding college:", student);

// Modify an attribute
student.age = 22;
console.log("After Modifying age:", student);

// Delete an attribute
delete student.course;
console.log("After Deleting course:", student);
