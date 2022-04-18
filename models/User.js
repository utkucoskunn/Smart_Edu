const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
});

const User=mongoose.model('User',UserSchema);
module.exports=Course;