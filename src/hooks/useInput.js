import { useState } from 'react'

export const useInput = (defaultForm = {}) => {
  const [input, setInput] = useState(defaultForm);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }
  const rest = () => {
    setInput(defaultForm)
  }
  return [input, setInput, reset]
}
