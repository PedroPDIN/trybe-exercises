import { Schema } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  publishedYear?: number;
  weight?: string;
};

/*
  Uma vez que implementamos a interface Book,
  colocamos ela entre <> ( genéricos ), para definir o tipo
  do Schema.
*/

export const BookSchema = new Schema<IBook>({
  title: { type: 'string', required: true },
  author: { type: 'string', required: true },
  publishedYear: { type: 'number', required: false },
  weight: { type: 'string', required: false },
}, {versionKey: false});
