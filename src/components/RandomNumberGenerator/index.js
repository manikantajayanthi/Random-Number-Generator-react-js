import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onClickButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    console.log(number)

    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="randomNumber">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
