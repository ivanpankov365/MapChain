// Получить токен
function getToken(email,password) {
    return new Promise((resolve,reject) => {
        let url = 'https://staging-api.naviaddress.com/api/v1.5/Sessions';
        let params = {
            email:email,
            password:password
        };

        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(params)
            })
            .then((res1) => {
                res1.json().then((res2) => resolve(res2.token));
            });
    });
}

function createNaviaddress(token, lat, lng) {
   // if (navigator.geolocation) {
   //     navigator.geolocation.getCurrentPosition(
   //         (position)=>{
   //             let coords = position.coords;
console.log('Creatre lat', lat);
    console.log('Creatre lng', lng)
                let url = 'https://staging-api.naviaddress.com/api/v1.5/addresses/';
                let body = {
                    lat: lat,
                    lng: lng,
                    address_type: "free",
                    default_lang: "ru"
                };

                fetch(url,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'auth-token': token
                        },
//				    mode:'no-cors',
                        method: 'POST',
                        body: JSON.stringify(body)
                    }).then((res1) => {
                    res1.json().then((res2) => {
                        acceptNaviaddress(token,res2.result.container, res2.result.naviaddress);
                    });
                });
     //      });

   // } else {
   //     alert("Геолокация не поддерживается вашим браузером");
   // }
}

// Подтверждаем навиадрес
function acceptNaviaddress(token,container,naviaddress) {
    let url = 'https://staging-api.naviaddress.com/api/v1.5/addresses/accept/'
        +container+'/'+naviaddress;
    let body = {};

    fetch(url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': token
            },
            method: "POST",
            body: JSON.stringify(body)
        }).then((res1) => {
        res1.json().then((res2) => {
            putNaviaddress(token, res2.result);
        });
    });
}

// Заполняем навиадрес данными
function putNaviaddress(token,data) {
    console.log(198,data);
    let container = data.container;
    let naviaddress = data.naviaddress;
    let url = 'https://staging-api.naviaddress.com/api/v1.5/addresses/'
        +container+'/'+naviaddress+'?lang=ru';
    let body = {
        name:nameQuest,
        description: descriptionOfStep
    };

    fetch(url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': token
            },
            method: "PUT",
            body: JSON.stringify(body)
        }).then((res1) => {
        res1.json().then((res2) => {
            console.log('res2',res2)

            saveNavi(res2);
            //naviResponse = res2.result;
            //console.log('res2.result',res2.result);
            //location.href = "get.html?container="+r.container+'&naviaddress='+r.naviaddress;
        });
    });
}

function saveNavi(res2) {
    step++


    naviResponse = res2.result;
    if (step == 1){
        firstlng = lng;
        firstlat = lat;
    }

    if (step == 2){
        console.log('step == 1');
        navi1 = '['+naviResponse.container+']'+naviResponse.naviaddress;
    }
    if (step == 3){
        console.log('step == 2');
        navi2 = '['+naviResponse.container+']'+naviResponse.naviaddress;
    }
    if (step == 4){
        console.log('step == 3');
        navi3 = '['+naviResponse.container+']'+naviResponse.naviaddress;
    }

}