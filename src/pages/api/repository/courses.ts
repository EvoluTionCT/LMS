import MongoDBClient from '../database/mongodb';
import { Course } from './models/courses';

export const getAllCourses = async (): Promise<Course[]> => {
  try {
    const client = await MongoDBClient.getInstance();
    const courseCollection = client.getCourseCollection();
    return await courseCollection.find().toArray();
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw new Error('Failed to fetch courses');
  }
};

export const addCourse = async (course: Course): Promise<void> => {
  try {
    const client = await MongoDBClient.getInstance();
    const courseCollection = client.getCourseCollection();
    await courseCollection.insertOne(course);
  } catch (error) {
    console.error('Error adding course:', error);
    throw new Error('Failed to add course');
  }
};

export const getDistinctInstructors = async (): Promise<string[]> => {
  try {
    const client = await MongoDBClient.getInstance();
    const courseCollection = client.getCourseCollection();
    return await courseCollection.distinct('instructor');
  } catch (error) {
    console.error('Error fetching distinct instructors:', error);
    throw new Error('Failed to fetch instructors');
  }
};
