import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer  text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
            <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i> Rajkot , Gujarat , India</p>
            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i> suman.h.pankhaniya555@gmail.com</p>
            <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 9537043930</p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Cart</a>
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                  <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                  <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                  <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
               
                <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                <div id="icon">
                  <a href="https://www.linkedin.com/in/suman-pankhaniya-1286a2222" title="linkedin">
                    <h2><i class="fa-brands fa-linkedin" title="Viite Linkedin Profile"></i></h2>
                  </a>
                  <a href="https://github.com/SHP05" title="github">
                    <h2><i class="fa-brands fa-github" style={{ "color": "#10f000" }} title="Viite Github Profile"></i></h2>
                  </a>
                  <a href="https://instagram.com/s.p_5758?igshid=MzNlNGNkZWQ4Mg==" title="insta">
                    <h2><i class="fa-brands fa-instagram" style={{ "color": "#f000dc" }} title="Viite insta Profile"></i></h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row border-top mx-xl-5 py-4" style={{ "border-color": "rgba(256, 256, 256, .1) !important" }}>
          <div class="col-md-6 px-xl-0">
            <p class="mb-md-0 text-center text-md-left text-secondary">
              &copy; <a className="text-primary" href="#">Domain</a>. All Rights Reserved. Designed
              by
              <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="img/payments.png" alt="" />
          </div>
        </div>
      </div>



      <div class="footer" id="contact">
        <h1 class="py-5 mx-5">CONTACT ME</h1>
        <div class="d-flex">
          <h4><i class="fa-solid fa-envelope"></i></h4>&nbsp;
          <h5>suman.h.pankhaniya555@gmail.com</h5>
        </div>

        <div class="d-flex mb-5">
          <h4><i class="fa-solid fa-house"></i></h4>&nbsp;
          <h5>Rajkot , Gujarat , India</h5>
        </div>
        <div id="icon">
          <a href="https://www.linkedin.com/in/suman-pankhaniya-1286a2222" title="linkedin">
            <h2><i class="fa-brands fa-linkedin" title="Viite Linkedin Profile"></i></h2>
          </a>
          <a href="https://github.com/SHP05" title="github">
            <h2><i class="fa-brands fa-github" style={{ "color": "#10f000" }} title="Viite Github Profile"></i></h2>
          </a>
          <a href="https://instagram.com/s.p_5758?igshid=MzNlNGNkZWQ4Mg==" title="insta">
            <h2><i class="fa-brands fa-instagram" style={{ "color": "#f000dc" }} title="Viite insta Profile"></i></h2>
          </a>
        </div>
      </div>

    </>
  )
}

export default Footer;