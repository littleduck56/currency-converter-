import { useState,useEffect } from 'react'
import './index.css'
import './output.css'
import CurrInfo from './hook/useCurrinfo'

function App() {
  
  const [ans,setAns]=useState(0)
  const [amount,setAmount]=useState(1)

  const [from,setFrom]=useState('eur')
  const [to,setTo]=useState('inr')
  

  const curr=CurrInfo(from.toLowerCase())
  const opt=Object.keys(curr)
  
  console.log(opt)
  function calans(){
        setAns((amount*curr[to]).toFixed(2))
  }
  function swap(e){
  e.preventDefault()  
      const t=to
      const f=from 
      const a=ans
      const am=amount
      setFrom(t)
      setTo(f)
      setAmount(a)
      setAns(am)
      
      
  }
   useEffect(() => {
    calans();
  }, [amount, from, to, curr]);

  const [color, setColor] = useState('#ffffff'); // Default white
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>

     <div className="text-center my-5">
      <button
        onClick={() => setShowPicker(prev => !prev)}
        className="px-4 py-2 bg-black font-bold text-white rounded hover:bg-green-100 "
      >
        {showPicker ? 'Hide' : 'Pick'} Color
      </button>

      {showPicker && (
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="mt-4 ml-4 w-24 h-12 border-none cursor-pointer"
        />
      )}
    </div>
    
      <h1 className="my-5 bg-slate-500 text-orange-500 text-center font-bold ">
    currency conveter
  </h1>

      <div className='text-center my-5 py-5'>
        
        <form>
          <input type='number' className='bg-lime-200 text-white p-2 hover:bg-lime-300 mx-2' name='num1'
          value={amount}
          onChange={(e)=>setAmount(Number(e.target.value)
          )} 
          />

          <select className="rounded-lg px-2 mx-2 py-1 bg-gray-100 cursor-pointer outline"
          value={from} onChange={(e)=>setFrom(e.target.value)} name='s1'>
            {opt.map((curr)=>{
              return(
                <option key={curr} value={curr}>
                {curr.toUpperCase()}
              </option>
              )
            })}
          </select>
          <br></br>
          <br></br>
          <button type='button' name='swap'
          className=' mb-5  p-2 bg-green-500 hover:bg-red-700 text-white font-bold border-5' onClick={swap}>swap</button>
          <br></br>

          <input type='number' className='bg-emerald-200 p-2 hover:bg-emerald-400' value={ans} name='num2' readOnly/>

          <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline"
          value={to} onChange={(e)=>setTo(e.target.value)} name='s2'>
            {opt.map((curr)=>{
              return(
                <option key={curr} value={curr}>
                {curr.toUpperCase()}
              </option>
              )
            })}
          </select>
          <br></br>
        </form>
      </div>
    </>
  )
}

export default App
