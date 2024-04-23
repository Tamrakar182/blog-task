import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';

const useFetchBlogId = (id) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchBlogId = async (id) => {
    try {
        setLoading(true);
        const response = await axiosInstance.get(`/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
        setError(null);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }};

    useEffect(() => {
        fetchBlogId(id);
    }, [id]);
    
    return { blog, loading, error };
    }

export default useFetchBlogId;
