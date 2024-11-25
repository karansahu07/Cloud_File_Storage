const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   role: {
//     type: String,
//     required: [true, 'Role is required'],
//     enum: ['admin', 'user'] // Add any other valid roles
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     trim: true,
//     lowercase: true,
//     match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required']
//   }
// }, {
//   timestamps: true
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;


// Mongoose Schema and Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[A-Za-z\s]+$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /\S+@\S+\.\S+/,
  },
  mobile: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

