import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('players');
  this.route('about');
  this.route('player', {path: ':player_id'} );
});

export default Router;
