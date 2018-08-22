import React, { Component, createContext } from 'react'
import { addFav, removeFav, getFavs } from '../../config/models'

const FavsContext = createContext()

class FavsProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favIds: [],
    }
  }
  addFavSession = sessionId => {
    try {
      addFav(sessionId)
      this.getFavdSessionIds()
    } catch (err) {
      console.log(err)
    }
  }
  removeFavSession = sessionId => {
    try {
      removeFav(sessionId)
      this.getFavdSessionIds()
    } catch (err) {
      console.log(err)
    }
  }
  getFavdSessionIds = () => {
    try {
      favIds = []
      getFavs().map(fav => {
        favIds.push(fav.id)
      })
      this.setState({ favIds })
    } catch (err) {
      console.log(err)
    }
  }
  componentDidMount() {
    this.getFavdSessionIds()
  }
  render() {
    return (
      <FavsContext.Provider
        value={{
          ...this.state,
          addFav: this.addFavSession,
          removeFav: this.removeFavSession,
          getFavs: this.getFavdSessionIds,
        }}
      >
        {this.props.children}
      </FavsContext.Provider>
    )
  }
}
export { FavsProvider }
export default FavsContext
