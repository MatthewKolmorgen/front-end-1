import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

// Fake Data
const sampleClasses = [
    {
        id: 1,
        name: 'Cardio',
        intensity: 'Psycho Path',
   },
    {
        id: 2,
        name: 'Legs',
        intensity: 'Psycho Path',
    },
    {
        id: 3,
        name: 'Arms',
        intensity: 'Psycho Path',
    },
    {
        id: 4,
        name: 'Chest',
        intensity: 'Psycho Path',
    },
    {
        id: 5,
        name: 'Yoga',
        intensity: 'Psycho Path',
    },
    {
        id: 6,
        name: 'Zumba',
        intensity: 'Psycho Path',
    },
    {
    id: 7,
        name: 'Turbo Kick',
        intensity: 'Psycho Path',
    },

];

export default function SampleClasses() {
    const [classes, setClasses] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        axios
        .post('https://reqres.in/api/users', sampleClasses)
        .then(response => {
            console.log(response.data);
            setClasses(response.data);
        })
        .catch(err => console.log(err))
    },[])

    return (
        <div >
            <h3>Sample Classes</h3>
            <div >
                {classes.map(sampleClass => (
                <div key={sampleClass.id}>
                { !!(Number(sampleClass.id) % 2) ?
                   (<>
                    <div>
                        <h3>{sampleClass.name}</h3>
                        <p>Intensity: {sampleClass.intensity}</p>
                        <button onClick={()=> history.push('/signup')}>Get Started</button>
                    </div>
                    </>
                   ): 
                   (<>
                    <div>
                        <h3>{sampleClass.name}</h3>
                        <p>Intensity: {sampleClass.intensity}</p>
                        <button onClick={()=> history.push('/signup')}>Get Started</button>
                    </div>
                    </>)
                }
                </div>
                ))}
                </div>
                
        </div>
    )

}