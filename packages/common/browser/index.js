const ContactUsForm = () => import(/* webpackChunkName: "contact-us-form.vue" */ './contact-us-form.vue');
const AutoScroll = () => import(/* webpackChunkName: "auto-scroll.vue" */ './auto-scroll.vue');
const CommonAlgoliaCompanySearch = () => import(/* webpackChunkName: "algolia-company-search.vue" */ './algolia-company-search.vue');
const CommonSectionSearch = () => import(/* webpackChunkName: "section-search.vue" */ './section-search.vue');
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
