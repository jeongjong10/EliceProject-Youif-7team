import React from 'react';
import { Dog } from '../Common/Interface';
import { DogListProps } from '../Common/Interface';

const DogList: React.FC<DogListProps> = ({ dogList }) => {
  return (
    <div>
      {dogList.map((dog, index) => (
        <div key={dog.id || String(index)} >
          <h2>{dog.breeds}</h2>
        </div>
      ))}
    </div>
  );
};

export default DogList;