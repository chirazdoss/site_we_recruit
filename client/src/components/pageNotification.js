import React from 'react'
import SidebarCandidat from './layout/sidebarCondidat';
import Header from './layout/header';

export default function P11() {

    


  return (
    <div className='displ flex'>
    <div>  <SidebarCandidat/></div>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <div className='layout '>
       <Header/>
       <div  className='flex c'>
    <div className='cardModif '>
    <div className='ml-10 mt-12 famly-layout'>Liste notification</div>
  
</div>
</div>
       </div>
</div> 
 )
}


