<template>
    <div id="VueExplame">
        1111111{{this.$store.getters.loading}}
        <el-row>
            <el-button round @click="foo">圆角按钮{{this.loading}}</el-button>
        </el-row>
        <div id="echartContainer" style="width:100%; height:500px"></div>
    </div>
</template>

<script>
var echarts = require('echarts')
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {

        }
    },
    created() {
            console.log(this.loading)
    },
    computed: {
        ...mapGetters(["loading"])
       
    },
    methods: {
        ...mapActions({ setNavState: "setNavState" }),
        foo() {
            sessionStorage.setItem("loading","true")
            this.setNavState(false);
        },
        // foo() {
        //     this.$store.dispatch('setNavState', false)
        // }
    }

}
</script>
<style lang="scss" scoped="" type="text/css">
* {
    margin: 0;
    padding: 0;
}

#VueExplame {
    width: calc(100% - 200px);
    margin-left: 200px;
}
</style>