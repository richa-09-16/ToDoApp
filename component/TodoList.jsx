// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
   
    function addActivity() {

        //setlistData([...listData, activity])
        console.log(listData)

        setlistData((listData) => {
            const updatedList = [...listData, activity]
            console.log(updatedList)
            setActivity('')
            return updatedList
        })
    }

    function removeActivity (i) {
        const updatedListData = listData.filter((ele, id) => {
            return i!=id;
        })
        setlistData(updatedListData);
            
    }
    function removeAll() {
        setlistData([])
    }
    
  return (
  <>
  <div className='container bg-orange-300 text-2xl py-4 px-3 max-md:mx-5'>
    <div className='header'>
        <h1 className='text-4xl bg-black'>To Do List</h1></div>

    <input className='text-3xl bg-black font-bold justify-center text-orange-400'
    type='text'
    placeholder='Add Activity'
    value={activity}
    onChange={(e) =>setActivity(e.target.value)}
    />

    <button className='font-bold text-red-700' onClick={addActivity}>Add</button>

    <p className='list-heading bg-orange-950 text-white py-2'><h1 
    className='text-2xl font-serif font-bold mx-10'>Here is your list :{")"}</h1></p>

    {listData!=[] && listData.map((data, i) =>{
        return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'>
                <button className='bg-gray-500 font-bold hover:bg-pink-400' 
                onClick={() => removeActivity(i)}>
                    Remove(-)</button>
                </div>
            </p>
            <br />
            </>
        )
    })}
    {listData.length>=1 &&
    <button className='bg-gray-500 font-bold hover:bg-pink-400'
     onClick={removeAll}>Remove All</button>}
  </div>
   </>
  )
}

export default TodoList
