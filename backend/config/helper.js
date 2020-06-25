const MySqli = require ('mysqli');

let conn = new MySqli({
    host:'localhost',
    //post:'8889',
    port:'8889',
    user: 'king',
    passwd:'king',
    db:'mega_shop'
});

let db = conn.emit(false,'');

module.exports = {
    database: db
}