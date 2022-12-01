var timestampContract = web3.eth.contract([{"inputs":[{"internalType":"bytes32","name":"data","type":"bytes32"}],"name":"addValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"timestamps","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"creator","type":"address"}],"stateMutability":"view","type":"function"}]);
var timestamp = timestampContract.new({
    from: web3.eth.accounts[0],
    data: '0x608060405234801561001057600080fd5b50610281806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063586e86a41461003b578063b587295814610057575b600080fd5b6100556004803603810190610050919061019b565b610088565b005b610071600480360381019061006c919061019b565b61011c565b60405161007f929190610222565b60405180910390f35b60405180604001604052804281526020013373ffffffffffffffffffffffffffffffffffffffff168152506000808381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050565b60006020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600080fd5b6000819050919050565b61017881610165565b811461018357600080fd5b50565b6000813590506101958161016f565b92915050565b6000602082840312156101b1576101b0610160565b5b60006101bf84828501610186565b91505092915050565b6000819050919050565b6101db816101c8565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061020c826101e1565b9050919050565b61021c81610201565b82525050565b600060408201905061023760008301856101d2565b6102446020830184610213565b939250505056fea26469706673582212203e78c3a076028fbf82afefb6846ab212b3f25680f1e26ddeaf2cef30aa78a2a064736f6c63430008110033',
    gas: '4700000'
  }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
})