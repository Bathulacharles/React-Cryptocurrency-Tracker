import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  cryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-item-heading">Coin Type</p>
      <div className="usd-and-euro-value-container">
        <p className="icon-value-heading">USD</p>
        <p className="icon-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrencyview = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.cryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptoCurrency => (
            <CryptocurrencyItem
              key={eachCryptoCurrency.id}
              cryptocurrencyDetails={eachCryptoCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        {this.renderCryptocurrencyview()}
      </div>
    )
  }
}
export default CryptocurrenciesList
