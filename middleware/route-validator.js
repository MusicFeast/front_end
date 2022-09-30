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
        if (dataDrawer.find(data=>data.to === route.path) && dataMenuProfile.find(data=>data.to === route.path)) {// console.log("both")
          dataDrawer.forEach(el => {el.active = false});
          dataDrawer.find(data=>data.to === route.path).active = true
          dataMenuProfile.forEach(el => {el.active = false});
          dataMenuProfile.find(data=>data.to === route.path).active = true

        } else if (dataDrawer.find(data=>data.to === route.path)) {// console.log("drawer")
          // disable menu profile elements
          dataMenuProfile.forEach(el => {el.active = false});
          // active drawer mobile elements
          dataDrawer.forEach(el => {el.active = false});
          dataDrawer.find(data=>data.to === route.path).active = true

        } else if (dataMenuProfile.find(data=>data.to === route.path)) {// console.log("menu")
          // disable drawer mobile elements
          dataDrawer.forEach(el => {el.active = false});
          // active menu profile elements
          dataMenuProfile.forEach(el => {el.active = false});
          dataMenuProfile.find(data=>data.to === route.path).active = true

        } else {// console.log("all")
          // disable all
          dataDrawer.forEach(el => {el.active = false});
          dataMenuProfile.forEach(el => {el.active = false});
        }
      }
      break;
    }
  }, 100);
}
