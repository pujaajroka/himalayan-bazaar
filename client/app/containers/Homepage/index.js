/**
 *
 * Homepage
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import actions from "../../actions";
import banners from "./banners.json";
import CarouselSlider from "../../components/Common/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/Common/CarouselSlider/utils";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { BagIcon } from "../../components/Common/Icon";
import Slides from "../slides/slides";

class Homepage extends React.PureComponent {
 
  render() {
    return (
      <div className="homepage">
        <Row className="flex-row">
          <Col xs="12" lg="12" className="order-lg-2 mb-3 px-3 px-md-2">
            <div className="home-carousel">
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                 {banners.map((slide, i) => (
                  // <img key={index} src={item.imageUrl} />
                  <Slides slide={slide} key={i}/>
                ))}
              
              </CarouselSlider>
            </div>
          </Col>
        </Row>
        <div className="catagory">
          <div className="product-list">
             <div className="container-1">
                <div className="content-1">
                <h3>BEST SELLERS</h3>
                  <h4>The best production from us.</h4>
                <p>
                  A great fashion brand focuses not only on creating great designs
                  that are trendy and affordable but also on increasing its
                  profitability all the time.
                </p>
                </div>
              </div>
          </div>
          <div className="product-list">
         hi
          
          </div>
          <div className="product-list">HI</div>
          <div className="product-list">HI</div>
          <div className="product-list">HI</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
