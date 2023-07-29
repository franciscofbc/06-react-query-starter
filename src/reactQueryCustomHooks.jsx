import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

export const useFetchTasks = () => {
  const response = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('api/tasks'),
  });

  return response;
};

export const useCreateTask = (setNewItemName) => {
  const queryClient = useQueryClient();

  const response = useMutation({
    mutationFn: (taskTitle) =>
      customFetch.post('api/tasks', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task added');
      setNewItemName('');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return response;
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const response = useMutation({
    mutationFn: (taskId) => customFetch.delete(`api/tasks/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return response;
};

export const useEditTask = () => {
  const queryClient = useQueryClient();

  const response = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`api/tasks/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return response;
};
