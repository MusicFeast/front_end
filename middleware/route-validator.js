export default function ({app, route}) {
  setTimeout(() => {
    // If current layout
    switch (app.router.app.$data.layoutName) {
      case 'default': {
        const layout = app.router.app.$children[app.router.app.$children.findIndex(data=>data._name === '<DefaultLayout>')];
        // If current route
        if (route.path !== '/profile') {
          const dataMenuProfile = layout.$refs.header.dataMenuProfile;
          dataMenuProfile.forEach(el => {el.active = false});
        } else {
          const dataDrawer = layout.$refs.header.$refs.menu;
          dataDrawer.dataDrawer.forEach(e => {e.active = false});
        }
        // switch (route.path) {
        //   case "/":       // target rutes
        //     layout.wrapperSpace = false;
        //   break;
        //   default:        // the rest
        //     layout.wrapperSpace = true;
        //   break;
        // }
      }
      break;
    }
  }, 100);
}
