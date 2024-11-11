import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCourses, createCourse, fetchDistinctInstructors } from '../services/courses';

// Handler for fetching all courses
export const getCoursesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const courses = await fetchCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

// Handler for creating a new course
export const createCourseHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const courseData = req.body;
    await createCourse(courseData);
    res.status(201).json({ message: 'Course created successfully' });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: 'Failed to create course' });
  }
};

// Handler for fetching distinct instructors
export const getInstructorsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const instructors = await fetchDistinctInstructors();
    res.status(200).json(instructors);
  } catch (error) {
    console.error("Error fetching instructors:", error);
    res.status(500).json({ error: 'Failed to fetch instructors' });
  }
};
