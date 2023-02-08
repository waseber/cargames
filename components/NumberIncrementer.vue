<template>
  <v-container class="d-flex">
    <v-btn
      elevation="0"
      :disabled="parseInt(min) === innerValue"
      class="rounded-0 rounded-l-lg"
      @click="decrement"
      ><v-icon>mdi-minus</v-icon></v-btn
    >
    <input
      v-model="innerValue"
      type="number"
      :min="min"
      :max="max"
      class="mt-0 pt-0 rounded-0 text-center"
      style="max-width: 65px; max-height: 40px; border: 2px solid #f5f5f5"
    />
    <!-- <v-text-field
        v-model="innerValue"
        field-type="text-box"
        v-bind="vProps"
        :error-messages="errors"
        outlined
        class="mt-0 pt-0 rounded-0"
        style="max-width: 65px; max-height: 40px"
      ></v-text-field> -->
    <v-btn
      elevation="0"
      :disabled="parseInt(max) === innerValue"
      class="rounded-0 rounded-r-lg"
      @click="increment"
      ><v-icon>mdi-plus</v-icon></v-btn
    >
  </v-container>
</template>

<script>
// import formMixin from '../formMixin'
// TODO: more validation

export default {
  name: 'NumberIncrementer',
  // mixins: [formMixin],
  props: {
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
  },
  computed: {
    defaults() {
      return {
        value: {
          type: null,
          required: false,
        },
      }
    },
    innerValue: {
      get() {
        return this.value || this.min
      },
      set(v) {
        this.$emit('input', v)
      },
    },
  },
  methods: {
    increment() {
      if (this.max && this.innerValue >= this.max) {
        //
      } else {
        this.innerValue++
      }
    },
    decrement() {
      if (this.min && this.innerValue <= this.min) {
        //
      } else {
        this.innerValue--
      }
    },
  },
}
</script>

<style lang="scss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
