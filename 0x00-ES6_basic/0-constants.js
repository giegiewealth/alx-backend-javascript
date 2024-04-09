export function taskFirst() {
const task = 'I prefer const when I can.'; // Changed var to const
return task;
}

export function getLast() {
return 'is okay';
}

export function taskNext() {
let combination = 'But sometimes let '; // Changed var to let
combination += getLast(); // This is allowed with let since it's a reassignment

return combination;
}
