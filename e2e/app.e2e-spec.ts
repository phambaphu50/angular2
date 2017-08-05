import { ContactApplicationPage } from './app.po';

describe('contact-application App', () => {
  let page: ContactApplicationPage;

  beforeEach(() => {
    page = new ContactApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
