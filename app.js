Vue.component("App", {
    template: "#app-template",
    data() {
        return {
            keepAlive: ["chart-frame", "table-frame"],
            value: true,
        };
    },
    computed:{
        componentType(){
            return this.value ? "chart-frame" : "table-frame";
        }
    }
})