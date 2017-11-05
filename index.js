/* Name: Proton+ | Author: Sai Karthik <kskarthik@protonmail.com> | Licence: MPL v2  */

'use strict';

// change color of compose button
function colorCompose(){
	document.getElementsByClassName("compose")[0].style.backgroundColor = "#d11919";
    
          Replace();
}
setInterval(colorCompose, 5000);

// replace glyphicon with appropriate one 
function Replace() {
	let x = document.getElementsByClassName("fa-life-ring")[0];

         x.classList.add("fa-bug");	 
         x.classList.remove("fa-life-ring");
           
           mobileView();
}
function mobileView() {

    document.getElementsByClassName("headerSecuredMobile-compose")[0].getElementsByTagName('div')[0].style.backgroundColor = "#d11919";

         document.getElementsByTagName("footer")[0].style.position = "fixed";
}
/*disable protonmail signature [WIP]
function hideSig() {
	        let x = document.getElementsByClassName('squireIframe');
          x[0].style.display = 'none';
	
	let x = window.frames
     	
	 for (var i = 0; i <= x.length; i++) { 
         x[i].document.body.getElementsByClassName('protonmail_signature_block-proton')[0].innerHTML = " ";
	}
} */