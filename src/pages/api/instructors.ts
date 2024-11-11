// pages/api/instructors.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { getInstructorsHandler } from './handler/courses';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Directly call the instructors handler to fetch distinct instructors
    await getInstructorsHandler(req, res);
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
