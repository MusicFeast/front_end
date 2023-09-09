<template>
  <v-main id="comunity-layout">
    <ComunitySideBar></ComunitySideBar>
    <ComunityDrawer></ComunityDrawer>

    <section>
      <ComunityHeader></ComunityHeader>
      <ComunityChat></ComunityChat>
    </section>
  </v-main>
</template>

<script>
export default {
  name: "ComunityLayout",
}
</script>

<style lang="scss">
#comunity-layout {
  --side-bar-width: 70px;
  --header-height: 56px;
  --chat-height: 800px;
  --primary: #ff462e;
  --secondary: #2B2D33;
  --body: #4B4F59;
  --drawer: #46484F;
  --title: #7B7C81;
  --label: #C5C7CF;
  --responded: #C3C3C7;
  --input: #363940;
  

  isolation: isolate;
  position: relative;
  background-color: var(--body);
  padding-left: var(--side-bar-width) !important;
  height: var(--chat-height);

  
  ::-webkit-scrollbar { background-color: var(--secondary) }
  
  .v-main__wrap {
    display: flex;


    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>
