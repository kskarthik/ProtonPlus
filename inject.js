let script = document.createElement('script');
     script.type = 'text/javascript';  
      script.textContent = `
      
     Start();
     
      function Start() { 
         
         document.body.getElementsByClassName("compose")[0].onclick = (function () { Hide(); });
         
         }; 
     
          function Hide() { 

             let id = document.getElementById("pm_composer");
               let cl = document.getElementsByClassName("protonmail_signature_block-proton");
                
                  id.cl[0].innerHTML = " "; 
                    cl[0].innerHTML=" ";              
};`;

    document.head.appendChild(script); 

