import React from 'react';

const Philos = (props) => {

  const { philos } = props
  return (
    <div>
      <h1>Greek Philosophers</h1>
      <p>
        <a href="http://localhost:3000/philos/new">Add Philosopher</a>
      </p>

      {philos.map(() => (
        <div>{p.name}
          <br />
          <a href={`http://localhost:3000/philos/${p.id}`}> Show</a>
          <br />
          <a href={`http://localhost:3000/philos/${p.id}/edit`}> Edit</a>
          <br />
          <a href={`http://localhost:3000/philos/${p.id}`} data-method="delete">Delete</a>

          <hr />
        </div>

      ))}
    </div>
  )

}

export default Philos;