import React from 'react';

function HoliDatePage() {
  return (
    <div className="holidate-page">
      <header className="holidate-header">
        <h1>HoliDate</h1>
      </header>
      <main className="holidate-main">
        <section className="registration-form">
          <h2>Create an account and get started with your journey!</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            {/* Replace with a date picker component */}
            <input type="date" id="dateOfBirth" name="dateOfBirth" required />
            <label htmlFor="location">Location:</label>
            {/* Replace with a dropdown or map-based input */}
            <input type="text" id="location" name="location" required />
            <button type="submit">Create Account</button>
          </form>
        </section>
        <section className="about-holidate">
          <img src="..." alt="HoliDate image or video" /> {/* Replace with your image or video URL */}
          <p>Connect to new people through new places!</p> {/* Replace with your tagline or description */}
        </section>
      </main>
      <footer className="holidate-footer">
        {/* Add footer content here (optional) */}
      </footer>
    </div>
  );
}

export default HoliDatePage;
