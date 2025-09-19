import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetData = (queryKey, endpoint) => {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            const response = await axios.get(endpoint);
            return response.data;
        }
    });
    
    return { data, isLoading, isError, error, refetch };
};

export default useGetData;