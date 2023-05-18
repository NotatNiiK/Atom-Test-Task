import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'app',
  state: () => ({
    count: 5
    // Описуйте ваші стани тут
  }),
  // Додайте методи та дії тут
});