interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
  firstName: 'Mohammed',
  lastName: 'Ali',
  age: 21,
  location: 'France',
};

const student2: Student = {
  firstName: 'Adam',
  lastName: 'Salim',
  age: 24,
  location: 'Nigeria',
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const thead = table.createTHead();
const tbody = table.createTBody();
const rowHead = thead.insertRow();
['first name', 'last name', 'age', 'location'].map((text) => {
  const cell = rowHead.insertCell();
  cell.innerHTML = text;
  return cell;
});

studentsList.forEach((student) => {
  const row = tbody.insertRow();

  [student.firstName, student.lastName, student.age, student.location].map((text) => {
    const cell = row.insertCell();
    cell.innerHTML = text.toString();
    return cell;
  });
});
document.body.appendChild(table);
