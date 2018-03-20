module.exports = {
    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const  userId = req.user.user_id;
        const  productId  = req.body.id;
        
        db.add_to_cart(userId, productId)
            .then(() => res.status(200).send())
           .catch(() => res.status(500).send())
    },

    removeFromCart: (req, res, next) => {
        const db = req.app.get('db');
        const  userId = req.user.user_id;
        const  productId  = req.params.id;
        console.log(userId,req.params)
        db.remove_from_cart(userId, productId)
            .then(() => res.status(200).send())
           .catch(() => res.status(500).send())
    },

    getCart: (req, res, next)=> {
        const db = req.app.get('db');
        const userId = req.user.user_id;
        db.get_cart(userId)
         .then( cart => res.status(200).send( cart ) )
        .catch( () => res.status(500).send() );

        
    }

}