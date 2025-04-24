// getting-started.js
import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port  ${config.port}`);
    });
  } catch (error) {
    console.log('Error connecting to the database', error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();
