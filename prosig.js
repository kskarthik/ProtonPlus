function prosig() {

document.getElementsByClassName("protonmail_signature_block-proton").style.display = 'hidden';

}

document.getElementsByClassName("compose").onClick = function() { prosig(); }