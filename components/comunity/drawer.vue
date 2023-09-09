<template>
  <v-navigation-drawer
    id="comunity__drawer"
    v-model="model"
  >
    <div id="comunity__drawer-header" class="d-flex align-center" style="gap: 10px">
      <avatar-tier
        :src="testImage"
        sizes="45"
        tier="4"
        class="flex-grow-0"
      ></avatar-tier>

      <h6 class="mb-0">
        Artist Name
        <v-icon color="#fff">mdi-menu-down</v-icon>
      </h6>
    </div>


    <v-list expand nav>
      <v-list-group
        v-for="item in items" :key="item.title"
        v-model="item.active"
        :prepend-icon="item.active ? 'mdi-menu-up' : 'mdi-menu-down'"
        append-icon=""
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(child, i2) in item.items" :key="i2"
          dense
          flat
          :class="{active: child.active}"
          @click="items.forEach(e => e.items.forEach(e => e.active = false)); child.active = true"
        >
          <v-list-item-content>
            <v-list-item-title>
              <span>#</span> {{ child.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>


    <!-- <div id="comunity__drawer-footer" class="d-flex" style="gap: 10px">
      <v-badge
        bottom
        overlap
        color="green"
        offset-x="15"
        offset-y="15"
        class="not"
      >
        <v-img-load
          :src="testImage"
          alt="test image"
          sizes="50px"
          rounded="50%"
          border="1.5px solid #000"
        />
      </v-badge>

      <div class="d-flex flex-column justify-center" style="gap: 5px">
        <h6 class="mb-0">User name 🤑</h6>
        <span>Online</span>
      </div>
    </div> -->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "ComunityDrawer",
  data() {
    return {
      model: true,
      items: [
        {
          items: [
            { title: 'Welcome 🖐️', active: false },
            { title: 'the - lobby 👓', active: false },
            { title: 'the - menu 🗂️', active: false },
            { title: 'lorem ipsum 🤘', active: false },
          ],
          title: 'Grand Entrance',
        },
        {
          items: [
            { title: 'Welcome 🖐️', active: false },
            { title: 'the - lobby 👓', active: false },
            { title: 'the - menu 🗂️', active: false },
            { title: 'lorem ipsum 🤘', active: false },
          ],
          title: 'Grand Entrance',
        },
        {
          items: [
            { title: 'Welcome 🖐️', active: false },
            { title: 'the - lobby 👓', active: false },
            { title: 'the - menu 🗂️', active: false },
            { title: 'lorem ipsum 🤘', active: false },
          ],
          title: 'Grand Entrance',
        },
        {
          items: [
            { title: 'Welcome 🖐️', active: false },
            { title: 'the - lobby 👓', active: false },
            { title: 'the - menu 🗂️', active: false },
            { title: 'lorem ipsum 🤘', active: false },
          ],
          title: 'Grand Entrance',
        },
        {
          items: [
            { title: 'Welcome 🖐️', active: false },
            { title: 'the - lobby 👓', active: false },
            { title: 'the - menu 🗂️', active: false },
            { title: 'lorem ipsum 🤘', active: false },
          ],
          title: 'Grand Entrance',
        },
        {
          items: [
            { title: 'Welcome 🖐️', active: false },
            { title: 'the - lobby 👓', active: false },
            { title: 'the - menu 🗂️', active: false },
            { title: 'lorem ipsum 🤘', active: false },
          ],
          title: 'Grand Entrance',
        },
      ],
      testImage: 
        "https://i0.wp.com/stable-diffusion-art.com/wp-content/uploads/2023/01/01352-2629874737-A-digital-artstationd-dystopia-art-looking-side-way-fantasy_1.5-painting-of-Ana-de-Armas_-emma-watson_-0.8-in-street_1.5.png?fit=1408%2C896&ssl=1",
    }
  },
}
</script>

<style lang="scss">
$border-radius: 8px;

#comunity__drawer {
  background: var(--drawer) !important;
  left: var(--side-bar-width);

  .v-navigation-drawer {
    &__content {
      display: flex;
      flex-direction: column;
    }

    &__border {
      background-color: var(--secondary) !important;
    }
  }


  &-header {
    padding: 6px 8px;
    background-color: var(--drawer);
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-color: var(--secondary);
  }


  .v-list {
    flex-grow: 1;
    padding-right: 0;


    &-group {
      &__header {
        margin-bottom: 0;
        min-height: 40px;
        height: 40px;

        &::before {
          border-top-left-radius: $border-radius;
          border-bottom-left-radius: $border-radius;
        }

        * { color: var(--label) /* !important */ }

        .v-list-item {

          &__title {
            font-size: 18px !important;
            font-weight: 600 !important;
          }

          &__icon {
            margin-top: 7px;
            margin-right: 5px;
          }
        }
      }


      &__items {
        * { color: var(--title) }

        .v-list-item {
          padding-left: 30px;
          min-height: 27px;
          margin-bottom: 0;
          border-top-left-radius: $border-radius;
          border-bottom-left-radius: $border-radius;

          &__content { padding-block: 0 }

          span { color: var(--label) !important }

          &.active {
            background-color: var(--body);

            span { color: var(--title) !important }
          }
        }
      }

      &--active { margin-bottom: 10px }
    }
  }


  &-footer {
    padding: 10px 10px;
    background-color: var(--secondary);
    border-left: 1px solid var(--drawer);

    .v-badge__wrapper .v-badge__badge {
      $size: 15px;
      max-width: $size !important;
      min-width: $size !important;
      width: $size !important;
      height: $size !important;
      max-height: $size !important;
      min-height: $size !important;
    }

    h6 {
      font-size: 16px !important;
      font-weight: 600 !important;
    }

    h6 + span {
      font-size: 13px !important;
      font-weight: 400 !important;
    }
  }
}
</style>
