const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {string} dataPath - The path to the CSV file.
 * @returns {Promise} - A promise that resolves when the data is processed.
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      if (data) {
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          if (studentRecord.length < dbFieldNames.length) {
            continue; // Skip incomplete or empty lines
          }
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => pre + cur.length,
          0
        );
        console.log(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group.map((student) => student.firstname).join(', ');
          console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
        }

        resolve();
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  });
};

module.exports = countStudents;
