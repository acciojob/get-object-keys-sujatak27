//your JS code here. If required.

// Define the student object with a name property
const student = {
  name: "Sujata"
};

// Add a method to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the getKeys() method
console.log(student.getKeys()); 