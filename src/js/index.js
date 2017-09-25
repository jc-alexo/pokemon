import ctrls from './ctrl/index';

const app = window.app = {};
app.controllers = {};
app.config = {
  name: 'Boilerplate Site'
};

ctrls.forEach((ctrl) => {
  app.controllers[ctrl.name] = ctrl;
  app.controllers[ctrl.name](app);
});
