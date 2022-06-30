import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://root:example@localhost:27017/GlassesTrybe?authSource=admin',
    ) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;


// Aqui, exportamos nossa conexão para ser iniciada quando iniciarmos nosso serviço de API, 
// ao mesmo tempo em que podemos definir qual URI queremos nos conectar.
// Um ponto de observação importante é que, definimos um valor padrão para nosso parâmetro mongoDatabaseURI, 
// que é um valor vindo da variável de ambiente ou URI em string, 
// mas o que encorajamos você a fazer é sempre usar uma variável de ambiente, 
// para que sua URI não fique exposta, garantindo a segurança da sua conexão com o banco.