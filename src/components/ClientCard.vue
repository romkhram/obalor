<template lang="html">
  <div
    class="card-wrapper"
  >
    <div class="card">
      <div class="card-header">
        <span>Проверить данные клиента</span>
        <span class="check-wrapper">
          <card-checkbox v-model="item.check" />
        </span>
      </div>

      <div class="card-content">
        <div class="price">
          {{item.price}} руб.
        </div>
        <div class="title">
          {{item.title}}
        </div>
        <div class="inn">
          ИНН {{item.inn}}
        </div>

        <div class="chip-wrapper">
          <span
            class="chip"
            v-for="(chip, i) in item.status"  :key="`status-${i}`"
          >
            {{chip}}
          </span>
        </div>
      </div>

      <div class="card-name">
        {{item.name}}
      </div>

      <div class="card-footer">
        <div class="chip-wrapper">
          <span
            class="chip"
            v-for="(chip, i) in item.tags"  :key="`tag-${i}`"
          >
            {{chip}}
          </span>
        </div>
        <div class="content">
          <span class="identificator">{{item.id}}</span>
          <span class="date">{{localeDate(item.date)}}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    localeDate(date) {
      return this.$moment(date).format("DD.MM.YYYY");
    }
  }
}
</script>
