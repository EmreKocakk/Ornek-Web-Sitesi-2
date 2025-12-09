import React from 'react'
import '../css/Section.css'



function Section({setFilter, dark}) {
    return (
        <section className='section-1'>
            <h3 className={`s-h3 ${dark ? "" : "on"}`}>Extensions List</h3>
            <div className="buttons">
                <button className={`btn ${dark ? "" : "on"}`} onClick={()=> setFilter("all")} >All</button>
                <button className={`btn ${dark ? "" : "on"}`} onClick={()=> setFilter("active")}>Active</button>
                <button className={`btn ${dark ? "" : "on"}`} onClick={()=> setFilter("inactive")} >Inactive</button>
            </div>
        </section>
    )
}

export default Section