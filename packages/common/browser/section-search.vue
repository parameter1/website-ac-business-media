<!-- eslint-disable vue/no-v-html-->
<template>
  <div ref="search" class="section-search" :class="{'open':openSuggestion}">
    <input
      v-model="selection"
      class="form-control"
      type="text"
      placeholder="Category..."
    >
    <div v-if="selection" class="list-group" style="width:100%">
      <div v-for="suggestion in matches" :key="suggestion" class="list-group-item">
        <a :href="'/'+sections[suggestion]">
          {{ suggestion }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    sections: {
      type: Object,
      required: true,
    },
    sectionNames: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      open: false,
      current: 0,
      selection: '',
    };
  },

  computed: {
    matches() {
      return this.sectionNames.filter((str) => {
        const match = str.toLowerCase().indexOf(this.selection.toLowerCase()) >= 0;
        return match;
      });
    },
    openSuggestion() {
      return this.selection !== ''
      && this.matches.length !== 0
      && this.open === true;
    },
  },

  mounted() {
    this.selection = '';
    this.addListeners();
  },

  beforeDestroy() {
    this.selection = '';
    this.removeListeners();
  },

  methods: {
    detectOutclick(event) {
      const el = this.$refs.search;
      if (!el.contains(event.target) && el !== event.target) {
        this.selection = '';
      }
    },

    addListeners() {
      document.addEventListener('click', this.detectOutclick.bind(this));
      document.addEventListener('touchstart', this.detectOutclick.bind(this));
    },
    removeListeners() {
      document.removeEventListener('click', this.detectOutclick.bind(this));
      document.removeEventListener('touchstart', this.detectOutclick.bind(this));
    },
  },

};
</script>
