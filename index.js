/* Name: Proton+ | Author: Sai Karthik <kskarthik@protonmail.com> | Licence: MPL v2  */

'use strict';

// change color of compose button
function colorCompose() {

	document.getElementsByClassName("compose")[0].style.backgroundColor = "#d11919";
        Replace();
}

setInterval(colorCompose, 3000); // all functions run at 3 second intervals

// replace glyphicon with appropriate one 
function Replace() {
	
	let x = document.getElementsByClassName("fa-life-ring")[0];

         x.classList.add("fa-bug");	 
         x.classList.remove("fa-life-ring");
         hideSig();
}

// remove protonmail signature
function hideSig() {
        
         x = document.getElementsByTagName("iframe")[0];
         y = document.getElementsByClassName("protonmail_signature_block-proton")[0];

         x.contentWindow.y.innerHTML = " ";

}
    
// change compose color on mobile site
let style = document.createElement("style"); 
        
           style.type = "text/css";
           style.textContent = ".headerSecuredMobile-compose {background-color: #d11919;}";
           
           document.body.appendChild(style);
           
           
