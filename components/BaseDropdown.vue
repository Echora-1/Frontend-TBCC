<template>
  <div v-click-outside="hideDropdown" class="wrapper">
    <label :for="id" class="base-label">
      {{ label }}
    </label>
    <div
      :class="['base-input-wrapper', {'base-input-wrapper_focused': focused || isDropdownOpen}]"
    >
      <input
        :id="id"
        v-model="searchValue"
        class="base-input"
        v-bind="$attrs"
        :placeholder="$attrs.placeholder"
        readonly
        @focus="focusHandler"
        @input="inputHandler"
        @blur="blurHandler"
      >
    </div>
    <div
      v-if="isDropdownOpen"
      class="list-selector___dropdown"
    >
      <ul>
        <li
          v-for="item in unselectedItems"
          :key="item.id"
          @click="onItemClick(item)"
        >
          {{ item[itemKey] }}
        </li>
        <li v-if="!filteredList.length" class="empty">
          Ничего не найдено
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {

  directives: {
    ClickOutside
  },
  props: {
    value: {
      type: String,
      default: ''
    },

    id: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    list: {
      type: Array
    },

    itemKey: {
      type: String
    },

    defaultValue: {
      type: Object
    }
  },

  data () {
    return {
      focused: false,
      isDropdownOpen: false,
      selectedListItem: {},
      filteredList: this.list,
      searchValue: ''
    }
  },

  computed: {
    unselectedItems() {
      return this.list.filter(item => item.id !== this.selectedListItem.id)
    }
  },

  watch: {
    selectedListItem () {
      this.$emit('selected', this.selectedListItem)
    }
  },

  created() {
    if(this.defaultValue) {
      this.searchValue = this.defaultValue[this.itemKey]
      this.selectedListItem = this.defaultValue
    }
  },

  methods: {
    inputHandler () {
      this.isDropdownOpen = true
    },

    focusHandler () {
      this.focused = true
      this.isDropdownOpen = true
    },

    blurHandler () {
      this.focused = false
    },

    hideDropdown () {
      this.isDropdownOpen = false
    },

    onItemClick (item) {
      this.selectedListItem = item
      this.searchValue = item[this.itemKey]
      this.isDropdownOpen = false
    },

    getSearchItem () {
      this.filteredList = this.list.filter(item => item[this.itemKey].toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  position: relative;
}

.base-input-wrapper {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 20px;
  width: 100%;
  &:hover{

  }
}

.base-input {
  width: 42px;
  height: 32px;
  margin: 0;
  border: none;
  outline: none;
  padding: 2px 4px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url("assets/img/vector.svg");
  background-position: center right;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  color: white;
  &::placeholder {
    color: white;
  }
}

.base-label {
  color: white;
  font-size: 18px;
  display: none;
}

.list-selector___dropdown {
  max-height: 100px;
  width: 100%;
  position: absolute;
  z-index: 2;
  overflow-y: auto;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
  }
  li {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    padding: 7px 5px;
    cursor: pointer;
    color: white;
  }
}
.empty {
  text-align: center;
  font-size: 12px;
}

li.empty:hover {
  background-color: transparent;
}

</style>
