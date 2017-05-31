import { PwiangularPage } from './app.po';

describe('pwiangular App', () => {
  let page: PwiangularPage;

  beforeEach(() => {
    page = new PwiangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
