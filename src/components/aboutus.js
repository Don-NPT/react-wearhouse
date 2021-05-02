import React from 'react'

class Aboutus extends React.Component{
    render(){
      return(
        <div class="container" style={{"margin-top":"112px"}}>
            <h1  style={{margin: "3rem"}}>Our Team</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card">
                    <img src="sing.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mr.Natthachimongkol Chayaopathum</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="yoko.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Miss Nattaprapa Pinjarern</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="pop.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Miss Patthita Somboonyingsuk</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="don.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mr.Napat Sutthiwong</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  export default Aboutus;