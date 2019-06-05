import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return faker.name.findName();
  },

  team: "Quebec Nordiques",
  
  birthday() {
    return faker.date.past();
  },

  avatar() {
    return faker.internet.avatar();
  },

  starsign: "gemini",
  birthlocation: "New York, NY, USA",


});
