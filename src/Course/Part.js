import React from 'react';

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises} exercícios
    </p>
  );
};

export default Part;
