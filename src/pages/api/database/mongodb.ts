import { MongoClient, Db, Collection } from 'mongodb';
import { Course } from '../repository/models/courses';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.DATABASE_NAME || 'lms';
const courseCollectionName = process.env.COURSE_COLLECTION || 'courses';

if (!uri || !dbName || !courseCollectionName) {
  throw new Error('Please define MONGODB_URI, DATABASE_NAME, and COURSE_COLLECTION config');
}

class MongoDBClient {
  private static instance: MongoDBClient;
  private client: MongoClient;
  private db!: Db;
  private courseCollection!: Collection<Course>;
  private isConnected = false;

  private constructor() {
    this.client = new MongoClient(uri);
  }

  private async connect(): Promise<void> {
    if (!this.isConnected) {
      await this.client.connect();
      this.isConnected = true;
      this.db = this.client.db(dbName);
      this.courseCollection = this.db.collection<Course>(courseCollectionName);
    }
  }

  public static async getInstance(): Promise<MongoDBClient> {
    if (!MongoDBClient.instance) {
      MongoDBClient.instance = new MongoDBClient();
      await MongoDBClient.instance.connect();
    }
    return MongoDBClient.instance;
  }

  public getCourseCollection(): Collection<Course> {
    return this.courseCollection;
  }

  public async close(): Promise<void> {
    if (this.isConnected) {
      await this.client.close();
      this.isConnected = false;
    }
  }
}

export default MongoDBClient;
