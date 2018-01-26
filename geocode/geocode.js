const request = require('request');

module.exports.geocodeAddress = address => {

  const encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAbwBerQXNwzkE4cvNSp6v0Z4W3hfclk6Q`,
      json: true
    },
    (error, response, body) => {
      // console.log(body);
      if (error) {
        console.log('unable to connect to google server');
      } else if (body.status === 'ZERO_RESULTS') {
        console.log('No address found');
      } else {
        switch (response.statusCode) {
          case 200:
            console.log(
              JSON.stringify(`Endereço: ${body.results[0].formatted_address}`)
            );
            console.log(
              JSON.stringify(
                `Latitude: ${body.results[0].geometry.location.lat}`
              )
            );
            console.log(
              JSON.stringify(
                `Longitude: ${body.results[0].geometry.location.lng}`
              )
            );
            break;

          default:
            console.log('Something goes wrong :/');
            break;
        }
      }
    }
  );
};
