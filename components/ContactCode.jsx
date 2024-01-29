import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nitinranganath.me',
    href: 'https://nitinranganath.me',
  },
  {
    social: 'email',
    link: 'abdkhan033@gmail.com',
    href: 'mailto:abdkhan033@gmail.com',
  },
  {
    social: 'github',
    link: 'abdkhan-git',
    href: 'https://github.com/abdkhan-git',
  },
  {
    social: 'linkedin',
    link: 'khana30',
    href: 'https://www.linkedin.com/in/khana30/',
  },
  {
    social: 'instagram',
    link: 'abdkhan.__',
    href: 'https://www.instagram.com/iamnitinr',
  },
  {
    social: 'telegram',
    link: 'abdkhan30',
    href: 'https://t.me/abdkhan30',
  },
  {
    social: 'phone',
    link: "347-605-8572",
    href: 'tel:347-605-8572',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
