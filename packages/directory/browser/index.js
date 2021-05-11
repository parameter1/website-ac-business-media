const AutoScroll = () => import(/* webpackChunkName: "auto-scroll.vue" */ './auto-scroll.vue');

export default (Browser) => {
  Browser.registerComponent('DirectoryAutoScroll', AutoScroll);
};
