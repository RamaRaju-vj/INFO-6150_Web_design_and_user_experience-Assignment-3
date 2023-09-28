// JavaScript to toggle visibility of additional information rows
function addrecord1(){
  alert("Submitted");
}
function clickedimg(event){
  var a = event.parentElement.parentElement;
  var nextRow = a.nextElementSibling;
  if (nextRow && nextRow.classList.contains("dropDownTextArea")) {
    nextRow.style.display = nextRow.style.display === "none" ? "table-row" : "none";
}

}
document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("myTable");
  const additionalInfoRows = table.getElementsByClassName("dropDownTextArea");

  for (let i = 0; i < additionalInfoRows.length; i++) {
      additionalInfoRows[i].style.display = "none";
  }

  table.addEventListener("click", function (event) {
      if (event.target.tagName === "img") {
          const parentRow = event.target.closest("tr");
          const nextRow = parentRow.nextElementSibling;
          if (nextRow && nextRow.classList.contains("dropDownTextArea")) {
              nextRow.style.display = nextRow.style.display === "none" ? "table-row" : "none";
          }
      }

      // Check if any checkboxes are checked to enable/disable the submit button
      const checkboxes = table.querySelectorAll('input[type="checkbox"]');
      const submitButton = document.getElementById("button");

      const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);

      if (isChecked) {
          submitButton.removeAttribute("disabled");
          submitButton.style.backgroundColor="orange";
      } else {
          submitButton.setAttribute("disabled", true);
          submitButton.style.backgroundColor="rgb(244, 236, 236)";
      }
  });
  

});

var lastIndex =3;
  function addRecord() {
     var a = " this is test case";
     var table = document.getElementById("myTable");
     var tbody = document.getElementsByTagName("tbody")[0];
    var student = table.rows[5]?.firstElementChild?.nextElementSibling?.innerHTML || "New Student";
    
    // var lastIndex = table.rows.length-3;

     var trNode = document.createElement("tr");

     var tdCheckBoxNode = document.createElement("td");
     tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img onclick="clickedimg(this)" src="down.png" width="25px" />'

     var tdStudentNode = document.createElement("td");
     tdStudentNode.innerHTML = 'Student '+(++lastIndex)

     var tdAdvisorNode = document.createElement("td");
     tdAdvisorNode.innerHTML = 'Teacher '+(lastIndex)

     var tdAwardStatusNode = document.createElement("td");
     tdAwardStatusNode.innerHTML = 'Approved'

     var tdSemesterNode = document.createElement("td");
     tdSemesterNode.innerHTML = 'Fall'

     var tdTypeNode = document.createElement("td");
     tdTypeNode.innerHTML = 'TA'

     var tdBudgetNode = document.createElement("td");
     tdBudgetNode.innerHTML = 34567 +(lastIndex+11)

     var tdPercentageNode = document.createElement("td");
     tdPercentageNode.innerHTML = '100%'
     
     var tdEditNode = document.createElement("td");
     var editButton = document.createElement("button");
     editButton.textContent = 'Edit';
     editButton.addEventListener("click", function () {
       // Implement your edit functionality here
       // You can open a pop-up or perform any other editing action
       // For example, you can display a form to edit the row data
       alert('Edit button clicked for row ' + lastIndex);
     }); 

     
     var tdDeleteNode = document.createElement("td");
     var deleteButton = document.createElement("button");
     deleteButton.textContent = 'Delete';
     deleteButton.addEventListener("click", function() {
     
       trNode.remove(); 
   });

     tdEditNode.appendChild(editButton);
     tdDeleteNode.appendChild(deleteButton);

     trNode.appendChild(tdCheckBoxNode);
     trNode.appendChild(tdStudentNode);
     trNode.appendChild(tdAdvisorNode);
     trNode.appendChild(tdAwardStatusNode);
     trNode.appendChild(tdSemesterNode);
     trNode.appendChild(tdTypeNode);
     trNode.appendChild(tdBudgetNode);
     trNode.appendChild(tdPercentageNode);
    //  trNode.appendChild(tdDeleteNode); // Add the delete button
    //  trNode.appendChild(tdEditNode); // Add the edit button
     table.appendChild(trNode);


     table.addEventListener("click", function (event) {
      if (event.target.tagName === "IMG") {
          const parentRow = event.target.closest("tr");
          const nextRow = parentRow.nextElementSibling;
          if (nextRow && nextRow.classList.contains("dropDownTextArea")) {
              nextRow.style.display = nextRow.style.display === "none" ? "table-row" : "none";
          }
      }
  });
     
     
  }

 function onClickCheckBox(checkbox){
  var selectedRow = checkbox.parentElement.parentElement;
  if(checkbox.checked==true){
    selectedRow.style.backgroundColor="yellow";

  
    selectedRow.style.visibility = "visible";
    var tdDeleteNode = document.createElement("td");
     var deleteButton = document.createElement("button");
     deleteButton.textContent = 'Delete';
     var p = selectedRow.rowIndex;
     deleteButton.addEventListener("click", function() {
      alert('Do you want to delete student ' + p);
       selectedRow.remove(); 
       alert('Deleted student ' + p);
   });
   tdDeleteNode.appendChild(deleteButton);
   selectedRow.appendChild(tdDeleteNode); // Add the delete button

   var tdEditNode = document.createElement("td");
   var editButton = document.createElement("button");
   editButton.textContent = 'Edit';
   var p = selectedRow.rowIndex;
   editButton.addEventListener("click", function () {
     // Implement your edit functionality here
     // You can open a pop-up or perform any other editing action
     // For example, you can display a form to edit the row data
     prompt('Edit Details of Student ' + p);
   }); 

   tdEditNode.appendChild(editButton);
   selectedRow.appendChild(tdEditNode); // Add the edit button


  }
  else{
    selectedRow.style.backgroundColor="white";
    selectedRow.deleteCell(8);
    selectedRow.deleteCell(8);
  }
  console.log(checkbox);

 }