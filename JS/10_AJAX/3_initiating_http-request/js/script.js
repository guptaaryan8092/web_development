"use strict";

let httpRequest = new XMLHttpRequest();

let el = document.getElementById("abc");
el.onclick = function() {
    el.innerHTML = "This is some new content";
    el.style.color = "red";
    
    httpRequest.onreadystatechange = postAjaxFunction;
    httpRequest.open('POST', 'update_database.php');
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('email=anuj@internshala.com&id=4');
}


function postAjaxFunction() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = JSON.parse(httpRequest.responseText);
            alert(response.name + " - " + response.message);
        } else {
            alert('Something went wrong.');
        }
    }
}
