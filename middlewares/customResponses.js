const customResponses = {
    badRequest(){
        return this.status(400).json({
            success: false,
            error: 'Bad Request',
            details: "Our server couldn't solve your request.",
        })
    },

    success ( payload ) {
        return this.status (200).json({
            success: true,
            payload,
        });
    }
}

module.exports = ( req, res, next ) => {
    Object.assign( res, customResponses );
    next( );
};