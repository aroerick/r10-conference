import React from 'react'
import styles from './styles'
import { SessionList } from '../../components/SessionList'

const Schedule = ({ data, nav }) => (
  <SessionList data={data} styles={styles} nav={nav} />
)

export default Schedule
