import ContactUsForm from './contact-us-form.vue';
import AutoScroll from './auto-scroll.vue';
import CommonAlgoliaCompanySearch from './algolia-company-search.vue';
import CommonSectionSearch from './section-search.vue';

const SpecGuideTable = () => import(/* webpackChunkName: "common-spec-guide-table" */ './spec-guide/table.vue');

export default (Browser) => {
  // @todo this should be removed once contact us is moved to core.
  Browser.registerComponent('CommonContactUsForm', ContactUsForm);
  Browser.registerComponent('CommonAutoScroll', AutoScroll);
  Browser.registerComponent('CommonSpecGuideTable', SpecGuideTable);
  Browser.registerComponent('CommonAlgoliaCompanySearch', CommonAlgoliaCompanySearch);
  Browser.registerComponent('CommonSectionSearch', CommonSectionSearch);
};
