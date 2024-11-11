export async function fetchCourses() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`,
        {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
    return await response.json();
}

export async function fetchInstructors() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/instructors`,
        {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
    return await response.json();
}
