import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | list players', function(hooks) {
  setupApplicationTest(hooks);

  test('should link to information about the website', async function(assert){
    await visit('/');
    await click(".menu.about");
    assert.equal(currentURL(), '/about', "should navigate to about");
  });

  
  test('all players should be listed', async function(assert) {
    //await visit('/players');
    // players.name.total should equal total
  });
  // test('each player should have an associated sign')
  // test('each player should have an associated team')
  // test('each player should have at least one associated position')
  // test('each player should be clickable and bring to you the player profile')
  // test('each sign should be clickable and bring you to the associate sign players list')
  // test('each team name should be clickable and bring you to the associate team roster')

});
