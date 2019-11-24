import React, { Component } from 'react';
import Header from './Header';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <div className="header-container">
                <Header className="header-main" />
            </div>

            <div className="header-break">
            </div>

            <div className="maintext-container">
                <p>
                    TwitJ is a ................
                </p>
            </div>

		</div>
    );
  }
}
