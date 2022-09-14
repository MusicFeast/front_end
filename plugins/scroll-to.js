export default (context, inject) => {
  const to = (id) => {
    const el = document.getElementById(id);
    if (el) {el.scrollIntoView(true)}
  }
  // Inject $scrollTo(to) in Vue, context and store.
  inject('scrollTo', to)
}
