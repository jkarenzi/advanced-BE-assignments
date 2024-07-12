// Base class for all types of residences
class Residence {
    constructor(name, address, isOccupied = false) {
        this.name = name;
        this.address = address;
        this.isOccupied = isOccupied;
    }
}

// Class for dorm rooms, inherits from Residence
class DormRoom extends Residence {
    constructor(name, address, size, isOccupied = false) {
        super(name, address, isOccupied);
        this.size = size; // size in square footage
    }
}

// Class for apartments, inherits from Residence
class Apartment extends Residence {
    constructor(name, address, bedrooms, isOccupied = false) {
        super(name, address, isOccupied);
        this.bedrooms = bedrooms; // number of bedrooms
    }
}

// Class for students
class Student {
    constructor(name, studentID, gender, residence = null) {
        this.name = name;
        this.studentID = studentID;
        this.gender = gender;
        this.residence = residence; // reference to assigned residence
    }

    assignResidence(residence) {
        this.residence = residence;
        residence.isOccupied = true;
    }

    removeResidence() {
        if (this.residence) {
            this.residence.isOccupied = false;
            this.residence = null;
        }
    }
}

// Class for maintenance requests
class MaintenanceRequest {
    constructor(description, status = 'submitted', student, employee = null) {
        this.description = description;
        this.status = status; // submitted, in progress, completed
        this.student = student; // reference to the student who submitted the request
        this.employee = employee; // reference to the assigned employee
    }

    assignEmployee(employee) {
        this.employee = employee;
    }

    updateStatus(status) {
        this.status = status;
    }
}
