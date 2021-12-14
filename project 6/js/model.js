/*(place any of your 'data' related code here)*/

import { renderTable,clearRenderedTable } from "./view.js";


let visitors =[];

class Visitor{
    constructor(id,first,last,address,state,zip,phone,email,deleteButton){
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.first = first;
        this.last = last;
        this.address =address;
        this.state = state;
        this.zip = zip;
        this.deleteButton = deleteButton;
    }
}


function modelAddVisitor(visitor) {
    //adds new visitor object to your array
    visitors.push(visitor);
    
}
function modelDeleteVisitor(id) {
    //removes visitor object with given 'id' from array
    console.log(visitors);
    visitors.splice(id,1);
    clearRenderedTable();
    renderTable(document.getElementById("tableContainer"),visitors);
}

function findVisitorIndex(id) {
    //returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object
    $("table tr").click(function(){
        alert (this.rowIndex);
        return this.rowIndex;
    });

}
export{modelAddVisitor,modelDeleteVisitor,findVisitorIndex,Visitor,visitors,}