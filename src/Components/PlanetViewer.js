import React from 'react'

function PlanetViewer({planet}) {
    return (
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mb-5" >
        <div className="card">
        <div className="card-header">
          {planet.name}
        </div>
        <p className="card-text">{planet.population}</p>
      </div>
      </div>
        
    )
}

export default PlanetViewer
