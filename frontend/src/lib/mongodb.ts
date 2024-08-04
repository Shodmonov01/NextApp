// import mongoose from 'mongoose';

// const connectToDatabase = async () => {
//   if (mongoose.connection.readyState >= 1) return;

//   await mongoose.connect(process.env.MONGODB_URI || '', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// export default connectToDatabase;

// import mongoose from 'mongoose';

// const connectToDatabase = async () => {
//   if (mongoose.connection.readyState >= 1) return;

//   const uri = process.env.MONGODB_URI;
//   if (!uri) {
//     throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
//   }

//   await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// export default connectToDatabase;

import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to the database');
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  console.log('Connecting to MongoDB...');
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase;

