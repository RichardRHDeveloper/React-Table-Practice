import React from 'react'
import { Link } from 'react-router-dom';

const pagetables = [
    {
    name: "Tabla Basica",
    url:"basicTable"
    },
    {
        name: "Tabla Basica",
        url:"basicTable"
    },
    {
        name: "Tabla Basica",
        url:"basicTable"
    },
    {
        name: "Tabla Basica",
        url:"basicTable"
    }
];

const Home = () => {
  return (
    <div className='p-5'>
        <h1>Tables practice</h1>
        <div className='grid grid-cols-4 gap-4 box-border'>
            {pagetables.map((page)=>(
                <div className='p-4 shadow-md flex flex-wrpa justify-between content-center border hover:scale-105 duration-300 ease-out'>
                    <h2 className='pt-2'>{page.name}</h2>
                    <Link to={page.url} className='bg-gray-200 px-4 py-1 rounded-md'>Ver más...</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home