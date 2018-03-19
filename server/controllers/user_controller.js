module.exports = {
    getUserInfo: (req, res, next) => {
        const id = req.user.user_id
        const db = req.app.get('db');
        // console.log(req.user)
        db.get_user_info(id) 
        .then( user => res.status(200).send( user ) )
        .catch( () => res.status(500).send() );
    },

    updateAddress: (req, res, next) => {
        // console.log(req.body)
        const id = req.user.user_id
        const address = req.body.address
        const db = req.app.get('db');
        db.update_address(id, address)
    
    }
}