let Traversal = require('./class')

class MakeTree{
    constructor(){
        this.cache = null
    }

    indexNode(data){
        data.reduce((acc, value, index) => {
            acc[value.node] = index
            return this.cache = acc
        }, {})
        // console.log(this.cache)
    }

    result(data){        
        let root;
        data.forEach(el => {
            // untuk root yg tidak mempunyai parent
            if (el.parent === null) {
                root = el
                return
            }
            // mendapatkan parent dari element saat ini di dalam data (array)
            const parentEl = data[this.cache[el.parent]]
            //menambahkan element saat ini ke daftar children milik parentnya
            parentEl.children = [...(parentEl.children || []), el]
        })
        return root
    }
}

const data = [
    { node: 'A', parent: null },
    { node: 'B', parent: 'A' },
    { node: 'C', parent: 'A' },
    { node: 'D', parent: 'A' },
    { node: 'E', parent: 'A' },
    { node: 'F', parent: 'A' },
    { node: 'G', parent: 'B' },
    { node: 'H', parent: 'B' },
    { node: 'I', parent: 'B' },
    { node: 'J', parent: 'B' },
    { node: 'K', parent: 'B' },
    { node: 'L', parent: 'E' },
    { node: 'M', parent: 'E' },
    { node: 'N', parent: 'E' },
    { node: 'O', parent: 'E' },
    { node: 'P', parent: 'O' },
    { node: 'Q', parent: 'O' },
    { node: 'R', parent: 'O' },
    { node: 'S', parent: 'O' },
];

let tree = new MakeTree()
tree.indexNode(data)
let resTree = tree.result(data)
console.log(resTree)

let res2 = new Traversal(resTree)

res2.breadthFS()
res2.depthFS()
