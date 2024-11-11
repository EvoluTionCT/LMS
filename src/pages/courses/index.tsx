import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CourseCard from '@/components/Card/CourseCard';
import Pagination from '@/components/Pagination/Pagination';
import Filters from '@/components/Filter/Filters';
import NoResult from '@/components/EmptyState/NoResult';
import { Course } from '@/models/courses';
import { fetchCourses, fetchInstructors } from '@/services/coursesService';

type CoursesPageProps = {
    initialCourses: Course[];
    initialInstructors: string[];
};

const CoursesPage: React.FC<CoursesPageProps> = ({ initialCourses, initialInstructors }) => {
    const [filteredCourses, setFilteredCourses] = useState<Course[]>(initialCourses);
    const [currentPage, setCurrentPage] = useState(1);
    const [instructor, setInstructor] = useState('');
    const [level, setLevel] = useState('');
    const [status, setStatus] = useState('');
    const [sort, setSort] = useState('');

    const coursesPerPage = 9;
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    useEffect(() => {
        const updatedCourses = applyFiltersAndSort(initialCourses, { instructor, level, status, sort });
        setFilteredCourses(updatedCourses);
        setCurrentPage(1);
    }, [instructor, level, status, sort, initialCourses]);

    const currentCourses = useMemo(() => {
        const start = (currentPage - 1) * coursesPerPage;
        return filteredCourses.slice(start, start + coursesPerPage);
    }, [filteredCourses, currentPage]);

    const handlePageChange = (page: number) => setCurrentPage(page);

    const handleFilterChange = (key: string, value: string) => {
        switch (key) {
            case 'instructor':
                setInstructor(value);
                break;
            case 'level':
                setLevel(value);
                break;
            case 'status':
                setStatus(value);
                break;
            case 'sort':
                setSort(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-6 py-8">
                <h1 className="text-[40px] font-bold text-center md:text-left">Available Courses</h1>

                <div className="rounded-2xl py-6">
                    <div className="px-2">
                        <Filters
                            instructors={initialInstructors}
                            levels={['Beginner', 'Intermediate', 'Advanced']}
                            statuses={['Open', 'Closed']}
                            selectedInstructor={instructor}
                            selectedLevel={level}
                            selectedStatus={status}
                            selectedSort={sort}
                            onFilterChange={handleFilterChange}
                        />
                    </div>
                </div>

                <div className="mt-2">
                    {filteredCourses.length === 0 ? (
                        <div className="rounded-2xl border border-gray-100">
                            <NoResult />
                        </div>
                    ) : (
                        <div className="mt-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentCourses.map(course => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                            <div className="mt-8 flex justify-center">
                                    <Pagination
                                        total={totalPages}
                                        current={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

const applyFiltersAndSort = (
    courses: Course[],
    filters: { instructor: string; level: string; status: string; sort: string }
): Course[] => {
    let updatedCourses = [...courses];

    if (filters.instructor) {
        updatedCourses = updatedCourses.filter(course => course.instructor === filters.instructor);
    }
    if (filters.level) {
        updatedCourses = updatedCourses.filter(course => course.level === filters.level);
    }
    if (filters.status) {
        updatedCourses = updatedCourses.filter(course => course.status === filters.status);
    }

    if (filters.sort) {
        switch (filters.sort) {
            case 'title-asc':
                updatedCourses.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                updatedCourses.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'enrollment-asc':
                updatedCourses.sort((a, b) => a.enrollment - b.enrollment);
                break;
            case 'enrollment-desc':
                updatedCourses.sort((a, b) => b.enrollment - a.enrollment);
                break;
            default:
                break;
        }
    }

    return updatedCourses;
};

export async function getServerSideProps() {
    const initialCourses = await fetchCourses();
    const initialInstructors = await fetchInstructors();

    return {
        props: {
            initialCourses,
            initialInstructors,
        },
    };
}

export default CoursesPage;
