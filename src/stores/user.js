export default {

  isLogin: false,

  loading: false,

  dataSource: [],
  inited: true,

  async login(callback) {
    this.loading = true;

    this.isLogin = await new Promise(resolve =>
        setTimeout(() => {


          localStorage.setItem('u_id', 'asdf')
          resolve(true)


        }, 1500)
    )

    this.loading = false;


  },


  // async login(callback) {
  //   // this.loading = true;
  //   await new Promise(resolve =>
  //     setTimeout(() => {
  //       this.isLogin = true;
  //       // resolve(this.isLogin)

  //       // callback(this.isLogin)

  //       // this.loading = false;

  //     }, 1500)
  //   )
  // },

  async logout() {
    localStorage.removeItem('u_id')
    this.isLogin = false;
  },

  async refresh() {
    this.dataSource = await new Promise(resolve =>
        setTimeout(() => {
          this.inited = true;
          resolve([
            {
              name: "react"
            },
            {
              name: "vue",
              done: true
            },
            {
              name: "angular"
            }
          ]);
        }, 1000)
    );
  },
  add(todo) {
    this.dataSource.push(todo);
  },
  remove(specifiedIndex) {
    this.dataSource = this.dataSource.filter(
        (data, index) => index !== specifiedIndex
    );
  },
  toggle(index) {
    this.dataSource[index].done = !this.dataSource[index].done;
  },


  login2() {
    this.isLogin = true;
  }
};
