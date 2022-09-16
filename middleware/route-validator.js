export default function ({app, route}) {
  setTimeout(() => {
    // If current layout
    switch (app.router.app.$data.layoutName) {
      case 'default': {
        const layout = app.router.app.$children[2];
        // If current route
        switch (route.path) {
          case "/":       // rutas objetivo
            layout.wrapperSpace = false;
          break;
          default:        // el resto
            layout.wrapperSpace = true;
          break;
        }
      }
      break;
    }
  }, 100);
}
