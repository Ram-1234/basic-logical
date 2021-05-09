import React,{useState,useEffect} from 'react';

export default function Array() {
    const [duplicate,setDuplicate]=useState();
    var arr=[0,1,2,3,4,5,6,7,7,8,9,10];

    useEffect(()=>{
      let dupl=0;
      for(let i=1;i<arr.length;i++){
          if(arr[i]===arr[i-1]){
              dupl=arr[i];
              break;
          }
      }
      setDuplicate(dupl);
    },[arr])
    
    return (
        <div>
            <p>{duplicate}</p>
        </div>
    )
}
