Vue.component("App", {
    template: "#app-template",
    data() {
        return {
            keepAlive: ["chart-frame", "table-frame"],
            value: true,
        };
    },
    mounted() {
        function stopScrolling(e) {
            e.preventDefault();
        }
        document.addEventListener('touchstart', stopScrolling, {passive: false});
        document.addEventListener('touchmove', stopScrolling, {passive: false});
    },
    computed:{
        componentType(){
            return this.value ? "chart-frame" : "table-frame";
        }
    }
})