import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addcart(store, payload) {

            // 循环判断 id 确定原本是否存在同样的商品
            // 如果存在将商品赋值给 oldpayload
            // 判断 oldpayload是否为空，用于确定此商品是否第一次添加进购物车，为空则为第一次，不为空则已添加多次
            // 如果为第一次，增加商品数量属性 count=1
            //  如果不为第一次，给  oldpayload.conunt 数值加1
            // let oldpayload = null
            // for (let item of this.state.cartList) {
            //     if (payload.id === item.id) {
            //         oldpayload = item

            //     }
            // }


            // 方法二直接使用数组方法 find
            // let oldpayload = this.state.cartList.find(item => payload.id === item.id)
            //这里因为传来的对象时引用赋值，所以 count会被添加到payload中不会被清除
            // if (oldpayload) {
            //     oldpayload.count += 1
            // } else {
            //     payload.count = 1
            //     payload.check = true
            //     this.state.cartList.push(payload)
            // }
            // return


        }
    },
    getters: {
        cartlength(state) {
            return state.cartList.length
        },

    },
    actions: {
        backaddcart(context, payload) {
            return new Promise(res => {
                let oldpayload = context.state.cartList.find(item => payload.id === item.id)
                if (oldpayload) {
                    oldpayload.count += 1
                    res('商品数量+1')
                } else {
                    payload.count = 1
                    payload.check = true
                    context.state.cartList.push(payload)
                    res('加入购物车成功')
                }
            })
        }
    }

})
export default store