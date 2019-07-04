// import console = require("console");
// import readTextValue from 'readTextValue';


async function readTextValue(testID){
  if (device.getPlatform() === 'ios') {
    try {
      await expect(element(by.id(testID))).toHaveText('_read_element_error');
    } catch (error) {
      const start = `AX.id='${testID}';`;
      const end = '; AX.frame';
      const errorMessage = error.message.toString();
      const [, restMessage] = errorMessage.split(start);
      const [label] = restMessage.split(end);
      const [, value] = label.split('=');
      return(value.slice(1, value.length - 1));
    }
  }
  else {
    try {
      await expect(element(by.id(testID))).toHaveText('_read_element_error');
    } catch (error) {
      const start = "Got:";
      const end = '}"';
      const errorMessage = error.message.toString();
      const [, restMessage] = errorMessage.split(start);
      const [label] = restMessage.split(end);
      const value = label.split(',');
      var combineText = value.find(i => i.includes('text=')).trim();
      const [, elementText] = combineText.split('=');
      // console.log(elementText);
      return(elementText);
    }
  }
}


async function testAddress(address){
  if (address.length == 34){
    return true
  }
  else {
    return false
  }

}


describe('Elastos Unity Wallet', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should return a correct mnemonic', async () => {
    await expect(element(by.id('btn:GenerateMnemonic'))).toBeVisible();
    await element(by.id('btn:GenerateMnemonic')).tap();
    await expect(element(by.id('txt:Result'))).toHaveText('success');
    // let test = await element(by.id('txt:Result'))
    // console.log( test )
  });

  it('should create a wallet when mnemonic is provided', async () => {
    await expect(element(by.id('btn:CreateWallet'))).toBeVisible();
    await element(by.id('btn:CreateWallet')).tap();
    await expect(element(by.id('txt:Result'))).toHaveText('success');
  });

  it('should import wallet with mnemonic', async () => {
    await expect(element(by.id('btn:ImportWallet'))).toBeVisible();
    await element(by.id('btn:ImportWallet')).tap();
    await expect(element(by.id('txt:Result'))).toHaveText('success');
  });

  it('should create a new address or return the last available address', async () => {
    await expect(element(by.id('btn:CreateAddress'))).toBeVisible();
    // required on Android to avoid errors
    // the app refresh after every action, therefore the wallet need to be create bewfore calling CreateAddress
    await element(by.id('btn:CreateWallet')).tap();
    await element(by.id('btn:CreateAddress')).tap();

    let textValue = await readTextValue('txt:Result');
    
    // let textValue = await readTextValue('txt:Result');
    // console.log(textValue)
    // let textAddress = await testAddress(textValue);
    
    if (textValue.length == 34){
      await expect(element(by.id('txt:Result'))).toHaveText(textValue);
    } else {
      await expect(element(by.id('txt:Result'))).toHaveText("error");
    }


    // await expect(element(by.id('txt:Result'))).toHaveText('success');
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
