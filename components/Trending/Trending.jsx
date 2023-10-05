'use client'

import React, { useState, useRef } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { GrCheckmark } from 'react-icons/gr'

const Trending = ({text}) => {

  const [opt, setOpt] = useState([{item: 'Trending', selected: true}, {item: 'new', selected: false}])
    
  const [options, setOptions] = useState(opt[0])
  
  const handleSelect = (i) => {
    const newOptions = opt.map((item, index) => {
      if (index === i) {
        return {...item, selected: true}
      } else {  
        return {...item, selected: false}
      }
    })
    setOpt(newOptions)
    setOptions(opt[i])
  }

  const trendingOptions = useRef(null)
  const selectIconRef = useRef(null)

  const showOptions = (e) => {
    trendingOptions.current.classList.remove('hidden')    
    selectIconRef.current.classList.add('rotate-180')
  }

  const selectOptions = (e) => {
    trendingOptions.current.classList.add('hidden')
    selectIconRef.current.classList.remove('rotate-180')
    
  }
  
  return (
    <div className='relative mb-5'>

      <div className="mt-16 mb-5 flex flex-col justify-start items-start px-5 w-full absolute -z-10">
        <div className='flex justify-between items-center w-full bg-white'>
          <div className="text-2xl text-gray-800">
            <h4 className='capitalize'>{text}</h4>
          </div>

        
          <div className="h-12 border rounded-md flex justify-center items-center py-1 px-3 text-base text-gray-500 gap-2 bg-white" onClick={(e) => showOptions(e)}>
            <span>{options.item}</span>
            <div ref={selectIconRef}>
              <MdOutlineKeyboardArrowDown size={20} className='text-gray-400'/>

            </div>
          </div>

        </div>

        <div className='hidden flex-col border rounded-md p-3 w-32 self-end mt-1 bg-white' ref={trendingOptions} onClick={(e) => selectOptions(e)}>
          {opt.map((item, i) => (
            <div key={i}  className='flex flex-col gap-5'>
              <div className="text-base font-medium cursor-pointer hover:text-gray-700 flex justify-between items-center gap-3" style={{color: item.selected ? "black" : "GrayText"}} onClick={() => handleSelect(i)}>
                <span>{item.item}</span>
                {item.selected && <GrCheckmark />}
              </div> 

              <div>
                {i !== opt.length - 1 && (
                  <div className="border-b border-gray-200 mb-3"/>    
                )}
              </div>
                


            </div>
          ))}
        </div>
          


        



      </div>
    </div>
  )
}

export default Trending