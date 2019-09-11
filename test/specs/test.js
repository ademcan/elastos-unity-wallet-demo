const checkWord = require('check-word');
const words = checkWord('en');

const getBtnElement = async (name)=>{
  return await $(`~btn:${name}`);
}

const getTxtElement = async (name)=>{
    return await $(`~txt:${name}`);
}

describe('Wallet Bridge Tests', () => {
    it('calls the GenerateMnemonic bridge', async()=>{
        let btn = await getBtnElement('GenerateMnemonic');
        await btn.click();
        let txtComponent = await getTxtElement('Result');
        let txt = await txtComponent.getText();
        // the bridge returns the mnemonic
        const mnemonics = txt.split(" ");
        expect(mnemonics.length).toEqual(12);
        mnemonics.forEach(element => {
            expect(words.check(element)).toEqual(true);
        });
        done();
    });

    // it('calls the CreateWallet bridge', async()=>{
    //     await getBtnElement('CreateWallet')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt).toEqual('success');
    // });

    // it('calls the ImportWalletWithMnemonic bridge', async()=>{
    //     await getBtnElement('ImportWallet')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt).toEqual('success');
    // });

    // it('calls the CreateAddress bridge', async()=>{
    //     await getBtnElement('CreateAddress')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt.length).toEqual(34);
    //     expect(txt[0]).toEqual("E");
    // });

    // it('calls the GetBalanceInfo bridge', async()=>{
    //     await getBtnElement('GetBalanceInfo')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt).toContain('AssetID');
    //     expect(txt).toContain('BalanceInfo');
    // });

    // it('calls the ExportWalletWithMnemonic bridge', async()=>{
    //     await getBtnElement('exportClicked')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     const mnemonics = txt.split(" ");
    //     expect(mnemonics.length).toEqual(12);
    //     mnemonics.forEach(element => {
    //         expect(words.check(element)).toEqual(true);
    //     });
    // });

    // it('calls the ChangePassword bridge', async()=>{
    //     await getBtnElement('ChangePassword')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt).toEqual('success');
    // });

    // it('calls the GetMultiSignPubKeyWithMnemonic bridge', async()=>{
    //     await getBtnElement('GetMultiSignPubKeyWithMnemonic')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt.length).toEqual(66);
    //     expect(txt.substr(0, 2)).toEqual('03');
    // });

    // it('calls the GetPublicKey bridge', async()=>{
    //     await getBtnElement('GetPublicKey')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt.length).toEqual(66);
    //     expect(txt.substr(0, 2)).toEqual('03');
    // });

    // it('calls the GetSupportedChains bridge', async()=>{
    //     await getBtnElement('GetSupportedChains')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt).toEqual('"[ELA, IdChain]"');
    // });

    // it('calls the IsAddressValid bridge', async()=>{
    //     await getBtnElement('IsAddressValid')
    //     .then((elem) => elem.click())
    //     let txtComponent = await getTxtElement('Result');
    //     let txt = await txtComponent.getText();
    //     expect(txt).toEqual('True');
    // });
});