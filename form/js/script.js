/*
document.getElementById('telefono').addEventListener('change',function (e){
    if(!parseInt(document.getElementById('telefono').value)){
        alert('solo números');
        document.getElementById('telefono').value='';
    }
});
*/
  /*
document.getElementById('telefono').addEventListener('keypress',function (e){        
    if(!parseInt(e.key)){
        alert('solo números');
        e.preventDefault();
    }
});
        */

function validar(){
    
    if(!parseInt(document.getElementById('telefono').value)){
        alert('solo números');
        document.getElementById('telefono').value='';
        return false;
    }    
    else{
        return true;
    }
}