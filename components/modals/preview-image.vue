<template>
  <v-dialog v-if="model" v-model="model" content-class="modal-preview-image">
    <v-card :class="type" :style="`--w: ${w}; --h: ${h};`">
      <v-icon class="close-btn" @click="model = false"> mdi-close </v-icon>

      <h3 class="text-center">Preview Image</h3>

      <v-form ref="form" v-model="formValid" @submit="onConfirm">
        <label for="preview">
          <v-img
            :src="img"
            transition="fade-transition"
            class="preview"
            :class="{
              active: img,
              avatar: type === 'avatar',
            }"
            :style="`--w: ${w}; --h: ${h};`"
          >
            <template #placeholder>
              <v-sheet class="placeholder">
                <span v-if="type === 'banner'"
                  >1180 x 401.5 pixels <br />
                  .jpg or .png</span
                >
                <span v-if="type === 'bannerMobile'"
                  >135.5 x 271 pixels <br />.jpg or .png</span
                >
                <span v-if="type === 'avatar'">307 x 307</span>
              </v-sheet>
            </template>
          </v-img>
        </label>

        <v-file-input
          id="preview"
          v-model="file"
          style="display: none"
          accept="image/png, image/jpeg"
          :rules="[(v) => !!v || 'Field required']"
          @change="previewFile"
        ></v-file-input>

        <v-btn class="btn mx-auto" :disabled="!formValid" @click="onConfirm"
          >Confirm</v-btn
        >
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      model: false,
      formValid: undefined,
      img: undefined,
      file: undefined,
    }
  },
  computed: {
    w() {
      return this.type === 'banner'
        ? '1180px'
          : this.type === 'bannerMobile'
            ? '135.5px'
              : '307px'
    },
    h() {
      return this.type === 'banner'
        ? '401.5px'
          : this.type === 'bannerMobile'
            ? '271px'
              : '307px'
    },
  },
  watch: {
    model(val) {
      if (val) return

      this.clearPreview()
      this.$emit('close')
    },
  },
  methods: {
    previewFile() {
      this.img = URL.createObjectURL(this.file)
    },
    clearPreview() {
      this.img = undefined
      this.file = undefined
    },
    async onConfirm() {
      if (!(await this.$refs.form.validate())) return

      this.model = false
      this.$emit('confirm', { type: this.type, file: this.file })
    },
  },
}
</script>

<style lang="scss">
.modal-preview-image {
  .close-btn {
    position: absolute;
    $dis: 10px;
    right: $dis;
    top: $dis;
  }

  .v-card {
    position: relative;
    padding: 20px 30px;
    border-radius: 15px;
    max-width: calc(var(--w) + 60px);
    margin-inline: auto;
    height: 100% !important;
    display: flex;
    flex-direction: column;

    &.bannerMobile { max-width: calc(var(--w) + 200px) }
  }

  .v-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }

  .v-btn {
    width: 200px !important;
    min-width: 200px !important;
    min-height: 40px !important;
  }

  .placeholder {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: inherit;
    border: 2px dashed #fff;
    height: 100%;
    width: 100%;
    position: relative;

    span {
      position: absolute;
      inset: 0;
      margin: auto;
      display: grid;
      place-content: center;
      text-align: center;
    }
  }

  .preview {
    cursor: pointer !important;
    max-width: var(--w) !important;
    width: 100% !important;
    height: var(--h);
    margin-inline: auto;
    isolation: isolate;
    position: relative;
    overflow: visible;

    .v-responsive__content {
      max-width: var(--w) !important;
      width: 100% !important;
      height: var(--h);
    }

    &.active {
      border: 2px solid var(--primary) !important;
    }

    &.avatar {
      border-radius: 50%;
      @media (max-width: 410px) {
        height: clamp(177px, 70vw, var(--h)) !important;
      }

      * {
        border-radius: 50%;
      }
    }
  }
}
</style>
