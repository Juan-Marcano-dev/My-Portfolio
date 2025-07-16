import "./styles/contactForm.scss";

const ContactSection = () => {
  return (
    <section className="contact_us" id="contactMe">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="contact_inner">
              <div className="row">
                <div className="col-md-10">
                  <div className="contact_form_inner">
                    <form
                      className="contact_field"
                      action="https://formsubmit.co/juan.marcano.dev@gmail.com"
                      method="POST"
                      target="_blank"
                    >
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_subject"
                        value="Nuevo mensaje desde el portafolio"
                      />
                      <input type="hidden" name="_template" value="box" />

                      <h3>Contact me</h3>
                      <p>
                        Are you interested in my profile? Let's achieve great
                        things together!
                      </p>

                      <input
                        type="text"
                        className="form-control form-group"
                        name="name"
                        placeholder="Name"
                        required
                      />
                      <input
                        type="email"
                        className="form-control form-group"
                        name="email"
                        placeholder="Email"
                        required
                      />
                      <textarea
                        className="form-control form-group"
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>

                      <button type="submit" className="contact_form_submit">
                        Send
                      </button>
                    </form>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="side-column"></div>
                </div>
              </div>

              <div className="contact_info_sec">
                <h4>Contact Info</h4>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-headset"></i>
                  <span>+51 930 552 074</span>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-envelope-open-text"></i>
                  <span>juan.marcano.dev@gmail.com</span>
                </div>
                <div className="d-flex info_single align-items-center">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
