import React from 'react';
import { Course } from '@/models/courses';
import LevelBadge from '@/components/Badge/LevelBadge';
import StatusBadge from '@/components/Badge/StatusBadge';
import Image from 'next/image';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const formatDuration = (duration: string) => {
    const [hours, minutes] = duration.split(' ');
    if (minutes) {
      return `${hours} ${minutes}`;
    }
    return hours;
  };

  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-gray-100 w-full">
      {/* Course Image Container */}
      <div className="relative w-full pt-[56.25%]">
        <div className="absolute inset-0 rounded-[20px] overflow-hidden">
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-3 border-[12px] border-white">
              <Image 
                src={course.image} 
                alt={course.title} 
                width={32}
                height={32}
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4 -mt-5">
          <LevelBadge level={course.level} />
          <StatusBadge status={course.status} />
        </div>

        {/* Course Title */}
        <h3 className="text-[22px] leading-7 font-semibold text-gray-900 mb-4 line-clamp-2">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={course.instructorImage}
            alt={course.instructor}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
          <span className="text-[15px] text-gray-600 truncate">{course.instructor}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 -mx-0" />

        {/* Footer Stats */}
        <div className="flex justify-between items-center text-gray-500 mt-2">
          <div className="flex items-center gap-2 min-w-[80px]">
            <Image
              src="/images/time-gray.svg"
              alt="Duration"
              width={32}
              height={32}
              className="w-4 h-4 shrink-0"
            />
            <span className="text-[15px] whitespace-nowrap">{formatDuration(course.duration)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/user-gray.svg"
              alt="Enrollment"
              width={32}
              height={32}
              className="w-4 h-4 shrink-0"
            />
            <span className="text-[15px]">{course.enrollment.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;