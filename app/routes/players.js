import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [{
      id: 'tyson_jost',
      name:'Tyson Jost',
      birthday: '3/14/1998', //format for date handling - how will this come in from the api?
      age: '20', //calculated by birthdate? or does API already provide this as well
      star_sign: 'pisces', //calculate through that github astrology calculator
      birth_location: 'St. Albert, Canada', //do i need the actual location data attached? normalized? check API documentation
      team: 'Colorado Avalanche'//link to team table
    }, {
      id: 'sidney_crosby',
      name:'Sidney Crosby',
      birthday: '8/7/1987', //make sure any internation data is displayed for US audiences correctly so the dates don't get swapped mm/dd/yyyy
      age: '31',
      star_sign: 'leo',
      birth_location: 'Cole Harbour, Canada', // do we include provice or state information? both?
      team: 'Pittsburg Penguins'
    },
  {
      id: 'elias_pettersson',
      name: 'Elias Pettersson',
      age: '20',
      birthday: '11/12/1998',
      star_sign: 'scorpio',
      birth_location:'Sundsvall, Sweden', //make sure this field can handle i18n characters - anglicized version of cyrillic?
      team: 'Vancouver Canucks'
  }];
  }
});


// model() {
//    return [{
//      id: 'grand-old-mansion',
//      title: 'Grand Old Mansion',
//      owner: 'Veruca Salt',
//      city: 'San Francisco',
//      category: 'Estate',
//      bedrooms: 15,
//      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
//      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
//    }, {
