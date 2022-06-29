import { Schema } from 'mongoose';

export interface ICup {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionGoals: number;
  editionStrikers: string[];
  bestPlayer: string;
  bestGoalkeeper?: string;
  bestYoungPlayer: string;
};

export const cupSchema = new Schema<ICup>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number, required: true },
  editionStrikers: { type: [{ type: String }], required: true },
  bestPlayer: { type: String, required: true },
  bestGoalkeeper: { type: String, required: false },
  bestYoungPlayer: { type: String, required: true },
}, {versionKey: false});
