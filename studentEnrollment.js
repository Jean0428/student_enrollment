// Initialize arrays for each subject
const DSA = [];
const PL = [];
const Networks = [];

// Function to display currently enrolled students in a subject
function displayStudents(subject) {
    if (subject.length === 0) {
        console.log("No students enrolled yet.");
    } else {
        subject.forEach(student => console.log(student));
    }
}

// Main enrollment function
function enrollmentSystem() {
    while (true) {
        // Step 1: Select a subject
        const subjectChoice = prompt("Select a subject:\n1. DSA\n2. PL\n3. Networks\nType 'exit' to finish.");
        
        if (subjectChoice === "exit") {
            // Exit and display enrolled students for each subject
            console.log("\nEnrollment Summary:");
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            break;
        }

        let selectedSubject;
        let subjectName;

        // Determine selected subject based on user input
        switch (subjectChoice) {
            case "1":
                selectedSubject = DSA;
                subjectName = "DSA";
                break;
            case "2":
                selectedSubject = PL;
                subjectName = "PL";
                break;
            case "3":
                selectedSubject = Networks;
                subjectName = "Networks";
                break;
            default:
                console.log("Invalid choice. Please select a valid option.");
                continue;
        }

        // Step 2: Select an operation
        const operationChoice = prompt(`You selected ${subjectName}.\nChoose an operation:\nA. Enroll a student\nB. Unenroll a student\nC. Select another subject\nD. Exit`).toUpperCase();

        if (operationChoice === "A") {
            // Enroll a student
            const studentName = prompt("Enter the name of the student to enroll:");
            selectedSubject.push(studentName);
            console.log(`${studentName} has been enrolled in ${subjectName}.`);

        } else if (operationChoice === "B") {
            // Unenroll a student
            console.log(`Currently enrolled students in ${subjectName}:`);
            displayStudents(selectedSubject);
            const studentName = prompt("Enter the name of the student to unenroll:");
            
            const index = selectedSubject.indexOf(studentName);
            if (index !== -1) {
                selectedSubject.splice(index, 1);
                console.log(`${studentName} has been unenrolled from ${subjectName}.`);
            } else {
                console.log(`${studentName} is not enrolled in ${subjectName}.`);
            }

        } else if (operationChoice === "C") {
            // Select another subject (loop back to subject selection)
            continue;

        } else if (operationChoice === "D") {
            // Exit and display final enrollment summary
            console.log("\nExiting the enrollment system.");
            console.log("Final Enrollment:");
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            break;

        } else {
            console.log("Invalid choice. Please select a valid option.");
        }
    }
}

// Run the enrollment system
enrollmentSystem();
