import React, { useState, useEffect } from 'react';

const UseEffectPractice = (props) => {
    const [animal, setAnimal] = useState("alligator");
    const [isPredator, setIsPredator] = useState(undefined);
    const handleClick = () => {
        setAnimal("monkey");
    };

    useEffect(() => {
        console.log(animal);
        //This useEffect should only run when animal is changed
        //Use a switch to determine if the animal is a predator or not.
        //Example: Case is a monkey you need to change the value of isPredator to false... Make a case for the alligator and change the value to isPredator to true.
        //Default case should be undefined.
        switch(animal) {
            case "monkey":
                setIsPredator(false)
                break;
            case "alligator":
                setIsPredator(true)
                break;
            default:
                setIsPredator(undefined)

        }
    }, [animal]);

    return (
        <div>
            <p>The currect animal is {animal} and isPredator is set to {" "}{isPredator?.toString() ?? "undefined"}</p>
            <button onClick={handleClick}>Click to Change Animal</button>
            {/* <button onClick={()=>setIsPredator(!isPredator)}>Change IsPredator</button> */}
        </div>
    );
};

export default UseEffectPractice;