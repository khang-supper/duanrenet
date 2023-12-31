export const Slide = () => {
  return (
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* shop */}
              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop01.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      Laptop
                      <br />
                      Collection
                    </h3>
                    <a href="#" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* /shop */}
              {/* shop */}
              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop03.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      Accessories
                      <br />
                      Collection
                    </h3>
                    <a href="#" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* /shop */}
              {/* shop */}
              <div className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img src="./img/shop02.png" alt="" />
                  </div>
                  <div className="shop-body">
                    <h3>
                      Cameras
                      <br />
                      Collection
                    </h3>
                    <a href="#" className="cta-btn">
                      Shop now <i className="fa fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* /shop */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        <div className="row">
          {/* section title */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">product</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className="active">
                    <a data-toggle="tab" href="#tab1">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab1">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab1">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab1">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /section title */}
          {/* Products tab & slick */}
          {/* Products tab & slick */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
    
  );
};
