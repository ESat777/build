import React from 'react'
import logo from'../src/404.jpg';

function MissingPage() {
  return (
    
<div style={{ backgroundImage: `url(${logo})`,
              margin: "0.5rem",
              padding: "1rem",
              minHeight: "82vh",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: 'auto' }}
>
</div>
  )
}
export default MissingPage