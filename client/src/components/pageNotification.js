import React from 'react'
import SidebarCandidat from './layout/sidebarCondidat';
import Header from './layout/header';
import toast, { Toaster } from 'react-hot-toast';
import { Tabs, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function P11() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.user);
    const hanleMarkAllRead = async()=>{
        try{
dispatch(showLoading())
const res= await axios.post('/api/v1/user/get-Notification', {userId:user._id},
{
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,

    },
}
);
dispatch(hideLoading())
if(res.data.success){
    message.success(res.data.message);
}
else{
    message.error(res.data.message);
}

        }
        catch(error){
console.log(error);
message.error("wrong");
        }
    };




  return (
    <div className='displ flex'>
    <div>  <SidebarCandidat/></div>
    <Toaster position='top-center' reverseOrder={false}></Toaster>
    <div className='layout '>
       <Header/>
       <div  className='flex c'>
    <div className='cardModif '>
    <div className='ml-10 mt-12 famly-layout'>Liste notification</div>
    <div className='d-flex justify-content-end'>
                    <h4 className='p-2' onClick={hanleMarkAllRead}>
                        Mark all read
                    </h4>

                </div>

    {user?.notification && user?.notification.map((notificationMgs) => (
        <div className='card' style={{ cursor: "pointer"}} >
            <div className='card-text'
            onClick={() => navigate(notificationMgs.onClickPath)}>
{notificationMgs.message}
            </div>

        </div>
    ))
}

</div>
</div>
       </div>
</div> 
 )
}


