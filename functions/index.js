const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51N5T6NEO5eXO5u6zZpG8w4dBqvRVjEVdkXU53BtCT2vXQT27i6Mw3k9cGrcFlIztr4qBx6oDrxW8P3cKNmkaTqx0000ECQ9inY'
)
const app = express();

app.use(cors({origin: true}));
app.use(express.json());
// 라우트 부분
app.get('/',(req,res)=>res.status(200).send('안녕'));

app.post('/payments/create',async(req,res)=>{
    const total = req.query.total;
    console.log('payment 에서 가져온 total 곱하기 100의양'+total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    })

    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})



exports.api = functions.https.onRequest(app);

/**http://localhost:5001/e-clone-94b0e/us-central1/api */
