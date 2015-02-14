import DS from 'ember-data';
// import ENV from '../config/enviroment';

  export default DS.ActiveModelAdapter.extend({
    host: 'http://localhost:3000'
});

// host: ENV.adapterURL (so change this from localhost:3000)
