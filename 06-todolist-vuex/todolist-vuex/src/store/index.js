//1.引入
import Vue from 'vue';
import Vuex from 'vuex';
import todolist from '../components/list/store/index'

Vue.use(Vuex)

//3.生成store实例，注意，整个应用只有一个store实例
const store  = new Vuex.Store({
    modules:{
        todolist//命名空间
    }
})



//4.导出,在main.js中配制接收
export default store