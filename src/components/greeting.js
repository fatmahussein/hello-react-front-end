import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchgreeting } from '../slices/greetingSlice';

const Greeting = () => {
  const greetings = useSelector((store) => store.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchgreeting());
  }, [dispatch]);

  if (greetings.isLoading) {
    return <p>Loading...</p>;
  }
  console.log(greetings);

  return (
    <div>
      <h1>Random Greetings</h1>
      <p>{greetings.greeting}</p>
    </div>
  );
};

export default Greeting;
