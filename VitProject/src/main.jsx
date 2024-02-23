import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type : "a",
//     props: {
//         href:"https://google.com",
//         target: '_black'
//     },
//     children : "Click here to visit google"
// }

const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target:"_blank"},
    'click here to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
