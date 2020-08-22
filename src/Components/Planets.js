import React from 'react'
import {useQuery} from "react-query"
import {BounceLoader} from "react-spinners"
import {css} from "@emotion/core"
import PlanetViewer from './PersonViewer'

const fetchPlanet=async(key,greet,pageNumber)=>{
    const res=await fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
    return res.json();
}

const loadingCss=css `margin:auto; `


function Planets() {
const {data,status}=useQuery(["planets","Hello World",2],fetchPlanet)

console.log(data);
    return (
        <div>
        <h3 className="display-3 text-center">Planets</h3>
         {status==="error" &&(<div>Error Loading Data</div>)}
         {status==="loading" &&(<BounceLoader css={loadingCss} loading size={130} color="teal"/>)}
         {status==="success" &&(
            <div className="row">
            {
               data.results.map(planet=>(
                   <PlanetViewer key={planet.url} planet={planet}/>
               )) 
               
            }
            </div>
            )}

        </div>
    )
}

export default Planets
