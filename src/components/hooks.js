// creating a custom hook for create post file to get rid of the redundant useState() code

import { useState } from "react";

// custom hook for taking formInputs

export function useFormInput(initialValue) {
    const[value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    //returnig an object 
    return{
        value,
        onChange: handleChange
    }
}

//We will now import this customHook to createPost file