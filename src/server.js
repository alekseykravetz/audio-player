
const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');

const app = express();

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => res.send('Server Online'));

app.use('/', express.static('dist'));

// app.post('/api/v1/via-travel-status-update', async (req, res) => {

//     const { providerTravelId, status } = req.body;

//     const viaAuthResult = await viaAuth();
//     const viaToken = viaAuthResult.access_token;

//     const viaUpdateResult = await viaTravelStatusUpdate(viaToken, providerTravelId, status);

//     res.json(viaUpdateResult);
// });

// app.post('/api/v1/via-travel-cancel', async (req, res) => {

//     const { providerTravelId } = req.body;

//     const viaAuthResult = await viaAuth();
//     const viaToken = viaAuthResult.access_token;

//     const viaUpdateResult = await viaTravelCancel(viaToken, providerTravelId);

//     res.json(viaUpdateResult);
// });

// async function viaAuth() {

//     const result = await fetch(`${'https://trip-dev.auth.us-east-1.amazoncognito.com'}/oauth2/token?grant_type=client_credentials`, {
//         method: 'post',
//         headers: {
//             'Authorization': `Basic ${'M3JpNnNzaWZkM2g0dms1czJ0OWxkajNibHY6MXRhdWp2aTg4cDBlZDZqOWptZGtqOWV0dGlubzRjNWxhODZsaDdwMmE1NW5lNTlocXVrMA=='}`,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     });

//     const json = await result.json();
//     return json;
// }
// async function viaTravelStatusUpdate(viaToken, providerTravelId, tripStatus) {

//     const postData = JSON.stringify({
//         trip_id: providerTravelId,
//         rider_status: tripStatus,
//         location: { lat: 52.530009, lng: 13.381600 }
//     });

//     const result = await fetch(`${'https://4ruuscbm8l.execute-api.us-east-1.amazonaws.com/dev'}/sandbox/update`, {
//         method: 'post',
//         headers: {
//             'Authorization': `Bearer ${viaToken}`,
//             'Content-Type': 'application/json',
//             'x-api-key': 'imAlFYmL5k5uekVj12NhY8QRBoPTK7xE49Vh20hr'
//         },
//         body: postData
//     });

//     const json = await result.json();
//     return json;
// }

// async function viaTravelCancel(viaToken, providerTravelId) {

//     const result = await fetch(`${'https://4ruuscbm8l.execute-api.us-east-1.amazonaws.com/dev'}/trips/cancel`, {
//         method: 'post',
//         headers: {
//             'Authorization': `Bearer ${viaToken}`,
//             'Content-Type': 'application/json',
//             'x-api-key': 'imAlFYmL5k5uekVj12NhY8QRBoPTK7xE49Vh20hr'
//         },
//         body: JSON.stringify({ trip_id: providerTravelId })
//     });

//     const json = await result.json();
//     return json;
// }


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`dx server - port: ${port} - ${process.env.NODE_ENV || 'local'} environment`));
