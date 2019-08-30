export default {
    dataSource: [],
    inited: false,
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
    }
};
