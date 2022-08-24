import { useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import "./tindercards.css"
import axios from '../../axios';

const TinderCards = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
    },[]);
console.log(people);
    const swiped = (direction,nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };
    const outOfFarme = (name) => {
        console.log(name + "left the screen");
    };
  return (
    <div className='tinderCards'>
        <div className='tinderCards_cardContainer'>
            {people.map((person,index) => {
                return (
                <TinderCard 
                    className='swipe' 
                    key={index} 
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFarme(person.name)}
                   >
                    <div
                    style={{ backgroundImage: `url(${person.imgurl})`}}
                    className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
                )   
                
            })}
        </div>
    </div>
  )
}

export default TinderCards