import React from 'react'
import List from './components/List'
import Filter from './components/Filter'
import Modal from './components/Modal'

import {Card} from 'antd'

const FilterList = () => {

  return (
      <div>
        <Card>
          <Filter></Filter>

        </Card>

        <List></List>

        <Modal></Modal>


      </div>
  )
}

export default FilterList
