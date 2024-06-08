
let Submit = document.getElementById('Submit');
let index = 0;
let tableRow;
let tableBody = document.getElementById('tableBody');

console.log (siteName,siteUrl,Submit)
function addInput(){
    let siteName = document.getElementById('siteName');
    let siteUrl = document.getElementById('siteUrl');
    let siteNameValue = siteName.value;
    let siteUrlValue = siteUrl.value;
    if(validate(siteUrlValue) === null){
        console.log(siteUrlValue);
        alert("URL is invalid. Add http or https");
        return;
    }
    index++;

    // let visitAnchor = document.createElement("a");
    // let deleteButton = document.createElement("button");
    // visitAnchor.href = siteUrlValue;
    tableRow = document.createElement("tr");
    // let indexTD = document.createElement("td");
    // let siteTD = document.createElement("td");
    // let visitTD = document.createElement("td");
    // let deleteTD = document.createElement("td");
    // function handleDelete(){

    // }
    tableRow.innerHTML=`
        <td>${index}</td>
        <td>${siteNameValue}</td>
        <td>
        <button class="  w-25 ligth ">
            <a href=${siteUrlValue} class="anchor-tag" target="_blank"><i class="fa-regular fa-eye"></i></a>        
        </button>
        </td>
        <td>
            <button class=" w-25 btn btn-danger" id="deleteBtn">
            <i class="fa-regular fa-trash-can"></i>
            </button>
        </td>
    `;
    
    tableBody.appendChild(tableRow);
    document.getElementById("deleteBtn").addEventListener("click", deleteRow);
    
}
function deleteRow() {
    tableBody.removeChild(tableRow);
}
function validate(url){
    let result = url.match(/^(?=.*(?:https?)).+$/);
    return result;
}