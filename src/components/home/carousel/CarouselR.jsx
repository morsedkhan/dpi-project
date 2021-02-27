import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
// requires a loader

import img from '../../../assets/dpi pictures/Slider pic/slide-1.jpg'
import img1 from '../../../assets/dpi pictures/Slider pic/slide-2.jpg'
import img2 from '../../../assets/dpi pictures/Slider pic/slide-3.jpg'

const CarouselR = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{height:'500px'}}
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselR;





// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import img from '../../../assets/Homepage-Banner-04.png'

// class CarouselR extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src={img} />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src={img} />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src={img} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// }


// ReactDOM.render(<CarouselR />, document.querySelector('.demo-carousel'));