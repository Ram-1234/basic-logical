import { useState, useEffect } from 'react';
import Array1 from './Question1/Array';
import Array2 from './Question2/Array';
import Array3 from './Question3/Array';
import Apps from './Question5/Apps';
import APID from './Question4/Api';


let App=()=>{
    const [apidata,setApi]=useState([]);
    const [arr]=useState([1,2,3,4,5,6,7,8,9,10])
    const [ele,setElement]=useState([])
        useEffect (()=>{
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2===0){
                setElement((s)=>{
                    return([...s,arr[i]])
                })
            }
        }
    },[arr])
 
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(jes=>jes.json())
      .then(data=>setApi(data))
    },[]);
    
    console.log(apidata);
    const data4=apidata.map((val)=> <APID key={val.id} name={val.name} username={val.username} email={val.email} />)

    return (
        <>
      <h2>Answer-1</h2>
       <Array1 data={ele}/>
       <h2>Answer-2</h2>
       <Array2 />
       <h2>Answer-3</h2>
       <Array3 />
       <h2>Answer-4</h2>
      <p><strong>Note:</strong> I have used placeholder api,your provided api is not accessible from my end.</p>
       {data4}
       <h2>Answer-5</h2>
       <Apps /> 
        </>
    )
}
export default App;