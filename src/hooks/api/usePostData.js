import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const usePostData = (queryKey, endpoint) => {
    const queryClient = useQueryClient();

    const { mutate, isLoading, isError, error } = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(endpoint, data);
            return response.data;
        },
        onSuccess: () => {
            // Invalidate and refetch the related queries
            queryClient.invalidateQueries([queryKey]);
        }
    });

    return { mutate, isLoading, isError, error };
};

export default usePostData;