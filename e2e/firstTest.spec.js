// import console = require("console");

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('btn:GenerateMnemonic'))).toBeVisible();
    await element(by.id('btn:GenerateMnemonic')).tap();
    await expect(element(by.id('txt:Result'))).toHaveText('success');
    // let test = await element(by.id('txt:Result'))
    // console.log( test )
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
