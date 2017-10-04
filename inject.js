var script = document.createElement('script');
     script.type = 'text/javascript';  
     script.textContent = `
     document.getelementsByClassName('compose').addEventListener("click", function() {document.getElementsByClassName('protonmail_signature_block-proton').setAttribute = ('style', 'display: none');} ); `;   
 
     document.head.appendChild(script); 
 
//function hidesig() { sig = document.getElementsByClassName('protonmail_signature_block-proton'); sig.parentNode.removeChild(sig); } document.getElementsByClassName('compose').onlick = function() { hidesig(); }

