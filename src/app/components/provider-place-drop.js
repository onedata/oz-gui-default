import Ember from 'ember';
import bindFloater from '../utils/bind-floater';

/**
 * A popup (drop) with fixed position placed near to the provider-place widget,
 * visible when clicked. Contains information about provider and its spaces.
 * Fixed position automatically updates on some events, like atlas resize.
 * @module components/provider-place-drop
 * @author Jakub Liput
 * @copyright (C) 2016 ACK CYFRONET AGH
 * @license This software is released under the MIT license cited in 'LICENSE.txt'.
 */
export default Ember.Component.extend({
  onezoneServer: Ember.inject.service('onezone-server'),
  classNames: ['provider-place-drop'],
  classNameBindings: ['isWorking', 'dropSide'],
  messageBox: Ember.inject.service(),

  isWorking: function() {
    return this.get('provider.isWorking') ? 'working' : '';
  }.property('provider.isWorking'),

  /** Parent component - must be injected! */
  providerPlace: null,

  provider: function() {
    return this.get('providerPlace.provider');
  }.property('providerPlace'),

  spaces: function() {
    return this.get('provider.spaces');
  }.property('provider', 'provider.spaces'),

  spacesSorting: ['isDefault:desc', 'name'],
  spacesSorted: Ember.computed.sort('spaces', 'spacesSorting'),

  /** If true, places provider drop on the left of provider place circle */
  dropSideLeft: function() {
    return this.get('provider.longitude') >= 0;
  }.property('provider.longitude'),

  /** Returns a class name */
  dropSide: function() {
    return this.get('dropSideLeft') ? 'drop-left' : 'drop-right';
  }.property('dropSideLeft'),

  /** Binds a fixed position update event */
  didInsertElement() {
    let popup = this.$();
    let updater = bindFloater(popup, null, {
      posX: (this.get('dropSideLeft') ? 'left' : 'right'),
      posY: 'middle-middle',
      // a margin
      offsetX: 16 * (this.get('dropSideLeft') ? -1 : 1),
    });
    this.$().on('mouseover', updater);
    this.$().parent().on('mouseover', updater);
    $(window).resize(updater);
    $(window).scroll(updater);
  },

  click(event) {
    event.preventDefault();
    return false;
  },

  actions: {
    goToFiles() {
      const p = this.get('onezoneServer').getProviderRedirectURL(this.get('provider.id'));
      p.then(
        (data) => {
          window.location = data.url;
        },
        (error) => {
          this.get('messageBox').open({
            title: this.get('i18n').t('common.serverError'),
            message: this.get('i18n').t('onezone.providerPlaceDrop.goToFilesErrorMessage') +
              ((error && error.message) ? (': ' + error.message) : ''),
            type: 'error'
          });
        }
      );

      p.finally(() => this.set('goToIsLoading', false));
    }
  }
});
