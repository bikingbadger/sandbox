import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProp) {
  /* Search */
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  //Computed
  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.filteredItems.filter(item =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items) {
      filteredItems = items;
    }
    return filteredItems;
  });

  // Methods
  const updateSearch = val => {
    enteredSearchTerm.value = val;
  };

  watch(enteredSearchTerm, val => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch
  };
}
