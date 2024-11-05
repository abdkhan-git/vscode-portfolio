import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({
    sending: false,
    error: null,
    success: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, error: null, success: false });

    // API Configuration
    const NYLAS_API_KEY = 'nyk_v0_cfnTZ0FVznF9bllfy3d5p9IGM9wpISY6eyU58bxtcyOVViH3a31chHVtTUi3ujbH';
    const GRANT_ID = '4d7c2e7e-e9e8-4f4c-b494-6d2f2f20736d';
    const url = `https://api.nylas.com/v3/grants/${GRANT_ID}/messages/send`;

    // Create email data
    const emailData = {
      to: [{ email: "abdkhan033@gmail.com", name: "Abdullah Khan" }],
      subject: `${subject} (From web-portfolio)`,
      body: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
      tracking_options: {
        opens: true,
        links: true,
        thread_replies: true
      }
    };

    // Make the API request
    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NYLAS_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
        .then(response => {
          if (!response.ok) {
            return response.text().then(text => {
              console.error('Error response:', text);
              throw new Error(`HTTP error! status: ${response.status}`);
            });
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          setStatus({ sending: false, error: null, success: true });
          // Clear form
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        })
        .catch(error => {
          console.error('Error:', error);
          setStatus({
            sending: false,
            error: 'Failed to send message. Please try again later or contact directly via email.',
            success: false
          });
        });
  };

  return (
      <div className={styles.container}>
        <div>
          <h3 className={styles.heading}>Reach Out Via Socials</h3>
          <ContactCode />
        </div>
        <div>
          <h3 className={styles.heading}>Or Fill Out This Form</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.flex}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
              ></textarea>
            </div>
            <button
                type="submit"
                disabled={status.sending}
            >
              {status.sending ? 'Sending...' : 'Submit'}
            </button>
          </form>

          {status.success && (
              <div className={styles.popup}>
                <p>Email sent successfully!</p>
                <button onClick={() => setStatus(prev => ({ ...prev, success: false }))}>Close</button>
              </div>
          )}

          {status.error && (
              <div className={`${styles.popup} ${styles.error}`}>
                <p>{status.error}</p>
                <button onClick={() => setStatus(prev => ({ ...prev, error: null }))}>Close</button>
              </div>
          )}
        </div>
      </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;