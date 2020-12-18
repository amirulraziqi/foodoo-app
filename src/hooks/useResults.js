import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Making the request here, appending to baseURL '/search?limit=50?term?location='singapore'
    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'singapore'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err)
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('malay');
    }, [])

    return [searchApi, results, errorMessage];
};