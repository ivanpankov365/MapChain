let naviAdresses;

function nextStep(lat, lng){
console.log('nextStep', lat);
    console.log('nextStep', lng);

    getToken(email,password).then((token)=>{
        createNaviaddress(token);
    });
}