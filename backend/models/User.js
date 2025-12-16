import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  displayName: {
    type: String,
    required: true,
    trim: true
  },
  photoURL: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  }
}, {
  timestamps: true
});

userSchema.index({ email: 1 });
userSchema.index({ uid: 1 });

export default mongoose.model('User', userSchema);


// smaple data 

// {
//   "_id": {
//     "$oid": "6913062250f1823741bad5ba"
//   },
//   "uid": "MtbnZOeu1YUoYL07U1DciWu3OcH3",
//   "email": "fahimbafu@gmail.com",
//   "displayName": "Fahim Faysal",
//   "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJMI2HRmBfiZ1jpy5sKUkJqcgbmqrju7IV_uNJ16Q5yMbcZuhGACA=s96-c",
//   "role": "user",
//   "createdAt": {
//     "$date": "2025-11-11T09:47:14.461Z"
//   },
//   "updatedAt": {
//     "$date": "2025-11-11T09:47:14.461Z"
//   },
//   "__v": 0
// }