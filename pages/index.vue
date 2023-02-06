<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-checkbox
        v-for="(state, sIdx) in usStates"
        :key="sIdx"
        v-model="selected"
        :label="state"
        :value="state"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      // selected: [''],
    }
  },
  computed: {
    ...mapState(['selectedStates', 'usStates']),
    selected: {
      get() {
        return this.selectedStates
      },
      set(v) {
        this.setSelectedStates(v)
      },
    },
  },
  methods: {
    ...mapActions(['setSelectedStates']),
  },
  mounted() {
    // this.selected = [...this.selectedStates]
  },
}
</script>
