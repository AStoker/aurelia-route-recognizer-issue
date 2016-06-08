export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: [''], name: 'child-test',       moduleId: 'child-test-1',       nav: true, title: 'Test' },
      { route: ['test'], name: 'child-test2',       moduleId: 'child-test-2',       nav: true, title: 'Test2' },
    ]);

    this.router = router;
  }
}
