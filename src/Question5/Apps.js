import React,{useState} from 'react';
import './styles.css';

export default function Apps() {
    
    const [objdata,setObj]=useState([
        {id : 4, name : 'abc'},
       {id : 10, name : 'ab2'},
       {id : 5, name : 'abc3'},
       {id : 6, name : 'abc5'}
         ]);

    

      const   itemSortid=()=>{
         let copylist=[...objdata];
         copylist.sort((a,b)=>a.id<b.id ? -1 : 1)
         console.log(copylist);
        setObj(copylist);
      }

      const   itemSortname=()=>{
        let copylist=[...objdata];
        copylist.sort((a,b)=>a.name<b.name ? -1 : 1)
        console.log(copylist);
       setObj(copylist);
     }

      
     
    return (
        <div>
          
           {objdata.map((val)=>{
             return(
             <>
             <div className="sortItem">
             <p>Id: {val.id}</p>
             <p>name: {val.name}</p>
             </div>
             </>
             )
           })}
          
            <button onClick={itemSortid} >sort by id</button>
            <button onClick={itemSortname} >sort by name</button> 
            {/* <h1>Hello world</h1> */}
        </div>
    )
}
