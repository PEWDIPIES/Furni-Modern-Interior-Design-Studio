import React from "react";
import product3 from "/src/assets/images/product-3.png";
import cross from "/src/assets/images/cross.svg";
import product1 from "/src/assets/images/product-1.png";
import cross1 from "/src/assets/images/cross.svg";
import cross2 from "/src/assets/images/cross.svg";
import products3 from "/src/assets/images/product-3.png";
import cross3 from '/src/assets/images/cross.svg'
import produc4 from '/src/assets/images/product-3.png'
import cross4 from "/src/assets/images/cross.svg";
import produc5 from '/src/assets/images/product-1.png'
import cross5 from '/src/assets/images/cross.svg'
import produc6 from '/src/assets/images/product-2.png'



const Productsection = () => {
  return (
    <div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={product3}
                  class="img-fluid product-thumbnail"
                  alt="Product 3"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={cross} alt="Cross Icon" class="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={product1}
                  class="img-fluid product-thumbnail"
                  alt="Product 1"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={cross1} alt="Cross Icon" class="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src="/src/assets/images/product-2.png"
                  className="img-fluid product-thumbnail"
                  alt="Product 2"
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src={cross2} alt="Cross Icon" class="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={products3}
                  class="img-fluid product-thumbnail"
                  alt="Product 3"
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img
                  src={cross3}
                  alt="Cross Icon"
                    class="img-fluid"
                  />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={produc4}
                  class="img-fluid product-thumbnail"
                  alt="product3"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img
                  src={cross4}
                  className="img-fluid"
                    alt="crossimg"
                  />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={produc5}
                  class="img-fluid product-thumbnail"
                  alt="product1"
                />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img
                  src={cross5}
                  className="img-fluid"
                  />
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={produc6}
                  className="img-fluid product-thumbnail"
                  alt="proudct2"
                />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img
                       src={cross3}
                    alt="crossimg"
                    class="img-fluid"
                  />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                       src={product3}
                       class="img-fluid product-thumbnail"
                  alt="product3"
                />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$46.00</strong>

                <span className="icon-cross">
                  <img
                       src={cross1}
                       alt="crossimg"
                    class="img-fluid"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsection;
