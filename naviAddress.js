/*
let token;

function auth(email, password){
    return new Promise((resolve,reject) => {
        console.log('auth');
        let url = 'https://staging-api.naviaddress.com/api/v1.5/Sessions';

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: password,
                type: "email",
                email: email
            })
        }).then(function (data) {
                console.log('Request success: ', data);
                return data.json();
            }).then(function (data) {
            //alert( JSON.stringify( data ) ) ;
            console.log('data: ', data);
            data = JSON.stringify(data);
            data = JSON.parse(data);
            token = data.token
            console.log('token: ', token);
            //createNaviaddress(token);
            resolve(data.token)
        })
    })

}

function createNaviaddress(token) {

    let url = 'https://staging-api.naviaddress.com/api/v1.5/addresses/';
    let body = {
        lat: '55',
        lng: '37',
        address_type: "free",
        default_lang: "ru"
    };

    fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'auth-token': token
            },
			//mode:'no-cors',
            method: 'POST',
            body: JSON.stringify(body)
        }).then(function(res1){
            console.log('createNaviaddress', res1);
            return res1.text();
            }).then(function (res2){
                console.log('Container ', res2.result.container);
                    acceptNaviaddress(token,res2.result.container, res2.result.naviaddress);
            });
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
        name:document.getElementById("description").value,
        description:'Создано программой Инвентаризатор: '+document.getElementById("description").value
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
            let r = res2.result;
            location.href = "get.html?container="+r.container+'&naviaddress='+r.naviaddress;
        });
    });
}*/
