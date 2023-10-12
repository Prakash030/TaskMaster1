const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username:{
        type: String,
    },
    password:{
        type: String,
        required: true
    },
    list: [{
        type: mongoose.Types.ObjectId,
        ref: 'List'
    }]
},{
    timstamps: true
})

// userSchema.pre('save', async function(next){
//     const user = this;
//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password, 8);
//     }
//     next();
// });

module.exports = mongoose.model('User',userSchema);
