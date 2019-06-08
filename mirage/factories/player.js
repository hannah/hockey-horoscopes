import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return faker.name.findName();
  },

  team: "Quebec Nordiques",

  birthday() {
    return faker.date.past();
  },

  starsign: "gemini",
  birthlocation: "New York, NY, USA",
  avatar: '/player.png'


});
