import request from '@utils/request'

const dataSource = (j = 0) => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push({
      title: `Nano ${3 + i}`,
      // title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
      id: 100306660940 + i + j,
      time: 2000 + i
    });
  }
  return result;
};

export default {
  dataSource: [],
  loading: false,


  async init() {
    this.loading = true;

    const response = await request({
      method: 'get',
      module: 'list',
      // action: 'add-project',
    });
    this.dataSource = response.data.data;
  },

  async filter(filter = {}) {
    this.loading = true;

    const response = await request({
      method: 'get',
      module: 'list',
      data: filter,
      // action: 'add-project',
    });
    this.dataSource = response.data.data;
  },


  async pageTo(currentPage) {
    this.loading = true;

    this.dataSource = await new Promise(resolve => {
      setTimeout(() => {
        resolve(dataSource(currentPage * 5))
        this.loading = false;

      }, 1000)
    })
  }



  // add(todo) {
  //     this.dataSource.push(todo);
  // },
  // remove(specifiedIndex) {
  //     this.dataSource = this.dataSource.filter(
  //         (data, index) => index !== specifiedIndex
  //     );
  // },
  // toggle(index) {
  //     this.dataSource[index].done = !this.dataSource[index].done;
  // }


};
