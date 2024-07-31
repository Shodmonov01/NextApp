import mongoose, { Document, Schema } from 'mongoose';

interface IImage extends Document {
  url: string;
  description: string;
}

const ImageSchema: Schema = new Schema({
  url: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Image || mongoose.model<IImage>('Image', ImageSchema);
