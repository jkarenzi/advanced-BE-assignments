class Residence {
    constructor(id, name, address, isOccupied) {
        if (new.target === Residence) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        this.id = id;
        this.name = name;
        this.address = address;
        this.isOccupied = isOccupied;
    }
}
  
// Dorm room
class DormRoom extends Residence {
    constructor(id, name, address, isOccupied, squareFootage) {
      super(id, name, address, isOccupied);
      this.squareFootage = squareFootage;
    }
}

// apartment
class Apartment extends Residence {
    constructor(id, name, address, isOccupied, numberOfBedrooms) {
      super(id, name, address, isOccupied);
      this.numberOfBedrooms = numberOfBedrooms;
    }
}

  // student
class Student {
constructor(id, name, studentID, gender, residence) {
    this.id = id;
    this.name = name;
    this.studentID = studentID;
    this.gender = gender;
    this.residence = residence;
}
}

//maintenance request
class MaintenanceRequest {
    constructor(id, description, status, student, assignedEmployee) {
      this.id = id;
      this.description = description;
      this.status = status; // 'submitted' | 'in progress' | 'completed'
      this.student = student;
      this.assignedEmployee = assignedEmployee;
    }
  }
  
// employee  
  class Employee {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }

const dorm = new DormRoom(1, "Dorm A", "123 University St", false, 300);
const apartment = new Apartment(2, "Apartment B", "456 University Ave", true, 3);
const student = new Student(1, "John Doe", "S123456", "Male", dorm);
const employee = new Employee(1, "Jane Smith");

const maintenanceRequest = new MaintenanceRequest(1, "Fix the heater", "submitted", student, employee);

console.log(dorm);
console.log(apartment);
console.log(student);
console.log(employee);
console.log(maintenanceRequest);
  
  
  