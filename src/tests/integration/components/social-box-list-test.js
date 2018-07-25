import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | social box list', function() {
  setupComponentTest('social-box-list', {
    integration: true
  });

  it('renders', function() {
    const supportedAuthorizers = [
      {
        id: 'oneauth',
        displayName: 'One Auth',
        iconPath: '/one/auth.svg',
        iconBackgroundColor: '#eee',
      },
      {
        id: 'hello',
        displayName: 'Hello world',
        iconPath: '/hello/world.svg',
        iconBackgroundColor: '#333',
      },
    ];
    this.set('supportedAuthorizers', supportedAuthorizers);
    
    this.render(hbs`{{social-box-list
      supportedAuthorizers=supportedAuthorizers
    }}`);
    expect(this.$()).to.have.length(1);
  });
});
