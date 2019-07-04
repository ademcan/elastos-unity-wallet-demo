// import console = require("console");

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

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
