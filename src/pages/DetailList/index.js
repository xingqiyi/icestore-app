import React from 'react'
import List from './components/List'
import Detail from './components/Detail'

import {Card } from 'antd'

const FilterList = () => {

    return (
        <div>
          <Card>
            <Detail></Detail>

          </Card>

            <List></List>

        </div>
    )
}

export default FilterList
