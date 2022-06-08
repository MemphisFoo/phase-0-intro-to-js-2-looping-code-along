// Code your solutions in this file

function writeCards(kids, event) {
    let child = [];
    for (let i = 0; i < kids.length; i++) {
        child.push(`Thank you, ${kids[i]}, for the wonderful ${event} gift!`);
}
return child;
};

function countDown() {
    let decrease = 10
    while (decrease > -1) {
        console.log(decrease--)};
}