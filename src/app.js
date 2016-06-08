export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', '*details'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: ['child', 'child*details'],  name: 'child', moduleId: 'child', nav: true, title: 'Child' }
    ]);

    this.router = router;
  }
}
