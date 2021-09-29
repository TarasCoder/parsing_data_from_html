let elements = $("table tbody tr td");
let arrTime = [];
let arrDate = [];
let arrDream = [];

for (let i = 0; i < elements.length; i++) {
    if (i % 2 == 0) {
        let time = elements[i].innerText;
        let date = elements[i].innerText;
        console.log("Time is: " + time.substring(11, 19));
        console.log("Date is: " + date.substring(0, 10));
        arrTime.push(time.substring(11, 19))
        arrDate.push(date.substring(0, 10))
  } else if (i % 2 == 1) {
    let dream = elements[i].innerText;
    console.warn("Message is: " + dream);
    arrDream.push(dream)
  }

}

console.log(arrTime)
console.log(arrDate)
console.log(arrDream)

// creating dom elements
for (let e = 0; e < elements.length / 2; e++) {
  const div_dreamBlock = document.createElement("div");
  div_dreamBlock.classList.add("dream");

  const div_dreamDateTime = document.createElement("div");
  div_dreamDateTime.classList.add("dreamDateTime");
  
  const h3_dreamDate = document.createElement("h3");
  h3_dreamDate.classList.add("dream_date");
  h3_dreamDate.innerText = arrDate[e];

  const p_dreamTime = document.createElement("p");
  p_dreamTime.classList.add("dream_time");
  p_dreamTime.innerText = arrTime[e];
  
  const p_dreamText = document.createElement("p");
  p_dreamText.classList.add("dream_text");
  p_dreamText.innerText = arrDream[e]

  div_dreamDateTime.append(h3_dreamDate, p_dreamTime);
  div_dreamBlock.append(div_dreamDateTime);
  div_dreamBlock.append(p_dreamText);
  document.querySelector(".dreamsBlock").append(div_dreamBlock);
}
// end of creating dom elements

{
    /* <div class="dream">
          <div class="dreamDateTime">
          <h3 class="dream_date">June 13, 2021</h3>
          <p class="dream_time">7:35 am</p>
          </div>
          <p class="dream_text">about something end4</p>
      </div> */
  }


// let arr = [];
// let el = "";
// for (let i = 0; i < elements.length; i++) {
//   if (i % 2 == 0) {
//     let time = elements[i].innerText;
//     let date = elements[i].innerText;
//     console.log("Time is: " + time.substring(11, 19));
//     console.log("Date is: " + date.substring(0, 10));
//     el = `
//         <div class="dream">
//             <div class="dreamDateTime">
//                 <h3 class="dream_date">${date.substring(0, 10)}</h3>
//                 <p class="dream_time">${time.substring(11, 19)}</p>
//             </div>
//             <p class="dream_text">SOME TEXT</p>
//         </div>
//     `;
//     document.querySelector(".dreamsBlock").innerHTML = el;
//   } else if (i % 2 == 1) {
//     let dream = elements[i].innerText;
//     console.warn("Message is: " + dream);
//   }
// }

// console.log(elements)
// let time = "";
// let date = "";
// let dream = "";

// for (let i = 0; i < elements.length; i++) {
//     if (i % 2 == 0) {
//         time = elements[i].innerText;
//         date = elements[i].innerText;
//         console.log("Time is: " + time.substring(11, 19));
//         console.log("Date is: " + date.substring(0, 10));
//   } else if (i % 2 == 1) {
//     dream = elements[i].innerText;
//     console.warn("Message is: " + dream);
//   }

//   let obj = {
//       time: time.substring(11, 19),
//       date: date.substring(0, 10),
//       dream: dream
//     }
//   arr.push(obj)
// }
// console.log(arr)
