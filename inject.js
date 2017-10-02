var script = document.createElement('script');
     script.type = 'text/javascript';  
     script.textContent = ' function hidesig() { sig = document.getElementsByClassName('protonmail_signature_block-proton'); sig.parentNode.removeChild(sig); } document.getElementsByClassName('compose').onlick = function() { hidesig(); };`;

document.body.appendChild(script);