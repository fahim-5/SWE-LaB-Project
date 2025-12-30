import mongoose, { set } from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Sedan', 'SUV', 'Electric', 'Van'], 
  },
  pricePerDay: {
    type: Number,
    required: true,
    min: 1
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  availability: {
    type: String,
    required: true,
    enum: ['Available', 'Booked'], 
    default: 'Available'
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  coverImage: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

vehicleSchema.index({ userEmail: 1 });
vehicleSchema.index({ category: 1 });

export default mongoose.model('Vehicle', vehicleSchema);




// Sample Data

// {
//   "_id": {
//     "$oid": "69130f0ccf6e032516a29f85"
//   },
  // "vehicleName": "Toyota RAV4",
  // "owner": "John Doe",
  // "category": "SUV",
  // "pricePerDay": 85,
  // "location": "Dhaka, Gulshan",
  // "availability": "Available",
  // "description": "Spacious and reliable SUV, perfect for families.",
  // "coverImage": "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1231",
  // "userEmail": "john@example.com",
  // "createdAt": {
  //   "$date": "2025-10-30T10:00:00.000Z"
//   },
//   "__v": 0,
//   "updatedAt": {
//     "$date": "2025-11-11T15:14:58.973Z"
//   }
// }

