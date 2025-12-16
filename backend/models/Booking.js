import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  userEmail: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'confirmed'
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

bookingSchema.index({ userEmail: 1 });
bookingSchema.index({ vehicleId: 1 });
bookingSchema.index({ startDate: 1, endDate: 1 });

bookingSchema.virtual('duration').get(function() {
  return Math.ceil((this.endDate - this.startDate) / (1000 * 60 * 60 * 24));
});

export default mongoose.model('Booking', bookingSchema);


// sample data 

// {
//   "_id": {
//     "$oid": "69141a43a949955bb912c477"
//   },
//   "vehicleId": {
//     "$oid": "691358abea3dd09316336a0d"
//   },
//   "userEmail": "fahimbafu@gmail.com",
//   "startDate": {
//     "$date": "2025-11-12T00:00:00.000Z"
//   },
//   "endDate": {
//     "$date": "2025-11-15T00:00:00.000Z"
//   },
//   "totalPrice": 195,
//   "status": "confirmed",
//   "notes": "Booking from All Vehicles page",
//   "createdAt": {
//     "$date": "2025-11-12T05:25:23.162Z"
//   },
//   "updatedAt": {
//     "$date": "2025-11-12T05:25:23.162Z"
//   },
//   "__v": 0
// }