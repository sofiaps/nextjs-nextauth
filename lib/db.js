import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://db_user:W2V6MvbfaE7jw94T@cluster0.ohavsnx.mongodb.net/next-auth?retryWrites=true&w=majority'
  );

  return client;
}
