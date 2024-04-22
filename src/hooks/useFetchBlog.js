import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';

const useFetchBlog = () => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchBlog = async () => {
    try {
        setLoading(true);
        const response = await axiosInstance.get('/blogs');
        const data = await response.json();
        setBlog(data);
        setError(null);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }};

    useEffect(() => {
        fetchBlog();
    }, []);
    
    return { blog, loading, error };
    }

export default useFetchBlog;
