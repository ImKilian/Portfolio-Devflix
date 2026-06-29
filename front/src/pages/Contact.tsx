import { useState } from 'react';
import type { FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis :', form);
  };

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <div className="contact-form-wrapper">
          <h2>Contactez-moi</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Votre email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Votre message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn-submit">Envoyer</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
