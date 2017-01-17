import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

/**
 * A login account of user, using remote services, eg. OAuth2.
 * @module modals/authorizer
 * @author Jakub Liput
 * @copyright (C) 2016 ACK CYFRONET AGH
 * @license This software is released under the MIT license cited in 'LICENSE.txt'.
 */
export default DS.Model.extend({
  /**
   * Provider of authentication.
   * Allowed: github, plgrid, google, dropbox, facebook
   * @type {String}
   */
  type: attr('string'),
  
  email: attr('string'),

  user: belongsTo('user', {async: true})
});
