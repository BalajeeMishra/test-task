// dummy data of some students
const student_data = [
  {
    name: "Sam",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [90, 80, 80, 90, 80]
  },
  {
    name: "Niraj kumar",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [70, 90, 60, 50, 80]
  },
  {
    name: "sakar",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [70, 60, 80, 95, 95]
  },
  {
    name: "Tommy",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [60, 90, 90, 80, 80]
  },
  {
    name: "Tam",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [30, 50, 90, 80, 70]
  },
  {
    name: "shashi",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [90, 30, 95, 70, 75]
  },
  {
    name: "sumit",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [90, 80, 85, 60, 55]
  },
  {
    name: "gautam",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [80, 80, 95, 60, 75]
  },
  {
    name: "ankit",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [90, 50, 65, 80, 75]
  },
  {
    name: "amit",
    subject: ["Mathematics", "physics", "CS", "Chemistry", "English"],
    marks: [70, 60, 85, 30, 75]
  }
];

// function to display subjects and marks
function displayStudentDetail({ target }) {
  document.querySelector(".details").innerHTML = "";
  let heading = document.createElement("h1");

  heading.innerText = "Deatails of " + target.innerText;

  document.querySelector(".details").append(heading);

  let h1 = document.createElement("h1");
  let st_sub = student_data[target.id - 1]["subject"];
  let st_marks = student_data[target.id - 1]["marks"];

  h1.innerHTML = student_data[target.id - 1]["name"];

  let list_container = document.createElement("table");
  st_sub.map((sub, idx) => {
    let $tr = document.createElement("tr");
    let $td = document.createElement("td");

    let $span = document.createElement("span");
    $span.id = sub + idx;
    $span.style.display = "none";
    $span.style.float = "right";
    $span.innerText = st_marks[idx];

    $td.innerText = sub;
    $td.append($span);
    $td.addEventListener("click", (event) => {
      document.querySelector(`td > span#${sub + idx}`).style.display = "inline-block";
    });

    $tr.appendChild($td);
    list_container.appendChild($tr);
  });

  document.querySelector(".details").append(list_container);
}

// selecting table
const student = document.querySelector("#student_table");

// listing the student in table and adding eventlistener.
for (let i = 1; i <= student_data.length; i++) {
  let tableRow = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.id = i;
  td1.innerText = student_data[i - 1]["name"];
  td1.addEventListener("click", displayStudentDetail);
  tableRow.append(td1);
  student.append(tableRow);
}
