<template>
  <v-dialog v-model="model" content-class="modal-preview-image">
    <v-card>
      <h3>Preview Image</h3>
      
      <label for="preview">
        <v-img
          class="preview"
          :class="{active: img}"
          :src="img"
          transition="fade-transition"
        >
          <template #placeholder>
            <v-sheet class="placeholder">
              <span>1180 x 401.5 pixels <br> .jpg or .png</span>
            </v-sheet>
          </template>
        </v-img>
      </label>

      <v-file-input
        id="preview"
        v-model="file"
        style="display: none"
        accept="image/png, image/jpeg"
        @change="previewFile"
      ></v-file-input>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      model: false,
      img: undefined,
      file: undefined,
    }
  },
  methods: {
    previewFile() {
      this.img = URL.createObjectURL(this.file)

      this.$emit('change', this.file)
    },
  },
}
</script>

<style lang="scss">
.modal-preview-image {
  .v-card {
  }
}
</style>
