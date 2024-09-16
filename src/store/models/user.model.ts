import mongoose, { Document, Schema } from "mongoose";
import { User } from "../types";

interface UserDocument extends User, Document {}

const userSchema: Schema = new Schema({
 name: { type: String, required: true },
 role: { type: String, enum: ["seller", "buyer", "management"], required: true },
});

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
