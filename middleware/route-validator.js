export default function ({app, route}) {
  setTimeout(() => {
    // If current layout
    switch (app.router.app.$data.layoutName) {
      case 'default': {
        const layout = app.router.app.$children[app.router.app.$children.findIndex(data=>data._name === '<DefaultLayout>')];
        // drawer and menu profile //
        if (route.path !== '/profile') {
          // disable menu profile elements
          const dataMenuProfile = layout.$refs.header.dataMenuProfile;
          dataMenuProfile.forEach(el => {el.active = false});
          // active drawer mobile element
          const dataDrawer = layout.$refs.header.dataLinks;
          dataDrawer.forEach(e => {e.active = false});
          dataDrawer[dataDrawer.findIndex(e=>e.to === route.path)].active = true
        } else {
          // disable drawer mobile element
          const dataDrawer = layout.$refs.header.dataLinks;
          dataDrawer.forEach(e => {e.active = false});
          // active drawer mobile element
          const dataMenuProfile = layout.$refs.header.dataMenuProfile;
          dataMenuProfile.forEach(el => {el.active = false});
          dataMenuProfile[dataMenuProfile.findIndex(e=>e.to === route.path)].active = true
        }
        // If current route
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
