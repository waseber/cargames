export const state = () => ({
  countries: [],
  selectedStates: [],
  usStates: [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ],
  usGovernment: ['Diplomat', 'Military', 'US Government'],
  caProvinces: [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nunavut',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon',
  ],
})

export const getters = {
  getStates(state) {
    const returnArr = []
    if (state.countries.includes('us'))
      returnArr.push({ title: 'United States', states: state.usStates })

    if (state.countries.includes('ca'))
      returnArr.push({ title: 'Canada', states: state.caProvinces })

    if (state.countries.includes('usg'))
      returnArr.push({
        title: 'United States Government',
        states: state.usGovernment,
      })

    return returnArr
  },
}

export const mutations = {
  setSelectedStates(state, payload) {
    state.selectedStates = [...payload]
  },
  setCountries(state, payload) {
    state.countries = [...payload]
  },
}

export const actions = {
  setSelectedStates({ commit }, payload) {
    commit('setSelectedStates', payload)
  },
  setCountries({ commit }, payload) {
    commit('setCountries', payload)
  },
}
