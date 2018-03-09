
module.exports = {
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.get_products() 
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },
}