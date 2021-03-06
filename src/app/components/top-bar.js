import Ember from 'ember';

const {
  computed
} = Ember;

/**
 * A top bar for homepage.
 * @module components/top-bar
 * @author Jakub Liput
 * @copyright (C) 2016-2017 ACK CYFRONET AGH
 * @license This software is released under the MIT license cited in 'LICENSE.txt'.
 */
export default Ember.Component.extend({
  session: Ember.inject.service(),

  tagName: 'nav',

  classNames: ['navbar', 'navbar-onedata'],

  userName: computed.alias('session.user.name'),

  didInsertElement() {
    let box = $('#navbar');
    let boxElement = box[0];

    box.mousewheel(function(e) {
      let isMobileMenu = $(this).hasClass('in');
      if (isMobileMenu) {
        let delta = e.originalEvent && e.deltaY;
        let scrollBegin = (this.scrollTop === 0);
        let scrollEnd = (boxElement.scrollHeight - boxElement.scrollTop === boxElement.clientHeight);
        let isScrollingUp = (delta > 0);
        if ((scrollBegin && isScrollingUp) || (scrollEnd && !isScrollingUp)) {
          e.preventDefault();
        }
      }
    });

    $('.global-fog').mousewheel(function(event) {
      event.preventDefault();
    });

    // use only one toggle button
    let toggleButton = $('.navbar-toggle')[0];

    $('.global-fog').click(function() {
      if ($(this).hasClass('active')) {
        toggleButton.click();
      }
    });

    // this should be the same code as in navbar-toggle...
    // maybe TODO: create: showMenu and hideMenu functions
    $('#navbar a').not('.dropdown-toggle').click(function() {
      // TODO: make a util which will add test element if it does not exists
      let isMobile = $('#desktop-test').is(':hidden');
      if (isMobile) {
        toggleButton.click();
      }
    });
  }
});
