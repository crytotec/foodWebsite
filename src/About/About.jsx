import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Crytotec</h1>
      <p className="about-text">
        Welcome to <strong>Crytotec</strong> — your trusted companion in discovering flavorful dishes and fast food delivery. 
        At Crytotec, we are passionate about bringing quality meals to your doorstep, made with fresh ingredients, authentic recipes, 
        and delivered with care.
      </p>

      <p className="about-text">
        Our journey began with a simple mission: to make delicious food easily accessible for everyone. Whether you're craving local delicacies, 
        fast food, or healthy options, we’ve got you covered. With a user-friendly platform, safe payment options, and reliable delivery, 
        we ensure that your food experience is convenient and satisfying.
      </p>

      <p className="about-text">
        At Crytotec, we don’t just deliver food — we deliver happiness, comfort, and a taste of home.
      </p>

      <div className="about-highlight">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🕒 Fast and reliable delivery</li>
          <li>🍽️ A variety of mouthwatering dishes</li>
          <li>💳 Secure payment methods</li>
          <li>📍 Serving homes, offices, and events across Nigeria</li>
          <li>🌿 Quality ingredients and hygienic preparation</li>
        </ul>
      </div>

      <p className="about-end">
        Join thousands of satisfied customers who trust Crytotec for a satisfying meal experience.
        <br />We’re not just a food ordering platform — we’re a lifestyle.
      </p>
    </div>
  );
}

export default About;
