import React from 'react'
import styles from './styles'
import { SessionList } from '../../components/SessionList'
import PropTypes from 'prop-types'

const Schedule = ({ data, nav }) => (
  <SessionList data={data} styles={styles} nav={nav} />
)

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  nav: PropTypes.func.isRequired
}

export default Schedule
