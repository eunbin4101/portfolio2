import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

import Chats from "../components/chats.vue"
import Find from "../components/find.vue"
import Index from "../components/index.vue"
import More from "../components/moer.vue"

import Profile from "../components/profile.vue"
import Chat from "../components/chat.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {paht: "/friends", component: Friends, name: "friends"},
  {paht: "/chat", component: Chat, name: "chat"},
  {paht: "/find", component: Find, name: "find"},
  {paht: "/index", component: Index, name: "index"},
  {paht: "/more", component: More, name: "more"},
  {paht: "/profile", component: Profile, name: "profile"},
  {paht: "/chats", component: Chats, name: "chats"},
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})

export default router
