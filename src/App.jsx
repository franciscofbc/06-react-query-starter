import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useEffect, useState } from 'react';
import customFetch from './utils';

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];

const App = () => {
  const [items, setItems] = useState(defaultItems);

  // const fetchData = async () => {
  //   try {
  //     const resp = await customFetch.get('api/tasks');
  //     // console.log(resp.data.taskList);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items items={items} />
    </section>
  );
};
export default App;
