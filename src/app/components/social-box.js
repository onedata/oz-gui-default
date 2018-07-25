import Ember from 'ember';
import contrast from 'npm:contrast';

/**
 * Renders single login button. Can optionally has a "link" property set to go
 * to a provided link instead of invoking action.
 * @module components/social-box
 * @author Jakub Liput
 * @copyright (C) 2016-2018 ACK CYFRONET AGH
 * @license This software is released under the MIT license cited in 'LICENSE.txt'.
 */

const {
  computed,
  String: { htmlSafe },
} = Ember;

const defaultIconBackgroundColor = '#333';
const defaultIconPath = '/assets/images/auth-providers/default.svg';

const darkFgColor = '#555C73';
const lightFgColor = '#FFF';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['social-box-component'],

  /**
   * @virtual 
   * Id of authorizer, e.g. google, plgrid, dropbox, google, facebook, ...
   * @type {string}
   */
  authId: undefined,

  /**
   * @virtual
   * @type {string}
   */
  iconPath: undefined,
  
  /**
   * @virtual
   * @type {string}
   */
  iconBackgroundColor: undefined,

  /**
   * @virtual
   * Text for tooltip
   * @type {string}
   */
  tip: '',
  
  /**
   * @virtual
   * Href for link when clicked
   * @type {string}
   */
  link: '',

  /**
   * Spinner scale
   * @type {number}
   */
  spinnerScale: 0.25,

  /**
   * @type {Ember.ComputedProperty<string>}
   */
  socialIconStyle: computed(
    'authId',
    'iconPath',
    function socialIconStyle() {
      if (this.get('authId') === 'more') {
        return htmlSafe('');
      } else {
        let  iconPath = this.get('iconPath');
        iconPath = iconPath || defaultIconPath;
        const style = `background-image: url(${iconPath});`;
        return htmlSafe(style);
      }
    }),

  /**
   * @type {Ember.ComputedProperty<string>}
   */
  aStyle: computed(
    'iconBackgroundColor',
    function spinnerBoxStyle() {
      let iconBackgroundColor;
      if (this.get('authId') === 'more') {
        iconBackgroundColor = '#fff';
      } else {
        iconBackgroundColor = this.get('iconBackgroundColor') || defaultIconBackgroundColor;
      }
      const fgColor = contrast(iconBackgroundColor) === 'light' ? darkFgColor : lightFgColor;
      const style = `background-color: ${iconBackgroundColor}; color: ${fgColor};`;
      return htmlSafe(style);
    }),
    
  hasLink: computed('link', function hasLink() {
    let link = this.get('link');
    return link && link.length !== 0;
  }),

  click() {
    // hide tooltip
    this.$().trigger('mouseout');
  },

  actions: {
    clicked() {
      if (!this.get('disabled')) {
        if (this.get('hasLink')) {
          window.location = this.get('link');
        } else {
          this.get('action')(this);
        }
      }
    }
  }
});
