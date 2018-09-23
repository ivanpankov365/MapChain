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
            //let r = res2.result;
            //location.href = "get.html?container="+r.container+'&naviaddress='+r.naviaddress;
        });
    });
}