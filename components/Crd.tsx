import React from 'react'


 const Crd:React.FC<Crd> =({position, linker, content, description, title}) => {
  return (
    <div className='border border-[#e3d479f8] rounded-md flex  flex-grow justify-between flex-col items-center'>
        <CHeader title={title} position={position} descr ={description}  />
        <CBody content={content} />
        <CFooter linker={linker} />
    </div>
  )
}
const CHeader =({position, descr, title}:{position:number, descr:string, title:string}) =>{
    return <div >
        <h1 className='text-center font-extrabold text-[#e3d479f8]'>{position}.</h1>
        <h2 className='text-center text-white font-bold capitalize'>{title}</h2>
        <h3  className='text-center text-white font-semibold capitalize'>{descr}</h3>
    </div>
}
const CBody= ({content}:{content:string}) =>{
    return <p className='mx-1 p-2 grow text-white line-clamp-5 md:line-clamp-none '>{content}</p>
}
function CFooter({linker}:{linker:string}){
    return <div className='flex grow'></div>
    // <a className='border text-blue-500 px-2 py-1 rounded-lg max-w-max m-3  ' href="/contact"> {linker} </a>
}

export default Crd;