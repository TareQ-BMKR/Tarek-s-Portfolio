import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import "../CssFiles/home.css";

const ContactForm = () => {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xvzvkgpr", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(null), 5000); // Reset status after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-wrapper">
      <motion.form 
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="form-group">
          <label htmlFor="name"><User size={18} /> Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email"><Mail size={18} /> Email Address</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message"><MessageSquare size={18} /> Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Let's build something amazing together..." required></textarea>
        </div>
        
        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <><Loader2 className="animate-spin" /> SENDING...</>
          ) : (
            <>SEND MESSAGE <Send size={20} /></>
          )}
        </button>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircle size={20} /> Thank you! Your message has been sent successfully.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div 
              className="error-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Oops! Something went wrong. Please try again later.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
};

export default ContactForm;
