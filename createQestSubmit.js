function createQestSubmit(){
    console.log(document.getElementById('_price').value);
    contractPrice = document.getElementById('_price').value
    createQest(document.getElementById('_price').value,navi1,navi2,navi3);
}