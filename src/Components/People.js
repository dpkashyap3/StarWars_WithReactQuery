import React,{useState } from 'react'
import {usePaginatedQuery} from "react-query"
import {BounceLoader} from "react-spinners"
import {css} from "@emotion/core"
import PersonViewer from './PersonViewer'
import Page from "./Pagination"
const fetchPeople=async(key,pageNumber)=>{
    
    const res=await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    return res.json();
}

const loadingCss=css `margin:auto; `
  

function People() {
const [page, setpage] = useState(1)
const {resolvedData,latestData,status}=usePaginatedQuery(["people",page],fetchPeople)

console.log(resolvedData)
    return (
        <div>
        <h3 className="display-3 text-center">People</h3>
         {status==="error" &&(<div>Error Loading Data</div>)}
         {status==="loading" &&(<BounceLoader css={loadingCss} loading size={130} color="teal"/>)}
         {status==="success" &&(<div>
            <Page setpage={setpage} count={resolvedData.count} page={page} latestData={latestData}/>

            <div className="row">
            {
               resolvedData.results.map(person=>(
                  <PersonViewer key={person.url} person={person}/>
               )
               )}
            </div>
            
        </div>
       ) }
        
        </div>
    
    )
}

export default People
