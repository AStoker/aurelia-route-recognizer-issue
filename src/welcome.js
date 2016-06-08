export class Welcome {


  configureRouter(config, router) {
    config.map([
      { route: [''], name: 'welcome-test',       moduleId: 'welcome-test-1',       nav: true, title: 'Test' },
      { route: ['test'], name: 'welcome-test1',       moduleId: 'welcome-test-2',       nav: true, title: 'Test 1' },
    ]);

    this.router = router;
  }
}
