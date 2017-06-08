import { FutsalAppPage } from './app.po';

describe('futsal-app App', () => {
  let page: FutsalAppPage;

  beforeEach(() => {
    page = new FutsalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
