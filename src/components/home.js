import React from 'react'
import styled from 'styled-components'

const Card = styled.div`

`

const Darken = styled.div`
  &:after {
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.6);
  }
`

class Home extends React.Component {
  render() {
    return (
      <div style={{ "margin-top": "72px" }}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <Darken className="carousel-item active">
              <img src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" style={{ height: "400px", "object-fit": "cover" }} alt="carousel-1" />
              <div className="carousel-caption d-none d-md-block" style={{ top: "30%", zIndex: "1" }}>
                <h1 style={{ fontSize: "70px" }}>Welcome to Wearhouse</h1>
              </div>
            </Darken>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" style={{ height: "00px", "object-fit": "cover" }} alt="carousel-2" />
            </div>
          </div>
        </div>
        <h1 style={{ margin: "20px" }}>Our Products</h1>
        <div className="display">
          <div className="container mt-4">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              <Card>
                <div className="card">
                  <img src="https://www.flaticon.com/svg/vstatic/svg/1867/1867646.svg?token=exp=1619754960~hmac=0f1061bf27481800555ef92c24c13cd1" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src="https://www.flaticon.com/svg/vstatic/svg/1867/1867646.svg?token=exp=1619754960~hmac=0f1061bf27481800555ef92c24c13cd1" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src="https://www.flaticon.com/svg/vstatic/svg/1867/1867646.svg?token=exp=1619754960~hmac=0f1061bf27481800555ef92c24c13cd1" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src="https://www.flaticon.com/svg/vstatic/svg/1867/1867646.svg?token=exp=1619754960~hmac=0f1061bf27481800555ef92c24c13cd1" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="card">
                  <img src="https://www.flaticon.com/svg/vstatic/svg/1867/1867646.svg?token=exp=1619754960~hmac=0f1061bf27481800555ef92c24c13cd1" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <a href="#" className="btn btn-primary">500 Baht</a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
