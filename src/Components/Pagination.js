import React from 'react'


function Pagination({page,setpage,latestData,count}) {
 
  
    let pages,index,seq=[]; 
    pages=Math.ceil(count/10);

    for(index = 0; index < pages; index++) {
      seq=[...seq,index+1]
    }
   console.log(seq)

    return (
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><button className="page-link" onClick={()=>setpage(old=>Math.max(old-1,1))} disabled={page===1}>Previous</button></li>
   {
    seq.map(item=>(
      <li key={item} className="page-item"><button className="page-link" onClick={()=>setpage(item)}>{item}</button></li>
    ))
    
   }
    <li className="page-item"><button className="page-link" onClick={()=>setpage(old=>(!latestData||!latestData.next?old:old+1))}>Next</button></li>
  </ul>
</nav>
    )
}

export default Pagination
