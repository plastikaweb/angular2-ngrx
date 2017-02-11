import { Angular2NgrxPage } from './app.po';

describe('angular2-ngrx App', function() {
  let page: Angular2NgrxPage;

  beforeEach(() => {
    page = new Angular2NgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
