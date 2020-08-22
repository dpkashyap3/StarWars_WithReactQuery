import React from 'react'

function PersonViewer({person}) {
    
    return (
        
          <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mb-5" >
          <div className="card bg-secondary text-white">
          <div className="card-header bg-dark">
            <h2>{person.name}</h2>
          </div>
          <p className="card-text text-center">Gender:-{person.gender.toUpperCase()}</p>
          <p className="card-text text-center">Height:-{person.height}cms</p>
          <p className="card-text text-center">Weight:-{person.mass}kg</p>
          <p className="card-text text-center">Skin Color:-{person.skin_color.toUpperCase()}</p>
          <h4 className="card-text text-center" style={{"color":person.eye_color,"textShadow":"2px 2px 2px white"}}><b>Skin Color:-{person.eye_color.toUpperCase()}</b></h4>
        </div>
        </div>
         
    )
}

export default PersonViewer
