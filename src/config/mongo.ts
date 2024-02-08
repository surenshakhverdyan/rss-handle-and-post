import * as mongoose from 'mongoose';

const mongo = (): void => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('mongo connected')
    })
    .catch((error: any) => {
      console.error(error.message, ' ', error.code);
    });
}

export default mongo;
