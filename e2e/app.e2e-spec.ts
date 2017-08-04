import { KuveraAppPage } from './app.po';

describe('kuvera-app App', () => {
  let page: KuveraAppPage;

  beforeEach(() => {
    page = new KuveraAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
