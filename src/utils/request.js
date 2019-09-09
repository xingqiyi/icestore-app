import axios from 'axios';
import dateTime from 'date-time';

import {cloneDeep, isEmpty} from 'lodash'

// import browser from 'browser-detect';
// import appConfig from '../appConfig';
// const UA = browser();

const api = 'http://192.168.14.76/mock/60';

function request(option = {}) {


  option.visit_time = dateTime();
  // data.UA = UA;

  let {data, module, method = 'get'} = option

  const cloneData = cloneDeep(data)

  if (method === 'get') {

    // return axios({
    //   method: 'get',
    //   url: `${api}/${module}`,
    //   data: cloneData,
    // });

    return axios.get(`${api}/${module}`,
        {
          params: cloneData,
          // headers,
        },
    )


  } else {
    return axios({
      method: 'post',
      url: `${api}/${module}`,
      // url: `${appConfig.apiUrl}request/record`,
      data: cloneData,
    });
  }


}

export default request;
