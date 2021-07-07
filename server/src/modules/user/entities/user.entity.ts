import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ required: true, unique: true, type: mongoose.Schema.Types.String })
  email: string;

  @Prop({ required: true, type: mongoose.Schema.Types.String, select: false })
  password: string;

  @Prop({ type: mongoose.Schema.Types.Boolean, default: false })
  online: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
