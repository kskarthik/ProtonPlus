//document.body.textContent = ""


function prosig() {

document.getElementsByClassName("protonmail_signature_block-proton").style.display = 'none';

}

document.getElementsByClassName("compose").onclick = function() { prosig(); }