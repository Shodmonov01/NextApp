// src/admin/user.schema.ts
import { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});
