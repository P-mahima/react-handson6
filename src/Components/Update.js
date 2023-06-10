import React, { useContext } from 'react'
import ContextD from './Context'
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {

    const DContext = useContext(ContextD);
    const nav = useNavigate();

    const loc = useLocation().state.data

    const currData = {
        name: DContext.entries[loc].name,
        age: DContext.entries[loc].age,
        course: DContext.entries[loc].course,
        batch: DContext.entries[loc].batch,
    }

    const handlechange = (e) => {
        currData[e.target.name] = e.target.value;
    }

    const HandleSubmit = () => {
        DContext.entries[loc] = currData;
        nav(-1);
    }
    return (
        <>

            <div className='center'>
                <div className='main'>
                <label> Name:  <input name="name" onChange={handlechange} placeholder={DContext.entries[loc].name}></input>
                </label>
                <label> Age: <input name="age" onChange={handlechange} placeholder={DContext.entries[loc].age} ></input>
                </label>
                </div>

                <div className='main'>
                <label>Course:  <input name="course" onChange={handlechange} placeholder={DContext.entries[loc].course}></input>
                </label>
                <label>Batch:   <input name="batch" onChange={handlechange} placeholder={DContext.entries[loc].batch}></input>

                </label>
                </div>
            </div>
            <div className='update'>
            <button onClick={HandleSubmit}>Update</button>
            </div>
        </>
    )
}

export default Edit