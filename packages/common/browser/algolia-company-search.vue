<template>
  <div ref="companySearch" class="company-search">
    <ais-instant-search
      :index-name="defaultIndex"
      :search-client="searchClient"
    >
      <ais-configure
        :hits-per-page.camel="displayLimit"
        :disjunctive-facets-refinements.camel="disjunctiveFacetsRefinements"
      />
      <ais-autocomplete>
        <div
          slot-scope="{ currentRefinement, indices, refine }"
          class="refinement"
        >
          <input
            type="text"
            class="form-control"
            :value="currentRefinement"
            placeholder="Company"
            :input-props="{
              onInputChange: refine,
              placeholder: 'Company',
            }"
            @input="refine($event.currentTarget.value)"
          >
          <template v-if="currentRefinement && showRefinements">
            <div
              v-for="index in indices"
              :key="index.indexId"
              class="list-group"
            >
              <div
                v-for="hit in index.hits"
                :key="hit.objectID"
                class="list-group-item"
              >
                <a :href="'/'+hit.objectID">{{ hit.name }}</a>
              </div>
            </div>
          </template>
        </div>
      </ais-autocomplete>
    </ais-instant-search>
  </div>
</template>

<script>
import {
  AisInstantSearch,
  AisAutocomplete,
  AisConfigure,
} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite';

export default {
  components: {
    AisInstantSearch,
    AisAutocomplete,
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
    return {
      showRefinements: true,
      searchClient: algoliasearch(
        this.appId,
        this.apiKey,
      ),
      disjunctiveFacetsRefinements: {
        type: ['Company'],
        'websiteSchedules.siteIds': [this.siteId],
      },
    };
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
        this.showRefinements = false;
      } else {
        this.showRefinements = true;
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
