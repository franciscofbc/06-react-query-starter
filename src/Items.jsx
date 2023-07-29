import { useFetchTasks } from './reactQueryCustomHooks';
import SingleItem from './SingleItem';

const Items = () => {
  const { isLoading, data, error } = useFetchTasks();

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
