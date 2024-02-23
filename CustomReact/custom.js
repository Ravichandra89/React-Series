function CustomRender(reactElement,Container){
  /*  const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childen
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    // Append to the react container
    Container.append(domElement)
  */

    // Iterating all properties by loop
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop]);
    }

    // Append to the react Container
    Container.append(domElement);
}

const reactElement = {
    type : "a",
    props: {
        href:"https://google.com",
        target: '_black'
    },
    children : "Click here to visit google"
}

// Selecting the root div
const mainContainer = document.querySelector('#root')

// Rendring by custom method
CustomRender(reactElement,mainContainer)