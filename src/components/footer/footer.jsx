import React from 'react';
import { Link } from 'react-router-dom';
import FooterColumn from './footer-column';
import Logo from '../../assets/svg/logo';

const Footer = () => {
  const stylesColumn = {
    styleContainer: 'col-6 col-md',
    styleTitle: '',
    styleList: 'list-unstyled text-small',
    styleItem: 'mb-1',
    styleLink: 'link-secondary text-decoration-none',
  };

  return (
    <div className="p-3 footer">
      <footer className="container pt-4 my-md-5 pt-md-5">
        <div className="row">
          <div className="order-last-md col-12 col-md d-flex flex-column">
            <Link to="/" className="footer-copyrigth">
              <Logo title={''} size={'60px'} />
              <small className="mb-3 text-muted footer-small">
                <span>&copy; 2021</span>
                <span>Copyright</span>
                <span>Group 8 inc.</span>
              </small>
            </Link>
          </div>
          <FooterColumn
            title={'About Us'}
            list={[{ title: 'Our team', to: '/about' }]}
            stylesColumn={stylesColumn}
          ></FooterColumn>
          <FooterColumn
            title={'Favorites'}
            list={[{ title: 'Favorites', to: '/favorites' }]}
            stylesColumn={stylesColumn}
          ></FooterColumn>
          <FooterColumn
            title={'Contacts'}
            list={[{ title: 'Contacts', to: '/contacts' }]}
            stylesColumn={stylesColumn}
          ></FooterColumn>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
