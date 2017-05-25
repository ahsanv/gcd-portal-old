import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import WrapperClass from './WrapperClass';
import LogoClass from './LogoClass';
import HeaderClass from './HeaderClass';
import HeaderLink from './HeaderLink';
import Logo from './logo.png';
import NavBar from './NavBar';
import Ul from './Ul';
import ListItem from './ListItem';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderClass>
        <WrapperClass>
          <LogoClass>
            <Img src={Logo} alt="GlobalCoinDex" />
          </LogoClass>

          <NavBar>
            <Ul>
              <ListItem>
                <HeaderLink className="active" to="/">
                  <FormattedMessage {...messages.home} />
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink to="/about">
                    <FormattedMessage {...messages.about} />
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink to="/features">
                    <FormattedMessage {...messages.features} />
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink to="/security">
                    <FormattedMessage {...messages.security} />
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink to="/marketstats">
                    <FormattedMessage {...messages.marketstats} />
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink to="/chnagelog">
                    <FormattedMessage {...messages.chnagelog} />
                </HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink to="/contact">
                    <FormattedMessage {...messages.contact} />
                </HeaderLink>
              </ListItem>


            </Ul>
          </NavBar>


        </WrapperClass>
      </HeaderClass>
    );
  }
}

export default Header;
