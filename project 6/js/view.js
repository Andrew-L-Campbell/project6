
import { onAfter } from "./validation.js";


let ab = document.getElementById("about");
let fi = document.getElementById("fishing");
let ca = document.getElementById("camping");
let vi = document.getElementById("visitor");
let ta = document.getElementById("table");
let tb = document.getElementById("table");
let  table = document.getElementById("tableContainer");

function displayAbout(){
    clearRenderedTable();
    ab.style.display = "block";
    fi.style.display = "none";
    ca.style.display = "none";
    vi.style.display = "none";
    ta.style.display = "none";
    window.scrollTo(0, 0);
}

function displayFishing(){
    clearRenderedTable();
    ab.style.display = "none";
    fi.style.display = "grid";
    ca.style.display = "none";
    vi.style.display = "none";
    ta.style.display = "none";
    window.scrollTo(0, 0);
}

function displayCamping(){
    clearRenderedTable();
    ab.style.display = "none";
    fi.style.display = "none";
    ca.style.display = "grid";
    vi.style.display = "none";
    ta.style.display = "none";
    window.scrollTo(0, 0);
}

function displayVisitor(){
    clearRenderedTable();
    ta.style.display = "none";
    ab.style.display = "none";
    fi.style.display = "none";
    ca.style.display = "none";
    vi.style.display = "block";
    
    window.scrollTo(0, 0);
}
function displayTable(){
    ab.style.display = "none";
    fi.style.display = "none";
    ca.style.display = "none";
    vi.style.display = "none";
    ta.style.display = "grid";
    
    window.scrollTo(0, 0);
}

checkbox.addEventListener('change' , () =>{
    document.body.classList.toggle('theme');
})

function renderTable(containerId, visitors) {
    //renders table from global 'visitors' object array

    for(let i = 0; i < visitors.length; i++){
    
        var row = `<tr>
                            <td>${visitors[i].first+" "+ visitors[i].last}</td>
                            <td>${visitors[i].address+", "+visitors[i].state+", "+visitors[i].zip}</td>
                            <td>${visitors[i].phone}</td>
                            <td>${visitors[i].email}</td>
                            <td>${visitors[i].id}</td>
                            <td> <button class='deleteButton' type='button' id='${visitors[i].id}' name = '${visitors[i].first + ' ' + visitors[i].last}' > Delete </button> </td>   
                            
                  </tr>`
              
        containerId.innerHTML += row
        console.log(visitors);
    }
}


function clearRenderedTable(){

    while(table.rows.length > 1) {
        table.deleteRow(1);
      }
}

function showList() {
    //shows table

    vi.style.display = "none";
    tb.style.display = "grid";
    ta.style.display = "grid";
    ab.style.display = "none";
    fi.style.display = "none";
    ca.style.display = "none";
    
}
function showForm() {
    //shows form
    ta.style.display = "none";
    ab.style.display = "none";
    fi.style.display = "none";
    ca.style.display = "none";
    vi.style.display = "grid";

}
    
function clearForm() {
    //clears values on inputs so next time form is loaded they don't have old content
    document.getElementById("Form").reset();
}
function cancel(){

    let confirmAction = confirm("Are you sure to cancel adding a visitor?");
        if (confirmAction) {
          alert("Cancelled");
          document.getElementById("Form").reset();
          showList();
        } 
        onAfter();
}


export{displayAbout, displayVisitor, displayFishing, displayCamping,renderTable,showList,showForm,clearForm,displayTable,cancel, clearRenderedTable};