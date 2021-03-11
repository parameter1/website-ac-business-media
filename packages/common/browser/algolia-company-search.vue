<template>
  <div ref="companySearch" class="company-search">
    <ais-instant-search
      :index-name="defaultIndex+'_company_name'"
      :search-client="searchClient"
    >
      <ais-configure
        :hits-per-page.camel="displayLimit"
        :filters="filters"
      />
      <ais-search-box
        v-model="phrase"
        :show-loading-indicator="false"
        :class-names="{
          'ais-SearchBox-input': 'form-control',
          'ais-SearchBox-submit': 'd-none',
          'ais-SearchBox-reset': 'd-none',
        }"
      >
        <div class="input-group">
          <input
            v-model="phrase"
            type="text"
            placeholder="Search Companies..."
            class="form-control"
          >
        </div>
      </ais-search-box>
      <ais-hits v-if="showRefinements">
        <div
          slot-scope="{ items }"
          class="list-group"
        >
          <div v-for="item in items" :key="item.objectID" class="list-group-item">
            <a :href="'/'+item.objectID" @click="emitAction()">{{ item.name }}</a>
          </div>
        </div>
      </ais-hits>
    </ais-instant-search>
  </div>
</template>

<script>
import {
  AisInstantSearch,
  AisHits,
  AisSearchBox,
  AisConfigure,
} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';

export default {
  components: {
    AisInstantSearch,
    AisHits,
    AisSearchBox,
    AisConfigure,
  },

  props: {
    appId: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    defaultIndex: {
      type: String,
      required: true,
    },
    siteId: {
      type: String,
      required: true,
    },
    displayLimit: {
      type: Number,
      default: 10,
    },
  },

  data() {
    const filtersArray = [
      'status = 1',
      `published < ${Date.now()}`,
      'type:"Company"',
      `(primarySiteId:"${this.siteId}" OR 'websiteSchedules.siteIds':"${this.siteId}")`,
    ];
    return {
      clickout: true,
      searchClient: algoliasearch(
        this.appId,
        this.apiKey,
      ),
      phrase: '',
      filters: filtersArray.join(' AND '),
    };
  },

  computed: {
    showRefinements() {
      return (this.phrase !== '' && !this.clickout);
    },
  },

  mounted() {
    this.addListeners();
  },

  beforeDestroy() {
    this.removeListeners();
  },

  methods: {
    onSelect(hit) {
      if (hit) {
        window.location = `/${hit.objectID}`;
      }
    },

    detectOutclick(event) {
      const el = this.$refs.companySearch;
      if (!el.contains(event.target) && el !== event.target) {
        this.clickout = true;
        this.phrase = '';
      } else {
        this.clickout = false;
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

    emitAction() {
      const payload = {
        category: 'Header Search',
        type: 'click',
        label: 'Company Profile Page',
      };
      this.$emit('action', payload);
    },

  },
};
</script>
