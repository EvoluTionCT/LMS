import { getAllCourses, addCourse, getDistinctInstructors } from '../repository/courses';
import { Course } from './models/courses';

export const fetchCourses = async (): Promise<Course[]> => {
  return await getAllCourses();
};

export const createCourse = async (course: Course): Promise<void> => {
  await addCourse(course);
};

export const fetchDistinctInstructors = async (): Promise<string[]> => {
  return getDistinctInstructors();
};