import React from 'react'

function ItemDropDown(props) {
    console.log(props.List)
  return (
    <div>
        <div className="dropdown">                                                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expande  d="false">                                                                             Dropdown button                                                                   </button>                       
            <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">                                                           
             <a className="dropdown-item" href="#">Foo</a>                                  
             <a className="dropdown-item" href="#">Thing</a>                          
             <a className="dropdown-item" href="#">Something</a>
             <a className="dropdown-item" href="#">Dudes</a>
             <a className="dropdown-item" href="#">Birds</a>
             <a className="dropdown-item" href="#">Nikes</a>
             <a className="dropdown-item" href="#">Marsh mellows</a>                                        <a className="dropdown-item" href="#">Apples</a>                                                <a className="dropdown-item" href="#">Dingles</a>                                              <a className="dropdown-item" href="#">Berries</a>                                              <a className="dropdown-item" href="#">What not</a>                                              <a className="dropdown-item" href="#">Something else here</a>                                  <a className="dropdown-item" href="#">Action</a>                                                <a className="dropdown-item" href="#">Another action</a>                                        <a className="dropdown-item" href="#">Something else here</a>                     
           </div>                                                            

        
       
        <ul className="dropdown-menu pre-scrollable" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
            </ul>
      
        
        
           </div>   
    </div>
  )
}

export default ItemDropDown