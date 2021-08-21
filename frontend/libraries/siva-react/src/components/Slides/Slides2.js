import React from 'react'
import {Carousel} from 'react-bootstrap'

import img2 from '../../assets/img/rrr2.jpg'
import img3 from '../../assets/img/kgf.jpg'
import img4 from '../../assets/img/kgf2.jpg'


function Slides2() {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default Slides2
