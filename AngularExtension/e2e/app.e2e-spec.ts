import { AngularExtensionPage } from './app.po';

describe('angular-extension App', function() {
  let page: AngularExtensionPage;

  beforeEach(() => {
    page = new AngularExtensionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
