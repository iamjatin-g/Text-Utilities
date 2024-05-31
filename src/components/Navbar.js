import React from 'react';
export default function Navbar(props) {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <button className="btn btn-outline-dark mx-3">
                    <i className="fa-solid fa-t"><i className="fa-solid fa-u"></i></i>
                    </button>
                    {props.title}
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">
                            <button type="button" className="btn btn-outline-dark mx-3">Utilities</button>
                            
                        </a>
                        <a className="nav-link" href="/">
                            <button type="button" className="btn btn-outline-dark mx-3">Typing Test</button>
                        </a>
                        {/* <a className="nav-link" href="/">
                            <button type="button" className="btn btn-outline-dark mx-3">Contact</button>
                        </a> */}
                    </div>

                    {/* <button className="btn btn-outline-dark d-flex mx-4 my-2 p-2" title='Enable Light Mode'><i className="fa-regular fa-sun mx-1"></i></button> */}
                    <button className="btn btn-outline-dark d-flex mx-4 my-2 p-2" title='Enable Dark Mode'><i className="fa-regular fa-moon mx-1"></i></button>
                </div>
            </div>
        </nav>
        
        
    </>
    
  )
}

