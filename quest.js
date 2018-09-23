let naviAdresses;

function nextStep(lat, lng){
console.log('nextStep', lat);
console.log('nextStep', lng);

    getToken(email,password).then((token)=>{
        createNaviaddress(token, lat, lng);
    });

    step++
    nameQuest = document.getElementById('nameQuest').value;
    descriptionOfStep = document.getElementById('description_of_step').value;
}