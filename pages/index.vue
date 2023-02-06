<template>
  <v-container>
    <v-row>
      <div>
        <h4>Settings:</h4>
        <div class="d-flex justify-center align-center">
          <v-checkbox
            v-model="countriesModel"
            label="United States"
            value="us"
          />
          <v-checkbox v-model="countriesModel" label="Canada" value="ca" />
          <v-checkbox
            v-model="countriesModel"
            label="United States Government"
            value="usg"
          />
        </div>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div v-for="(country, cIdx) in getStates" :key="cIdx">
          <h2>{{ country.title }}</h2>
          <div
            v-for="(state, sIdx) in country.states"
            :key="sIdx"
            class="d-flex align-center"
          >
            <v-checkbox v-model="selected" :label="state" :value="state" />
            <a
              :href="`https://www.google.com/search?q=${state}+license+plate&source=lnms&tbm=isch`"
              taret="_new"
              class="ml-3 red--text"
              style="text-decoration: none"
              >Look up</a
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      // selected: [''],
    }
  },
  computed: {
    ...mapState(['selectedStates', 'usStates', 'countries']),
    ...mapGetters(['getStates']),
    selected: {
      get() {
        return this.selectedStates
      },
      set(v) {
        this.setSelectedStates(v)
      },
    },
    countriesModel: {
      get() {
        return this.countries
      },
      set(v) {
        this.setCountries(v)
      },
    },
  },
  methods: {
    ...mapActions(['setSelectedStates', 'setCountries']),
  },
  mounted() {
    // this.selected = [...this.selectedStates]
  },
}
</script>
