import React from 'react'
import styles from './styles'
import { SessionList } from '../../components/SessionList'

const Favs = ({ data, nav }) => {
  return (
    <SessionList data={data} styles={styles} nav={nav} />
  )
}

export default Favs
