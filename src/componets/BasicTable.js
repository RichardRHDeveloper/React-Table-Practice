import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { columns } from './headers'
import data from './../data/data.json'
import { Link } from 'react-router-dom'

const BasicTable = () => {
    const colums2 = useMemo(()=>columns,[]);
    const data2 = useMemo(()=>data,[]);

    const tableInstance = useTable({
        columns: colums2,
        data: data2 
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = tableInstance;

  return (
    <div className='flex justify-center flex-wrap w-full pt-6 box-border'>
        <div className='w-2/3 mb-5 '> 
            <Link to={'/'} className='rounder border px-5 py-2 bg-gray-600 text-white rounded-md text-xl'>Home</Link>
        </div>
        <table {...getTableProps()} className='border-collapse border border-slate-500 w-2/3 rounded-lg'>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th
                        {...column.getHeaderProps()}
                        className='border border-slate-600 bg-slate-400 text-white text-center'
                    >
                        {column.render('Header')}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                prepareRow(row);
                return (
                    <tr
                    {...row.getRowProps()}
                    className={`${
                        index % 2 === 0 ? 'bg-gray-300' : 'bg-white'
                    } rounded-lg`}
                    >
                    {row.cells.map((cell) => {
                        return (
                        <td
                            {...cell.getCellProps()}
                            className='border border-slate-700 text-center py-2'
                        >
                            {cell.render('Cell')}
                        </td>
                        );
                    })}
                    </tr>
                );
                })}
            </tbody>
            <tfoot >
                {footerGroups.map(footerGroup =>(
                    <tr {...footerGroup.getFooterGroupProps()} className='bg-slate-400'>
                        {footerGroup.headers.map(column=>(
                            <td {...column.getFooterProps()} className='border border-slate-600 bg-slate-400 text-white text-center'>{column.render('Footer')}</td>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table>
    </div>
  )
}

export default BasicTable