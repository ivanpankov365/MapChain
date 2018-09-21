function createQestSubmit(){
    console.log(document.getElementById('price').value);
    console.log(document.getElementById('steps').value);
    createQest(document.getElementById('price').value,document.getElementById('steps').value);
}