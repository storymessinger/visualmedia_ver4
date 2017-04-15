import { VmlVer4Page } from './app.po';

describe('vml-ver4 App', () => {
  let page: VmlVer4Page;

  beforeEach(() => {
    page = new VmlVer4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
