import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [palin, setPalin] = useState('is not')

  const myFunction = (event) => {
    let thisWord = document.getElementById("userinput").value
    setWord(thisWord)

    function palindrome(str) {
      if (str.length < 3) {
        return false
      } else if ((str.length == 3) && (str.slice(0,1) == str.slice(-1))) {
        return true
      } else if (str.slice(0,1) != str.slice(-1)) {
        return false
      } else {
        return palindrome(str.slice(1, str.length-1))
      }
    }
    let result = palindrome(thisWord)

    if (result == true) setPalin('is')
    else setPalin('is not')
  }

  

  return (
    <div className="App">
      <div>
        <h3>
           <input type="text" onChange={myFunction} id="userinput"/>
        </h3>
      </div>
      <div>
        <h3 className="text-white">{word} {palin} a palindrome.</h3>
      </div>
    </div>
  )
}

export default App
