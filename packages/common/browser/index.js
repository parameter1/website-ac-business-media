import ContactUsForm from './contact-us-form.vue';
import AutoScroll from './auto-scroll.vue';
import CommonAlgoliaCompanySearch from './algolia-company-search.vue';
import CommonSectionSearch from './section-search.vue';

const SpecGuideTable = () => import(/* webpackChunkName: "common-spec-guide-table" */ './spec-guide/table.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  // @todo this should be removed once contact us is moved to core.
  Browser.register('CommonContactUsForm', ContactUsForm);
  Browser.register('CommonAutoScroll', AutoScroll);
  Browser.register('CommonSpecGuideTable', SpecGuideTable);
  Browser.register('CommonAlgoliaCompanySearch', CommonAlgoliaCompanySearch, {
    provide: { EventBus },
  });
  Browser.register('CommonSectionSearch', CommonSectionSearch, {
    provide: { EventBus },
  });
};
