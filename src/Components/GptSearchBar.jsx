import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'


const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
 

  return (
    <div className='pt-28 flex justify-center '>
      <form className='   p-2  font-["Neue_Montreal"]'>
      
      <input type="text" className='  p-2 border-2 border-black m-2 outline-blue-500 w-[30vw] px-8 tracking-extra-wide' placeholder={lang[langKey].GptSearchPlaceholder}/>
             <button className='bg-red-600 rounded-md py-3 px-6 '  type='button'>{lang[langKey].search}</button>
         


        </form>
         
        
    </div>
  )

}

export default GptSearchBar