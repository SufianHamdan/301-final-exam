import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/favorite">Favorite</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header
