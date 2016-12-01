import React from 'react'

class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="/ordering">Ordering</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    <p className="copyright text-muted small">Copyright &copy; Rocking R Farms 2016. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}

export default Footer
