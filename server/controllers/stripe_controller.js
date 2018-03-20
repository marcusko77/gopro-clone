module.exports = {
    payment: (req, res, next) => {

      
        const charge = stripe.charges.create(
          {
            source: req.body.token.id,
            amount: req.body.amount,
            currency: 'usd',
            description: 'Stripe test charge'
          },
          function(err, charge) {
              if (err) return res.sendStatus(500);
              else return res.sendStatus(200);
          }
        );
      }
}