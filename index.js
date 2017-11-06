/* Name: Proton+ | Author: Sai Karthik <kskarthik@protonmail.com> | Licence: MPL v2  */

'use strict';

// change color of compose button
function colorCompose(){
	document.getElementsByClassName("compose")[0].style.backgroundColor = "#d11919";
    
          Replace();
}
setInterval(colorCompose, 3000);

// replace glyphicon with appropriate one 
function Replace() {
	let x = document.getElementsByClassName("fa-life-ring")[0];

         x.classList.add("fa-bug");	 
         x.classList.remove("fa-life-ring");
         lockFooter();
}

// lock footer on mobile site
function lockFooter() {
    document.getElementsByTagName("footer")[0].style.position = "fixed";
    
}
    
// change compose color on mobile site
let style = document.createElement("style"); 
        
           style.type = "text/css";
           style.textContent = ".headerSecuredMobile-compose {background-color: #d11919;}";
           
           document.body.appendChild(style);
           
           
