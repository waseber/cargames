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
            class="px-3"
          />
          <v-checkbox
            v-model="countriesModel"
            label="Canada"
            value="ca"
            class="px-3"
          />
          <v-checkbox
            v-model="countriesModel"
            label="United States Government"
            value="usg"
            class="px-3"
          />
        </div>
        <v-btn @click.prevent="setSelectedStates([])">Clear All</v-btn>

        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Rules
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h6 blue">
              License Plate Game Rules
            </v-card-title>

            <v-card-text class="pa-5">
              Each time you find a new license plate from another state,
              increment it to see which one there is the most of.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div v-for="(country, cIdx) in getStates" :key="cIdx">
          <h2>{{ country.title }}</h2>
          <div
            v-for="(state, sIdx) in country.states"
            :key="sIdx"
            class="d-flex align-end my-0"
          >
            <number-incrementer
              v-model="lpCounts"
              :min="0"
              :component-props="{}"
            />
            {{ state }}
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
import NumberIncrementer from '~/components/NumberIncrementer.vue'
export default {
  name: 'IndexPage',
  components: { NumberIncrementer },
  data() {
    return {
      dialog: false,
      lpCounts: [0],
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
