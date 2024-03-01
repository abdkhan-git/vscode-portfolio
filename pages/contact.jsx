import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false); // New state for tracking email sent status

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const NYLAS_API_KEY_OR_ACCESS_TOKEN = 'nyk_v0_cfnTZ0FVznF9bllfy3d5p9IGM9wpISY6eyU58bxtcyOVViH3a31chHVtTUi3ujbH';
      const url = `https://api.us.nylas.com/v3/grants/4d7c2e7e-e9e8-4f4c-b494-6d2f2f20736d/messages/send`;

      const data = {
        subject: subject + " (From web-portfolio)",
        body: "Body: " + message + "<br>" + "Name:" + name + "<br>" + "User's email: " + email,
        to: [
          {
            name: "Abdullah Khan",
            email: "abdkhan033@gmail.com"
          }
        ],
        tracking_options: {
          opens: true,
          links: true,
          thread_replies: true,
          label: "hey just testing"
        }
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NYLAS_API_KEY_OR_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsEmailSent(true); // Set state to indicate email sent successfully
      const responseData = await response.json();
      console.log('Email sent successfully:', responseData);
    } catch (error) {
      console.error('Error sending email:', error);
    }
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
            <button type="submit" id="submit">Submit</button>
          </form>
          {/* Pop-up message when email is successfully sent */}
          {isEmailSent && (
              <div className={styles.popup}>
                <p>Email sent successfully!</p>
                <button onClick={() => setIsEmailSent(false)}>Close</button>
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
