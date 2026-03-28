import { useQuery } from '@tanstack/react-query';


//save to env file
let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);


export default function useApiCall(key, url) {
    const { data, error, isLoading } = useQuery({ queryKey: [key], queryFn : async () => {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } });

    return { data, error, isLoading };
}

