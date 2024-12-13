const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      // every job created will be associated with a user
      // tying job model to user model
      type: mongoose.Types.ObjectId,
      ref: 'User', // user model
      required: [true, 'Please provide user'],
    },
  },
  // createdAt and updatedAt properties automatically added by mongoose
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
