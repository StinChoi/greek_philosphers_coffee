import React from 'react';

const Philo = (props) => {
  const { id, name, quote } = props.Philo

  return (
    <div>
      <h1>One Philosopher</h1>
      <p>
        <a href="/">Back</a>
      </p>
      <h2>{id}. {name}</h2>
      <p>"{quote}"</p>

      <a href={`${id}/coffees`}>Coffees</a>
    </div>
  )
}

export default Philo;