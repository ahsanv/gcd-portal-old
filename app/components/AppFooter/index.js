import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import WrapperClass from './WrapperClass';
// import FooterClass from './FooterClass';
import Footer from './Footer';

import { FooterClass, FooterH1, Foot1, FootLogo, FootSocial, FootSocialLi, FootSocialLiA } from './FooterClass';
// import FontAwesome from 'react-fontawesome';
// import {FooterClass, FooterH1} from './FooterClass';

import LogoClass from './LogoClass';
import FooterLink from './FooterLink';
import FootLogoImg from './foot-logo.png';
import NavBar from './NavBar';
import Ul from './Ul';
import ListItem from './ListItem';
import messages from './messages';
//
class AppFooter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Footer>
      <WrapperClass>
        <FooterClass>
          <Foot1>
            <FootLogo>
              <a href="index.html">
                <Img src={FootLogoImg} alt="GlobalCoinDex" />
                </a>
            </FootLogo>
            <FootSocial>
              <Ul>
                <FootSocialLi>
                  <FootSocialLiA href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </FootSocialLiA>
                  <FootSocialLiA href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </FootSocialLiA>
                  <FootSocialLiA href="#">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </FootSocialLiA>
                  <FootSocialLiA href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </FootSocialLiA>
                </FootSocialLi>
              </Ul>
            </FootSocial>
          </Foot1>

        </FooterClass>
      </WrapperClass>
      </Footer>

    );
  }
}

export default AppFooter;
