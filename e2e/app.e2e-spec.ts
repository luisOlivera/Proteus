import { ProteusPage } from './app.po';

describe('proteus App', () => {
  let page: ProteusPage;

  beforeEach(() => {
    page = new ProteusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
