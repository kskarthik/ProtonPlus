/* 
Name: Proton+ | Author: Sai Karthik | Licence: MPL v2 
*/

'use strict';

function colorCompose(){
	document.getElementsByClassName("compose")[0].style.backgroundColor = "#d11919";
    Replace();
}

 colorCompose();
 
function Replace() {
	let x = document.getElementsByClassName("fa-life-ring")[0];

         x.classList.add("fa-bug");	 
         x.classList.remove("fa-life-ring");
}
