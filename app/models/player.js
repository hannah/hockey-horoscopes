import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  team: DS.attr('string'),
  birthday: DS.attr('date'),
  star_sign: DS.attr(), //computed property based on birth date (this is only sun sign, additional computed property will be needed for rising and moon signs - use github snippet for initial calculations)
  birth_location: DS.attr(),
});
