<template>
  <div id="app">
    <el-row style="width:200px;float:left;">

      <el-col>
        <el-menu default-active="2" id="leftNav" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" cursor="pointer" text-color="#fff" active-text-color="#ffd04b">
          <router-link to="/">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">Element-Ui</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <router-link to="/table">
                <el-menu-item index="1-1">Table</el-menu-item>
              </router-link>
              <router-link to="/echars">
                <el-menu-item index="1-2">ECharts</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <router-link to="/vuex">
                <el-menu-item index="1-3">VueX</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>




<script>
import { mapGetters, mapActions } from "vuex";
export default {
  created: async function() { 

   
    var d= await this.http.get("http://www.dazhu666.com/api/front/content/getPositionCategory?modelItemId=298");


  },
  data() {
    return {
      radio: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  ul li {
    list-style-type: none;
    cursor: pointer;
  }
  #leftNav {
    width: 200px;
  }
  #leftNav li {}
}
</style>
