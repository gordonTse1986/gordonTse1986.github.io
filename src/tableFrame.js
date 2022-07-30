Vue.component("TableFrame", {
    name: "table-frame",
    template: "#table-frame-template",
    data(){
        return {
            pageNum:1,
            pageSize:10,
            tableData: []
        }
    },
    computed:{
        total(){
            return rawData.length;
        }
    },
    created() {
        this.updateData(1);
    },
    methods:{
        updateData(value){
            this.pageNum = value;
            const startIdx = (this.pageNum-1)*this.pageSize;
            this.tableData = rawData.slice(startIdx, startIdx+this.pageSize);
        }
    }
})
