import React from 'react'
import Projects from './projects'
const data=[
    {
        name:"Sorting Visulizer",
        description:"Sorting aldorithm visulization with time complexity",
        skills:['Html','Css','Javascript'],
        github:"https://github.com/brijesh1130/Sorting-Visualizer"
    },

    {
        name:"Payment gateway integration",
        description:"paymeny gateway integration website using Html ,css,javascript",
        skills:['Html','Css','Javascript'],
        github:"https://github.com/brijesh1130/Payment-Gateway-Integration"
    }]


function Projectcontainer() {
  
  return (
    <div className='container'>
        <h1>Projects</h1>
        {
            data.map(projectitem=>{
                return <Projects projectitem={projectitem}/>
            })
        }
      
    </div>
  )
}

export default Projectcontainer