"use client"
import { useState } from 'react';

const JobDescription = () => {
    const [jobDescription, setJobDescription] = useState('');

    const handleChange = (e) => {
        setJobDescription(e.target.value);
    };

    return (
        <textarea
            placeholder="Enter the job description here"
            value={jobDescription}
            onChange={handleChange}
        />
    );
}

export default JobDescription;
