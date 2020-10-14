import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'
import PersonForm from '../components/PersonForm';
export default props => {
    const { title, price, description, id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect (() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = e => {
        console.log(person);
        axios.put('http://localhost:8000/api/people/' + id,
        {title, price, description})
            .then(res =>{ console.log(res);
                navigate("/people")
            });
    }
    return (
        <div>
            {loaded && (
                <PersonForm
                    items={props}
                    onSubmitProp={updatePerson}
                    initialTitle={person.title}
                    initialPrice={person.price}
                    initialDescription={person.description}
                />
            )}
        </div>
    )
}