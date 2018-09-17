import Ember from 'ember';

/**
 * Content of onezone application - a world map with providers.
 * @module routes/home/onezone/index
 * @author Jakub Liput
 * @copyright (C) 2016-2017 ACK CYFRONET AGH
 * @license This software is released under the MIT license cited in 'LICENSE.txt'.
 */
export default Ember.Route.extend({
  beforeModel(transition) {
    if (transition.queryParams.back_forward ||
      performance && performance.navigation.type === performance.navigation.TYPE_BACK_FORWARD
    ) {
      console.debug(
        'route:onezone/provider-redirect: detected back/forward - redirecting to previous route'
      );
      delete transition.queryParams.back_forward;
      const hashBeforeRedirect = sessionStorage.getItem('hash-before-redirect');
      sessionStorage.clear('hash-before-redirect');
      transition.abort();
      window.location.replace(hashBeforeRedirect || '#/');
    } else {
      const currentHash = window.location.hash;
      if (!/\/onezone\/provider-redirect/.test(currentHash)) {
        sessionStorage.setItem('hash-before-redirect', currentHash);
      } else {
        sessionStorage.clear('hash-before-redirect');
      }
    }
  },
    
  model({ providerId }) {
    let user = this.modelFor('onezone');
    let providers = user.get('providers');
    let provider = providers.filter(p => p.get('id') === providerId)[0];
    
    return provider;
  },

  setupController(controller, provider) {
    this._super(...arguments);
    controller.goToFiles(provider.get('id'));
  },
  
  renderTemplate() {
    this.render({
      into: 'application'
    });
  },
});
