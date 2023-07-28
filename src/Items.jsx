import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = () => {
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('api/tasks'),
  });

  const { isLoading, data, isError, error } = result;

  if (isLoading) {
    return <div className="loading" style={{ marginTop: '1rem' }}></div>;
  }

  if (error) {
    return <p style={{ marginTop: '1rem' }}>{error.message}</p>;
  }

  const items = data.data.taskList;

  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
