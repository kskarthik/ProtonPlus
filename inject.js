let script = document.createElement('script');
     script.type = 'text/javascript';  
     script.textContent = `
      function Start() { 
         
         document.body.getElementsByClassName("compose").onclick = (function () { Hide(); });
         
         }; 
          
          Start();
     
     function Hide() { 

             let id = document.getElementById("pm_composer");
             let cl = getElementsByClassName("protonmail_signature_block-proton");
                id.cl.innerHTML=" "; // id.cl.setAttribute = ("style", "display: none");  
              };
  
        
          
         `;
      
       document.head.appendChild(script); 
 
//function hidesig() { sig = document.getElementsByClassName('protonmail_signature_block-proton'); sig.parentNode.removeChild(sig); } document.getElementsByClassName('compose').onlick = function() { hidesig(); }

