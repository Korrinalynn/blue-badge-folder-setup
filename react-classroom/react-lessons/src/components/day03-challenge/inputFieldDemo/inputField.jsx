import React, {useState} from "react";
const InputField = (props) => {
    const [username, setUsername] = useState("");

    function handleOnChange(e){
        console.log(e.target.value);
        // cannot do username = event.target.value
        setUsername(e.target.value);
    }

    return (
        <div>
            <p>Hello from InputField</p>
            <input type="text" value={username} onChange={handleOnChange} />
        </div>
    );
};

export default InputField;