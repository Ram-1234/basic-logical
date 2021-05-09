import React,{useState,useEffect} from 'react'

export default function Array() {
 
const [datavalue,setData]=useState();

var arr=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];

useEffect(()=>{
    let max=0;
    let c=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            c++;
        }else{
            c=0;
        }
        if(c>max){
            max=c;
        }
    }
    setData(max);
},[datavalue]);


    return (
        <div>
           {datavalue} 
        </div>
    )
}
