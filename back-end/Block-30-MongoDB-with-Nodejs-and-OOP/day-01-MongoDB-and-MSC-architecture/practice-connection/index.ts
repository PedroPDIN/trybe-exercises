import { connect, Schema, model } from 'mongoose';

const options = {
  user: 'user', // Usuário do banco de dados.
  pass: 'password', // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'model_example', // Define qual banco de dados vou utilizar.
}

connect('mongodb://localhost:27017/', options);

interface Book {
  title: string,
  author: string,
};

const bookSchema = new Schema<Book> ({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

// referente ao código acima: Ao criar um schema, estamos dizendo ao Mongoose que possuímos uma coleção de livros na sua base de dados 
// que segue a estrutura passada. Caso algum campo definido no Schema seja opcional, ou não exista em alguns 
// dos documentos da sua base, você pode apenas definir o seu tipo, omitindo a chave required. Assim, 
// o Mongoose interpretará o campo required como false (undefined).

const bookModel = model<Book>('books', bookSchema);