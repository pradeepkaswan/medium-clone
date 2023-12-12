import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL, {
			autoIndex: true,
		});
		console.log('MongoDB connection established successfully');
	} catch (err) {
		console.error(`MongoDB connection error: ${err}`);
		process.exit(-1);
	}
};

export default connectDB;
