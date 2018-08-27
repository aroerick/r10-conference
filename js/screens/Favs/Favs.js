import React from 'react'
import styles from './styles'
import { SessionList } from '../../components/SessionList'
import { formatSessionData } from '../../lib/formatSessionData'
import PropTypes from 'prop-types'

const Favs = ({ data, favIds, nav }) => {
  const favsData = []
  data.map(item => {
    if(favIds.includes(item.id)) favsData.push(item)
  })

  return (
    <SessionList data={formatSessionData(favsData)} styles={styles} nav={nav} />
  )
}

FavspropTypes = {
  data: PropTypes.array.isRequired,
  favIds: PropTypes.array.isRequired,
  nav: PropTypes.func.isRequired
}

export default Favs
