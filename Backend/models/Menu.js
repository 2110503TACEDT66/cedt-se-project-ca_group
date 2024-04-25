const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    restaurant:{
        type:mongoose.Schema.ObjectId,
        ref: 'Restaurant',
        required:true
    }
   
},{
    toJSON:{virtuals:true},
    toObject: {virtuals:true}
});

//Will we use existed review & promotion?
//add menu schema into review & promotion??

module.exports = mongoose.model('Menu', MenuSchema);