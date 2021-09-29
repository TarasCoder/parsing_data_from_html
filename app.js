let count = $("table tbody tr td").length;
let elements = $("table tbody tr td");
for (let i = 0; i < count; i++) {
    if (i % 2 == 0){
        let time = elements[i].innerText;
        console.log("Time is: " + time)
    } else if (i % 2 == 1) {
        let message = elements[i].innerText;
        console.log("Message is: " + message)
    }
}
