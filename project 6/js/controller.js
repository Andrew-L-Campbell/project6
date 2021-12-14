import{displayAbout, displayCamping, displayFishing, displayVisitor, renderTable,showList,clearForm, cancel} from './view.js';
import{modelAddVisitor,modelDeleteVisitor,visitors} from './model.js';


document.getElementById("aboutClick").addEventListener("click", displayAbout);
document.getElementById("fishingClick").addEventListener("click", displayFishing);
document.getElementById("campingClick").addEventListener("click", displayCamping);
document.getElementById("visitorClick").addEventListener("click", loadVisitors);
document.getElementById("addVisitor").addEventListener("click", displayVisitor);
document.getElementById("checkVisitorButton").addEventListener("click", loadVisitors);
document.getElementById("cancelButton").addEventListener("click",cancel);

var rTable = document.getElementById("tableContainer");

//accessing button on row
$(document).on('click', 'button.deleteButton', function () { 
  var id = $(this).attr('id');
  var name = $(this).attr('name');
  let decision = confirm("Are you sure you want to delete: " + name);
  if(decision){
    modelDeleteVisitor(id);
  }

});

function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'renderTable' 
    renderTable(rTable, visitors);
    //calls view 'showTable'
    showList();  
 }
 
 function submitForm(visitor) {
     //called on form submit. Gets contents of form, creates visitor object, 
     //calls model 'modelAddVisitor' function
     modelAddVisitor(visitor);
     //calls view 'renderTable' 
     renderTable(rTable, visitors);
     //calls view 'showTable'
     showList();
 }
 
 function clearVisitor() {
   //called on 'click' of 'New Visitor' button 
   //calls view 'clearForm' to clear form contents
   clearForm();
 }

 export{submitForm, clearVisitor,loadVisitors};