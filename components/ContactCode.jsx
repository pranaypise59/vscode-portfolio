import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'pranaypise.com',
    href: 'https://pranaypise.com',
  },
  {
    social: 'email',
    link: 'pranay@pranaypise.com',
    href: 'mailto:pranay@pranaypise.com',
  },
  {
    social: 'github',
    link: 'pranaypise59',
    href: 'https://github.com/pranaypise59',
  },
  {
    social: 'linkedin',
    link: 'pranaypise',
    href: 'https://www.linkedin.com/in/pranaypise/',
  },
  {
    social: 'twitter',
    link: 'pranaypise59',
    href: 'https://www.twitter.com/pranaypise59',
  },
  {
    social: 'instagram',
    link: 'pranay.pise_',
    href: 'https://www.instagram.com/pranay.pise_',
  },
  {
    social: 'telegram',
    link: 'the_believer143',
    href: 'https://t.me/the_believer143',
  },
  {
    social: 'codepen',
    link: 'pranaypise59',
    href: 'https://codepen.io/pranaypise59',
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
