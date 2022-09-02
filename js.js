function fIdadem() 
{
    var vnascto = document.getElementById("vData").value;
    const now = moment(new Date());
    vnascto = vnascto.value;
    console.log(vnascto);
    vnascto = vnascto[6]+vnascto[7]+vnascto[8]+vnascto[9]+"-"+vnascto[3]+vnascto[4]+"-"+vnascto[0]+vnascto[1];
    console.log(vnascto);
    const past = moment(vnascto);
    const duracao = moment.duration(now.diff(past));
    const idade = Math.floor(duracao.asYears());
    window.alert("Idade:"+idade);
 }
function fValidaEmail()
{
    var vemail = document.getElementById("mail").value;
    var re = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    if (!re.test(vemail) ) {
       window.alert("e-mail: "+vemail+" inválido");   
    } else {
        window.alert("e-mail: "+vemail+" OK!!");    
    }
    
}