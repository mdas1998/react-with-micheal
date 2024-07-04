import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <div><h1>Custom app</h1></div>
  )
}


// const reactElement = {
//   type: 'a', 
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const another_user = "Saitama"
const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href : 'https://www.google.com', target: "_blank"}, 
  'Click me to Visit Google',
  another_user
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Myapp />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
