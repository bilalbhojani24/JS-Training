const today = new Date();
console.log(today);
// Get
console.log(today.getFullYear());
console.log(today.getMonth()); // Note : 0 - 11 (add +1)
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

// set
today.setFullYear(2030); // 2030
today.setMonth(10); // 0 -11
today.setDate(20);
today.setHours(20);
today.setMinutes(30);
today.setSeconds(290);
console.log(today);

// utils
console.log(today.toISOString()); // Read about ISO string
console.log(today.toUTCString()); // important
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
