<!-- eslint-disable vue/no-v-html-->
<template>
  <ais-instant-search
    :index-name="defaultIndex"
    :search-client="searchClient"
    class="company-search"
  >
    <ais-configure
      query=""
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
        <template v-if="currentRefinement">
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

// ALGOLIA_API_KEY=6f1e32cabc7c30efc7410c478ca221a1
// ALGOLIA_APP_ID=05JLREVGZ4
// ALGOLIA_DEFAULT_INDEX=ascend_minex_platform_content

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
    // :disjunctive-facets-refinements.camel="{ type: ['Company'],  }"
    return {
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

  methods: {
    onSelect(hit) {
      if (hit) {
        window.location = `/${hit.objectID}`;
      }
    },
  },
};
</script>
