import ClientCard from '@/components/ClientCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import CardCheckbox from '@/components/Checkbox.vue'

export default {
   install(Vue) {
      Vue.component("client-card", ClientCard);
      Vue.component("search-input", SearchInput);
      Vue.component("card-checkbox", CardCheckbox);
   }
}
