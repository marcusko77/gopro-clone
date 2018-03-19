
module.exports = {
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.get_products() 
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        db.get_product([req.params.id])
        .then( product => res.status(200).send( product) )
        .catch( () => res.status(500).send() );
    }
}