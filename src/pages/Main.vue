<template>
  <div>
    <el-container class="container">
      <el-header class="header">
        <el-col class="logo" :collapse="isCollapse" :class="isCollapse?'logo-collapse-width':'logo-width'">
         <span v-show="!isCollapse">admin</span>
        </el-col>
        <el-col style="width: 60px;">
          <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col>
      </el-header>
      <el-container class="main">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :class="isCollapse?'menu-collapsed':'menu-expanded'">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-3">
                  <router-link to="/s">惺惺惜惺惺x</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      collapse:function(){
        this.isCollapse=!this.isCollapse;
      },
    }
  }
</script>

<style>
  .tools{
    padding: 0px 23px;
    width:14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .logo{
    height: 60px;
    width: 230px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
  }
  .container{
    position: absolute;
    top:0px;
    bottom: 0px;
    width: 100%;
  }
  .header{
    height: 60px;
    line-height: 60px;
  }
  .main{
    display: flex;
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  .el-header {
    padding: 0px;
    background-color: #20a0ff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-menu {
    background-color: #eef1f6;
    color: #48576a;
    text-align: center;
    flex:0 0 230px;
    width: 230px;
  }

  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0px;
  }



  .logo-width{
    width:230px;
  }
  .logo-collapse-width{
    width:60px
  }

  .menu-collapsed{
    flex:0 0 60px;
    width: 60px;
  }
  .menu-expanded{
    flex:0 0 230px;
    width: 230px;
  }


</style>
