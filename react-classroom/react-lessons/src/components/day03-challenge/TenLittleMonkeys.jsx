//have useState
//have a button
//function that when called it will update the state of monkeys left
//once the monkeys = 0 we need to update our display
import React, {useState} from "react";

const TenLittleMonkeys = (props) => {
    const [count, setCount] = useState(10)
    const [isDisabled, setIsDisabled] = useState(false)

    function handleClick(e) {
        console.log("Button was clicked")
        setCount(count - 1)
        if (count - 1 === 0) {
            setIsDisabled(true)
        }
    }
    return (
        <div>
            <button onClick = {handleClick} disabled = {isDisabled} >Next</button>
            <p>
                {count} little monkeys jumping on the bed one fell off and bumped his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!
            </p>
            {count === 0 ? <p>No more monkeys jumping on the bed!</p> : null}
        </div>
    );
};

export default TenLittleMonkeys;

// 1. Create a Functional Component called TenLittleMonkeys
// 2. Use useState to set the initial Monkey Count to 10
// 3. Display how many monkeys are left in a sentece that says the following... 
// 10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!
// 4. Once the count gets to zero display "All the Monkeys fell off"
// 5. Button clicking should take 1 away from the total monkey c