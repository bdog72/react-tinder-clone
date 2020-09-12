//
//

import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';

import database from '../firebase';
import '../styles/TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database.collection('people').onSnapshot((snapshot) => {
      return setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

// {
//   name: 'Doggy Doo',
//   url:
//     'https://images.pexels.com/photos/4726898/pexels-photo-4726898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// },
// {
//   name: 'Molly Moo',
//   url:
//     'https://images.pexels.com/photos/5211507/pexels-photo-5211507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// },
// {
//   name: 'Pretty Girl',
//   url:
//     'https://images.pexels.com/photos/1181497/pexels-photo-1181497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// },
// {
//   name: 'Pretty Girl-1',
//   url:
//     'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// },
