function add(){
    var a= document.getElementById('no1').value;
    var b= document.getElementById('no2').value;
    var value= Number(a) + Number(b)
    
    document.getElementById('guru').innerHTML=value
}