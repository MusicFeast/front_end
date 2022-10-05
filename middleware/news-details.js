export default function ({app}) {
  setTimeout(() => {
    const layout = app.router.app.$children.find(data=>data._name === '<DefaultLayout>');
    const newsDetails = layout.$children[0].$children.find(data=>data._name === '<VMain>').$children[0];
    newsDetails.mountData();
  }, 100);
}
