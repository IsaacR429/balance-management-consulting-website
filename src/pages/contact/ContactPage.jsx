import { Link } from "react-router-dom";

import Container from "../../components/ui/Container.jsx";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-intro">
        <Container>
          <div className="contact-intro__grid">
            <div>
              <span className="section-eyebrow">CONTACT BMC</span>

              <h1>
                Let&apos;s start a
                <br />
                conversation.
              </h1>
            </div>

            <div className="contact-intro__copy">
              <p>
                Tell us about your business, technology or operational
                priorities. Our team will get in touch to understand where BMC
                can support you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-main">
        <Container>
          <div className="contact-panel">
            <aside className="contact-details">
              <div>
                <span className="contact-details__number">01</span>

                <p className="contact-details__eyebrow">
                  CONTACT DETAILS
                </p>

                <h2>
                  Connect directly
                  <br />
                  with BMC.
                </h2>

                <p className="contact-details__intro">
                  Speak with our team about your current priorities,
                  challenges and transformation plans.
                </p>
              </div>

              <div className="contact-details__items">
                <a
                  href="tel:+918828040046"
                  className="contact-detail"
                >
                  <div className="contact-detail__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5.6 3.7 8.3 3l2.1 5.1-2 1.4a15.8 15.8 0 0 0 6.1 6.1l1.4-2 5.1 2.1-.7 2.7a3 3 0 0 1-3 2.3C9.5 20.7 3.3 14.5 3.3 6.7a3 3 0 0 1 2.3-3Z" />
                    </svg>
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>+91 88280 40046</strong>
                    <small>India</small>
                  </div>
                </a>

                <a
                  href="mailto:info@balancemc.com"
                  className="contact-detail"
                >
                  <div className="contact-detail__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>info@balancemc.com</strong>
                    <small>General enquiries</small>
                  </div>
                </a>
              </div>

              <div className="contact-details__footer">
                <span>Balance Management Consulting</span>
              </div>
            </aside>

            <div className="contact-form-area">
              <div className="contact-form__heading">
                <div>
                  <span>02</span>
                  <p>SEND US A MESSAGE</p>
                </div>

                <h2>How can we help?</h2>
              </div>

              <form className="contact-form">
                <div className="contact-form__row">
                  <label>
                    <span>Name *</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label>
                    <span>Email *</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label>
                    <span>Contact No. *</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <label>
                    <span>Company Name *</span>
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Country Name *</span>

                  <select name="country" defaultValue="" required>
                    <option value="" disabled>
                      Select country
                    </option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label>
                  <span>Your message *</span>
                  <textarea
                    name="message"
                    rows="6"
                    required
                  />
                </label>

                <div className="contact-form__bottom">
                  <label className="contact-subscribe">
                    <input type="checkbox" name="subscribe" />
                    <span>Subscribe to BMC updates</span>
                  </label>

                  <button type="submit" className="contact-submit">
                    Submit
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-locations-link">
            <div>
              <span className="section-eyebrow">OUR LOCATIONS</span>

              <p>
                Looking for one of our offices?
              </p>
            </div>

            <Link to="/about#locations">
              View Our Locations
              <span>→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
