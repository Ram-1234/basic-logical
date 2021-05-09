import React,{useState} from 'react';

export default function Object() {
    
    const [objdata,setObj]=useState();

    let arr=[
        {id : 4, name : 'abc'},
       {id : 10, name : 'ab2'},
       {id : 5, name : 'abc3'},
       {id : 6, name : 'abc5'}
         ]
    
     arr.sort(function(a,b){
         if(a.id<b.id) return -1;
         if(a.id>b.id) return 1;
         return 0;
     })  
     setObj(arr);


    return (
        <div>
            {objdata.map((val)=>{return(val)})}
        </div>
    )
}
