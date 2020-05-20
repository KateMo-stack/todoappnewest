import React from 'react'

const Rainbow= (WrappedComponent)=>{
    

    const colours =['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)]
    const className = randomColour + '-text';

    //komponent w komponencie HOC 
    return (props)=> {
        // console.log(props);
        return (
            <div className={className}>
            {/* wrzucanie propsów do komponentu WrappedComponent */}
             <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;