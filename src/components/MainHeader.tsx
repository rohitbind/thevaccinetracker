import * as React from "react";
import { Dropdown } from "semantic-ui-react";
import Toast from "react-bootstrap/Toast";
import { Link } from "gatsby";
// @ts-ignore
import logo from "../assets/images/logo.svg";
// @ts-ignore
import whatsappIcon from "../assets/images/whatsappIcon.svg";
// @ts-ignore
import twitterIcon from "../assets/images/twitter.svg";
// @ts-ignore
import facebookIcon from "../assets/images/facebook.svg";
// @ts-ignore
import copyIcon from "../assets/images/copyIcon.svg";


export interface MainHeaderProps {

}

export interface MainHeaderState {
  show: boolean;
}

class MainHeader extends React.PureComponent<MainHeaderProps, MainHeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  setShow = () => {
    this.setState({
      show: false
    });
  };

  copyToClipBoard = () => {
    this.setState({
      show: true
    });
    navigator.clipboard.writeText("https://www.thevaccinetracker.com");
  };

  render() {
    const { show } = this.state;
    const url = "www.thevaccinetracker.com";
    return (
      <div className="container mainHeader">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <Link to="/">
              <img
                src={logo}
                alt="The Vaccine Tracker Logo"
                className="img img-responsive"
              />
            </Link>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="virusMainStatus">
              <ul>
                <li className="virusType">
                  <div className="blinking liveUpdates"/>
                  COVID-19
                </li>
                <li className="overallStatus vaccineStatus">VACCINE TRACKER</li>
              </ul>
              <Dropdown
                text="Share"
                pointing
                className="link item shareButton"
                icon="share"
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() =>
                      window.open(`https://wa.me/?text=${url}`, "_self")
                    }
                  >
                    <img
                      src={whatsappIcon}
                      alt="whatsapp share"
                      className="img img-responsive"
                      width="10"
                    />
                    WhatsApp
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                        encodeURIComponent(url),
                        "facebook-share-dialog",
                        "width=626,height=436"
                      );
                      return false;
                    }}
                  >
                    <img
                      src={facebookIcon}
                      alt="facebook share"
                      className="img img-responsive"
                      width="10"
                    />
                    Facebook
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?url=${url}`,
                        "_target"
                      )
                    }
                  >
                    <img
                      src={twitterIcon}
                      alt="twitter share"
                      className="img img-responsive"
                      width="10"
                    />
                    Twitter
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.copyToClipBoard}>
                    <img
                      src={copyIcon}
                      alt="copy link share"
                      className="img img-responsive"
                      width="10"
                    />
                    Copy Link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <Toast
          onClose={() => this.setShow()}
          show={show}
          delay={1000}
          autohide
        >
          <Toast.Body style={{ textAlign: "center" }}>
            Copied To ClipBoard !
          </Toast.Body>
        </Toast>
      </div>
    );
  }
}

export default MainHeader;
