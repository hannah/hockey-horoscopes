export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.get('/players', function(){
    return {
      data: [{
        type: 'player',
        id: 'tyson_jost',
        attributes: {
          name:'Tyson Jost',
          birthday: '3/14/1998', //format for date handling - how will this come in from the api?
          age: '20', //calculated by birthdate? or does API already provide this as well
          star_sign: 'pisces', //calculate through that github astrology calculator
          birth_location: 'St. Albert, Canada', //do i need the actual location data attached? normalized? check API documentation
          team: 'Colorado Avalanche'//link to team table
        }
      }, {
        type: 'player',
        id: 'sidney_crosby',
        attributes: {
          name:'Sidney Crosby',
          birthday: '8/7/1987', //make sure any internation data is displayed for US audiences correctly so the dates don't get swapped mm/dd/yyyy
          age: '31',
          star_sign: 'leo',
          birth_location: 'Cole Harbour, Canada', // do we include provice or state information? both?
          team: 'Pittsburg Penguins'
        }
      }, {
      type: 'player',
      id: 'elias_pettersson',
      attributes: {
        name: 'Elias Pettersson',
        age: '20',
        birthday: '11/12/1998',
        star_sign: 'scorpio',
        birth_location:'Sundsvall, Sweden', //make sure this field can handle i18n characters - anglicized version of cyrillic?
        team: 'Vancouver Canucks'
      }
    }]
  };
  });
}
