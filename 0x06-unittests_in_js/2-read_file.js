const fs = require('fs');

/**
 * Counts the students in a CSV data file synchronously.
 * @param {string} dataPath - The path to the CSV file.
 */
const countStudents = (dataPath) => {
  try {
    // Read the file contents synchronously
    const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();

    // Split the content into lines
    const lines = fileContent.split('\n');

    // Handle the case where the file is empty or contains only headers
    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    // Extract the headers (field names)
    const headers = lines[0].split(',');

    // Initialize an object to store student groups
    const studentGroups = {};

    // Process each line (excluding the header)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip empty lines
      if (!line) continue;

      const studentData = line.split(',');

      // Extract the field (last column)
      const field = studentData[studentData.length - 1];

      // Extract the student's first name
      const firstName = studentData[0];

      // Initialize the field group if it does not exist
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      // Add the student's first name to the group
      studentGroups[field].push(firstName);
    }

    // Calculate the total number of students
    const totalStudents = Object.values(studentGroups).reduce((acc, group) => acc + group.length, 0);

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const [field, students] of Object.entries(studentGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

  } catch (error) {
    // Handle any errors that occur during file reading or processing
    console.error('Cannot load the database');
  }
};

// Export the countStudents function
module.exports = countStudents;
