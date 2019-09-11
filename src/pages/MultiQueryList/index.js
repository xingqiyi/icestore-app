import React from 'react'
import List from './components/List'
import Filter from './components/Filter'

import {Card } from 'antd'

const FilterList = () => {

    return (
        <div>
          <Card>
            <Filter></Filter>

          </Card>

            <List></List>

        </div>
    )
}

export default FilterList
