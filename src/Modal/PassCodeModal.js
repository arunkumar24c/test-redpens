import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const PassCodeModal = (props) => {
    const [passcode, setPasscode] = useState('');
    
    console.log(props.value)

     const navigate = useNavigate()
     const handleSubmit = async (e) => {

    e.preventDefault();

    const payload = {
        "pass_code": passcode
      };
      axios
          .post(`${process.env.REACT_APP_SERVER_BASE_URL}/verify-pass-code`, payload)
          .then((response) => {
             if(response.data.status) {
                    navigate('/shoppackages', {state: props.value}  )
                    
             }  
             else{
                alert('Invalid pass code')
             }
          });
       

          
    // do something
    console.log(passcode);
  

    setPasscode('')
  };
  return (
    <>
       <div className={props.active ? 'fixed z-50 inset-0 bg-brnd-dark-blue/30 flex justify-center items-center' : 'hidden'}>
                <div className={props.active ? 'w-5/6 sm:w-2/3 md:w-3/5 lg:w-2/5 h-2/6 md:h-2/6 flex justify-center flex-col bg-brnd-white relative rounded-md' : 'hidden'}>

                    <img onClick={ props.Handler}  className='right-3 top-3 absolute m-1 w-4 h-4 cursor-pointer' src="/assets/images/cross.png" alt=""/>
                    
                   
                   <div >
                   <form className='flex flex-col px-20 space-y-5 justify-center'  onSubmit={handleSubmit}>

                    <label htmlFor="passcode" className='text-xl font-semibold'>Enter Pass Code</label>
                    <input type="text" name="" value={passcode} onChange={(e) => setPasscode(e.target.value)} id="passcode" className='border py-2 px-3 border-slate-500 rounded-sm' />
                    <button className='bg-brnd-red text-white py-2 px-4 w-fit text-sm'>Submit</button>
                    </form>
                   </div>

                </div>
            </div>
    
    
    </>
  )
}

export default PassCodeModal