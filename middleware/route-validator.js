export default function ({app, route}) {
  setTimeout(() => {
    // If current layout
    switch (app.router.app.$data.layoutName) {
      case 'default': {
        const layout = app.router.app.$children[app.router.app.$children.findIndex(data=>data._name === '<DefaultLayout>')];
        // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
        const dataMenuProfile = layout.$refs.header.dataMenuProfile;
        const dataDrawer = layout.$refs.header.dataLinks;
        // If current route
        if (dataDrawer.find(e=>e.to === route.path)) {
          // disable menu profile elements
          dataMenuProfile.forEach(el => {el.active = false});
          // active drawer mobile elements
          dataDrawer.forEach(e => {e.active = false});
          dataDrawer[dataDrawer.findIndex(e=>e.to === route.path)].active = true
        } else if (dataMenuProfile.find(e=>e.to === route.path)) {
          // disable drawer mobile elements
          dataDrawer.forEach(e => {e.active = false});
          // active menu profile elements
          dataMenuProfile.forEach(el => {el.active = false});
          dataMenuProfile[dataMenuProfile.findIndex(e=>e.to === route.path)].active = true
        } else {
          // disable all
          dataDrawer.forEach(e => {e.active = false});
          dataMenuProfile.forEach(el => {el.active = false});
        }
      }
      break;
    }
  }, 100);
}
