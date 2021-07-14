class Traversal {
    constructor(tree) {
        this.treeB = tree
        this.treeD = tree
    }

    breadthFS() {
        let arr = []
        let res = ''
        arr.push(this.treeB)

        while (arr.length > 0) {
            // console.log(arr)
            //ambil yang paling depan
            this.treeB = arr.shift()
            res += this.treeB.node + ' '
            if (this.treeB?.children?.length) {
                // console.log('child dari ', this.treeB.node, ' => ', this.treeB.children)
                //menambahkan queue
                for (let i = 0; i < this.treeB.children.length; i++) {
                    arr.push(this.treeB.children[i])
                }
            }
            // console.log('------------------')
        }
        console.log('BFS = ' + res)
    }

    depthFS() {
        let arr = []; 
        let res = '' 
        arr.push(this.treeD);

        while (arr.length > 0) {
            // console.log(arr)
            //ambil yang paling belakang
            this.treeD = arr.pop(); 
            res += this.treeD.node + ' '
            if (this.treeD?.children?.length) {
                // console.log('child dari ', this.treeD.node, ' => ', this.treeD.children)
                //menambahkan stack
                for (let i = this.treeD.children.length - 1; i >= 0; i--) {
                    arr.push(this.treeD.children[i]);
                }
            }
            // console.log('------------------')
        }
        console.log('DFS = ' + res)
    }
}

module.exports = Traversal
