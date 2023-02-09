import React, { useEffect, Fragment } from "react";
import "./Home.css"
import { useSelector, useDispatch } from "react-redux";
import Marquee from "react-fast-marquee";
// import BlogCard from "../components/BlogCard";
import ProductCard from "../components/Products/ProductCard";
import SpecialProduct from "../components/Products/SpecialProduct";
import { getProductHome, clearErrors } from "../actions/productAction";
import { useAlert } from "react-alert";
import Loader from "../components/Loader/Loader";
const Home = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { products, loading, error } = useSelector((state) => state.products);

 
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductHome());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section className="home-wrapper-1">
            <div className="container-xxl">
              <div className="main-banner d-flex justify-content-between align-items-center gap-10">
                <div className=" col-6 main-banner-col-1">
                  <div className="position-relative">
                    <img
                      src="images/main-banner-1.jpg"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="main-banner-content position-absolute">
                      <h4>SUPERCHARGED FOR PROS</h4>
                      <h5>Ear Buds</h5>
                      <p>
                        From ${99} <br />
                        or ${parseInt(99 / 2)}/mo <br />{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 main-banner-col-2">
                  <div className="d-flex flex-wrap gap-10  align-items-center">
                    <div className="small-banner position-relative">
                      <img
                        src="images/catbanner-01.jpg"
                        className="img-fluid rounded-3"
                        alt="main banner"
                      />
                      <div className="small-banner-content position-absolute">
                        <h4>BEST SELL</h4>
                        <h5>Laptop</h5>
                        <p>
                          From $600 <br />
                          or ${parseInt(600 / 2)}/mo
                        </p>
                      </div>
                    </div>
                    <div className="small-banner position-relative">
                      <img
                        src="images/catbanner-02.jpg"
                        className="img-fluid rounded-3"
                        alt="main banner"
                      />
                      <div className="small-banner-content position-absolute">
                        <h4>NEW ARRIVAL</h4>
                        <h5>Smart Watch</h5>
                        <p>
                          From $40 <br /> or ${parseInt(40 / 2)}/mo
                        </p>
                      </div>
                    </div>
                    <div className="small-banner position-relative">
                      <img
                        src="images/catbanner-03.jpg"
                        className="img-fluid rounded-3"
                        alt="main banner"
                      />
                      <div className="small-banner-content position-absolute">
                        <h4>10% Off</h4>
                        <h5>Tablet</h5>
                        <p>
                          From $150 <br />
                          or ${parseInt(150 / 2)}/mo
                        </p>
                      </div>
                    </div>
                    <div className="small-banner position-relative">
                      <img
                        src="images/catbanner-04.jpg"
                        className="img-fluid rounded-3"
                        alt="main banner"
                      />
                      <div className="small-banner-content position-absolute">
                        <h4>20% Off</h4>
                        <h5>Headphone</h5>
                        <p>
                          From $50 <br />
                          ${parseInt(50 / 2)}/mo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home-wrapper-2 py-4">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="services d-flex align-items-center justify-content-between">
                    <div className="d-flex gap-15 services-item">
                      <img src="images/service.png" alt="services" />
                      <div>
                        <h6>Free Shipping</h6>
                        <p className="mb-0">From all orders over $5</p>
                      </div>
                    </div>
                    <div className="d-flex gap-15 services-item">
                      <img src="images/service-02.png" alt="services" />
                      <div>
                        <h6>Daily Surprise Offers</h6>
                        <p className="mb-0">Save upto 25% off</p>
                      </div>
                    </div>
                    <div className="d-flex gap-15 services-item">
                      <img src="images/service-03.png" alt="services" />
                      <div>
                        <h6>Support 24/7</h6>
                        <p className="mb-0">Shop with an expert</p>
                      </div>
                    </div>
                    <div className="d-flex gap-15 services-item">
                      <img src="images/service-04.png" alt="services" />
                      <div>
                        <h6>Affordable Prices</h6>
                        <p className="mb-0">Get Factory Default Price</p>
                      </div>
                    </div>
                    <div className="d-flex gap-15 services-item">
                      <img src="images/service-05.png" alt="services" />
                      <div>
                        <h6>Secure Payment</h6>
                        <p className="mb-0">100% Protected Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home-wrapper-2 py-3">
            <div className="container-xxl">
              <div className="row">
              <div className="col-12">
                  <h3 className="section-heading">Categories</h3>
                </div>
                <div className="col-12">
                  <div className="categories d-flex justify-content-between align-items-center flex-wrap p-2">
                    {products && products.map((product)=>(
                       <div className="d-flex align-items-center">
                        <div>
                          <h6>{product.name}</h6>
                          <p>{product.stock} Items</p>
                        </div>
                        <img src={product.images[0].url} className="img-fluid category-img" alt="category"/>
                       </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home-wrapper-2 featured-wrapper py-3">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section-heading">Featured Collection</h3>
                </div>
                <div className="home-featured-products">
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          </section>

          <section className="home-wrapper-2 special-wrapper py-3">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section-heading">Special Products</h3>
                </div>
              </div>
              <div className="row special-product">
                {products &&
                  products.map((product) => (
                    <SpecialProduct key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </section>

          <section className="home-wrapper-2 popular-wrapper py-3">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section-heading">Our Popular Products</h3>
                </div>
              </div>
              <div className="home-popular-products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
            </div>
          </section>

          <section className="home-wrapper-2 marque-wrapper py-3">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="marque-inner-wrapper card-wrapper">
                    <Marquee className="d-flex marquee">
                      <div className="mx-4 w-25">
                        <img src="images/brand-01.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-02.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-03.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-04.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-05.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-06.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-07.png" alt="brand" />
                      </div>
                      <div className="mx-4 w-25">
                        <img src="images/brand-08.png" alt="brand" />
                      </div>
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="home-wrapper-2 blog-wrapper py-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section-heading">Our Latest Blogs</h3>
                </div>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </section> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
