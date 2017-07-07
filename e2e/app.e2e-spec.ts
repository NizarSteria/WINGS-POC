import { WingsPocPage } from './app.po';

describe('wings-poc App', () => {
  let page: WingsPocPage;

  beforeEach(() => {
    page = new WingsPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
