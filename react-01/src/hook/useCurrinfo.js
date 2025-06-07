
import { useEffect, useState } from "react"
function CurrInfo(curr){

        const [data,setData]=useState({})
        useEffect(()=>{
            fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr.toLowerCase()}.json`
            ).
            then(res=> res.json())
            .then(json=>setData(json[curr.toLowerCase()])
            )
        },[curr])

        return data;

}


export default CurrInfo