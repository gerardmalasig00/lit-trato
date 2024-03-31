import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // Assuming URL is stored as string
  width?: number; // Optional since not marked as required
  height?: number; // Optional since not marked as required
  config?: object; // TypeScript 'object' type, consider defining more specific shape if possible
  transformationUrl?: string; // Assuming URL is stored as string
  aspectRatio?: string; // Fixed typo from 'aspecRatio' to 'aspectRatio'
  color?: string; // Optional since not marked as required
  prompt?: string; // Optional since not marked as required
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }; // Assuming ObjectId will be represented as string in TypeScript
  createdAt?: Date; // Optional since it has a default value
  updatedAt?: Date; // Optional since it has a default value
}

const ImageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  transformationType: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: URL,
    required: true,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  config: {
    type: Object,
  },
  transformationUrl: {
    type: URL,
  },
  aspecRatio: {
    type: String,
  },
  color: {
    type: String,
  },
  prompt: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
