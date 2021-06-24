<template>
  <div class="home">
    <div class="filter-wrapper">
      <search-input
        v-model="appNumber"
        placeholder="Номер заявки"
        class="oblr-mr-8"
      />
      <search-input
        v-model.number="clienTitle"
        placeholder="Наименование клиента"
      />
    </div>

    <div class="cards-wrapper">
      <client-card
        v-for="(item, i) in filterItems"
        :key="`client-card-${i}`"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.getItems()
  },
  computed: {
    filterItems() {
      let filterTitle = this.compareInclude(this.items, this.clienTitle, 'name')
      return this.compareInclude(filterTitle, this.appNumber, 'id')
    }
  },
  methods: {
    compareType(val) {
      return String(val).toLowerCase();
    },
    compareInclude(array, pattern, attr) {
      return array.filter(x => {
        if (!pattern) return x;
        return this.compareType(x[attr]).includes(this.compareType(pattern))
      });
    },
    async getItems() {
      const response = await fetch(this.path)
      const json = await response.json()
      this.items = json;
    }
  },
  data: () => ({
    path: 'https://run.mocky.io/v3/b795e45b-c19e-4039-bf00-424953a42c4f',
    clienTitle: null,
    appNumber: null,
    items: []
  })
}
</script>
