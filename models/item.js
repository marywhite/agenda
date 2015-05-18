var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ItemSchema = new Schema({
    username: { type: String, required: true}
});

module.exports = mongoose.model('Item', ItemSchema);