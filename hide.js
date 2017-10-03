function hidesig() { 

      sig = document.getElementsByClassName('protonmail_signature_block-proton'); 
      sig.parentNode.removeChild(sig); 
} 

     document.getElementsByClassName('compose').onlick = function() { hidesig(); };

alert ('hide js loaded!')