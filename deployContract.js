

function createContract(){
    //return web3.eth.contract([{"constant":true,"inputs":[],"name":"Rating_game","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"current_balance_player","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"current_step","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"update_step","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"stopGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"add_balance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"take_deposit_player","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"Game_time","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"current_amount_owner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"take_amount_owner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"joinGame","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"status_game","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_price","type":"uint256"},{"name":"_steps","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
    return web3.eth.contract([{"constant":true,"inputs":[],"name":"Rating_game","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"current_balance_player","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"current_step","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_task","type":"string"}],"name":"AddTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"update_step","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"stopGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"add_balance","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"take_deposit_player","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"Game_time","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"current_amount_owner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Task","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"take_amount_owner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"joinGame","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"status_game","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_price","type":"uint256"},{"name":"_task1","type":"string"},{"name":"_task2","type":"string"},{"name":"_task3","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);

}

function deployContract(contract, _price, _task1, _task2, _task3) {
    return contract.new(
        _price,
        _task1,
        _task2,
        _task3,
        {
            from: web3.eth.accounts[0],
            data: '0x608060405234801561001057600080fd5b506040516109ba3803806109ba833981016040908152815160208084015192840151606085015160006003818155600482905560018054600160a860020a0319163317905560028690556005558052600a8352938501805193959094918101939101916100a1917f13da86008ba1c6922daee3e07db95305ef49ebced9f5467a0b8613fcc6b343e391860190610132565b506001600052600a602090815282516100df917fbbc70db1b6c7afd11e79c0fb0051300458f1a3acb8ee9789d9b6b26c61ad9bc79190850190610132565b506002600052600a6020908152815161011d917fbff4442b8ed600beeb8e26b1279a0f0d14c6edfaec26d968ee13c86f7d4c2ba89190840190610132565b505060006006819055600755506101cd915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017357805160ff19168380011785556101a0565b828001600101855582156101a0579182015b828111156101a0578251825591602001919060010190610185565b506101ac9291506101b0565b5090565b6101ca91905b808211156101ac57600081556001016101b6565b90565b6107de806101dc6000396000f3006080604052600436106100cf5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632b0579df81146100d45780632d4c5ab9146100fb57806349613c171461011057806349d5540f146101255780634ec0bcf41461018057806383bd72ba146101955780638d98d69d146101aa57806390278ea3146101b25780639e5ef270146101c7578063a7ded5d2146101dc578063b94e0505146101f1578063c92499c61461027b578063d4f77b1c14610290578063e3c057fa14610298575b600080fd5b3480156100e057600080fd5b506100e96102c1565b60408051918252519081900360200190f35b34801561010757600080fd5b506100e96102c8565b34801561011c57600080fd5b506100e96102ce565b34801561013157600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261017e9436949293602493928401919081908401838280828437509497506102d49650505050505050565b005b34801561018c57600080fd5b5061017e610331565b3480156101a157600080fd5b5061017e6103a0565b61017e61042c565b3480156101be57600080fd5b5061017e610493565b3480156101d357600080fd5b506100e96104e0565b3480156101e857600080fd5b506100e961050a565b3480156101fd57600080fd5b50610206610510565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610240578181015183820152602001610228565b50505050905090810190601f16801561026d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561028757600080fd5b5061017e6105ce565b61017e610638565b3480156102a457600080fd5b506102ad6106da565b604080519115158252519081900360200190f35b6007545b90565b60035490565b60065490565b600154600160a060020a031633146102eb57600080fd5b60015460a060020a900460ff161561030257600080fd5b6005546000908152600a6020908152604090912082516103249284019061071a565b5050600580546001019055565b600054600160a060020a0316331461034857600080fd5b60015460a060020a900460ff16151561036057600080fd5b6005546006541061037057600080fd5b6002546003541161038057600080fd5b600254600480548201905560038054919091039055600680546001019055565b60008054600160a060020a031633146103b857600080fd5b60015460a060020a900460ff1615156103d057600080fd5b60006003541115610402575060008054600160a060020a03168152600b60205260408120600380548254018255919091555b504260095560006006556001805474ff000000000000000000000000000000000000000019169055565b600054600160a060020a0316331461044357600080fd5b6001805460a060020a900460ff1615151461045d57600080fd5b6000341161046a57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916331790556003805434019055565b600061049e336106ea565b905060008111156104dd57604051339082156108fc029083906000818181858888f193505050501580156104d6573d6000803e3d6000fd5b5060006003555b50565b6001805460009160a060020a90910460ff16151514156104ff57426009555b506008546009540390565b60045490565b6001805460609160a060020a90910460ff1615151461052e57600080fd5b6006546000908152600a602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b5050505050905090565b600154600160a060020a031633146105e557600080fd5b6004546000106105f457600080fd5b600154600454604051600160a060020a039092169181156108fc0291906000818181858888f19350505050158015610630573d6000803e3d6000fd5b506000600455565b600254341161064657600080fd5b60015460a060020a900460ff161561065d57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff191633178082556001805474ff0000000000000000000000000000000000000000191660a060020a178155346003556006839055600780549091019055426008556009919091556106cf90600160a060020a03166106ea565b600380549091019055565b60015460a060020a900460ff1690565b600160a060020a0381166000908152600b6020526040812080548210156107145780546000825591505b50919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061075b57805160ff1916838001178555610788565b82800160010185558215610788579182015b8281111561078857825182559160200191906001019061076d565b50610794929150610798565b5090565b6102c591905b80821115610794576000815560010161079e5600a165627a7a72305820a5135f4a70f5d172f13d088e73e9bb4ea6c3520435da5cb18df4947fad7df8e80029',
            gas: '4700000'
        }, function (e, contract){
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                totalDescription =  document.getElementById('description_of_Quest').value;
                console.log('post')
                let urlJSON = 'http://192.168.43.227:3000/contract';
                let params = '{' +
                    '"id": "'+id+'",' +
                    '"address": "https://rinkeby.etherscan.io/address/'+contract.address+'",' +
                    '"price": "'+contractPrice+'",' +
                    '"lat": "'+firstlat+'",' +
                    '"long": "' + firstlng+ '",' +
                    '"description": "' +totalDescription+'"' +
                    '}';
                console.log(params)
                fetch(urlJSON,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                        body: params
                    })
                    .then((res1) => {
                        console.log('res1.token', res1);
                        res1.text().then((res2) => {
                            resolve(res2);
                            console.log('res2.token', res2);
                            id = id +5;
                        });
                    });
            }
        }
    )
}

function createQest(_price, _task1, _task2, _task3){
    let mapchainContract = createContract();
    let mapchain = deployContract(mapchainContract,  _price, _task1, _task2, _task3);
    let contractAddress = mapchain.address;
    console.log('ADDRESS');
    console.log(contractAddress);
}

