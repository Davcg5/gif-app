import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{
    const [inputValue, setInputValue] = useState("")

    const changeOnInput = (event) =>{
        setInputValue(event.target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        const newInputValue = inputValue.trim()
        if (newInputValue.length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue("");
    }
    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder={"Search gifs"}
                onChange= {changeOnInput}
                value={inputValue}
            />
        </form>
        
    )               
}