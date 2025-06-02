let huruf = "A"; 
const vokal = ['A', 'I', 'U', 'E', 'O'];

if (vokal.includes(huruf.toUpperCase())) {
    console.log(`${huruf} adalah huruf Vokal`);
} else {
    console.log(`${huruf} adalah huruf Konsonan`);
}