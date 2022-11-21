var AvatarName = document.getElementById('AvatarName')
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var place = document.getElementById('place');
var cp = document.getElementById('cp');

function editar(){
    AvatarName.disabled=false;
    email.disabled=false;
    phone.disabled=false;
    address.disabled=false;
    place.disabled=false;
    cp.disabled=false;
}

function save(){
    AvatarName.disabled=true;
    email.disabled=true;
    phone.disabled=true;
    address.disabled=true;
    place.disabled=true;
    cp.disabled=true;

}