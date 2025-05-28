import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-intro">
        Have questions, feedback, or need support? We’re here to help. Reach out to Crytotec and we’ll get back to you as soon as possible.
      </p>

      <div className="contact-details">
        <div className="contact-info">
          <h2>📍 Our Office</h2>
          <p>12 Flavor Street, Ikeja, Lagos, Nigeria</p>
        </div>
        <div className="contact-info">
          <h2>📞 Call Us</h2>
          <p>+234 812 345 6789</p>
        </div>
        <div className="contact-info">
          <h2>📧 Email</h2>
          <p>support@crytotec.com</p>
        </div>
        <div className="contact-info">
          <h2>⏰ Business Hours</h2>
          <p>Mon - Sat: 9AM – 8PM</p>
        </div>
      </div>

      <form
        className="contact-form"
        action="https://formsubmit.co/seyioladimeji790@gmail.com"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value.trim();

          if (name) {
            alert('✅ Success! Message sent to seyioladimeji790@gmail.com');
            form.submit(); // Submit the form after showing alert
          } else {
            alert('❌ Error: Name is required.');
          }
        }}
      >
        <h2>Send Us a Message</h2>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://crytotecfood.com/thank-you" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
