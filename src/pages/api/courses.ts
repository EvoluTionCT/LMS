import type { NextApiRequest, NextApiResponse } from 'next';
import { getCoursesHandler, createCourseHandler, getInstructorsHandler } from './handler/courses';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        if (req.query.type === 'instructors') {
          // Fetch distinct instructors
          await getInstructorsHandler(req, res);
        } else {
          // Fetch all courses
          await getCoursesHandler(req, res);
        }
        break;
      case 'POST':
        // Create a new course
        await createCourseHandler(req, res);
        break;
      default:
        res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error', reason: error });
  }
}
