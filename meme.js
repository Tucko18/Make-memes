function contar(){
    let txt1 = document.getElementById ('fala1')
    let txt2 = document.getElementById ('fala2')
    let res1 = document.getElementById ('res1')
    let res2 = document.getElementById ('res2')
    if (txt1.value.length == 0 || txt2.value.length == 0 ){
        window.alert ('ERRO escreva as informações')
} else{
    let t1 = Object(txt1.value)
    let t2 = Object(txt2.value)
    res1.innerHTML = `${t1}`
    res2.innerHTML = `${t2}`


}
}