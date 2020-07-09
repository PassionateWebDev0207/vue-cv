<template>
  <v-app id="cv">
    <v-toolbar-side-icon class="toggle-btn" @click.native.stop="sidebar = !sidebar"/>

    <v-sidebar drawer v-model="sidebar">
      <v-toolbar style="background-color:#146">
        <v-btn icon="icon" @click.native.stop="sidebar = !sidebar">
            <v-icon>close</v-icon>
          </v-btn>
          <span class="white--text">MENU</span>
      </v-toolbar>

      <v-list>
        <v-list-tile
          v-for="(item, index) in menu"
          :key="index"
          @click.native="changeView(item.text)"
        >
          <v-list-tile-avatar>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.text" style="font-weight:400"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <div class="menu-footer text-xs-center">
        Copyright &copy; {{getCurrentYear()}}. Jimmy Yu
      </div>
    </v-sidebar>

    <main>
      <v-content class="main-content">

          <v-container fluid="fluid">
            <v-row>
              <v-col xs12 sm12 md5 lg4>
                <v-card class="profile-card">

                  <img :src="profilePic">

                  <div class="profile-header">
                    <div class="md-title info-heading">Jimmy Yu</div>
                    <div class="info-subheading">Web Technologies Expert</div>
                  </div>

                  <div class="infos">
                    <ul class="profile-list" v-for="(item, index) in profileList" :key="index">
                      <li>
                        <a v-if="item.link !== null" :href="item.link">
                          <span class="title" v-if="item.fa == null"><v-icon>{{item.icon}}</v-icon></span>
                          <span class="title" v-else><i :class="item.icon"></i></span>
                          <span class="text">{{item.text}}</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="profile-menu">
                    <v-btn
                      v-for="(item, index) in menu"
                      :key="index"
                      dark
                      flat
                      v-tooltip:bottom="{ html: item.text }"
                      @click.native="changeView(item.text)"
                    >
                      <v-icon>{{item.icon}}</v-icon>
                    </v-btn>
                  </div>

                </v-card>

                <!-- modal -->
                <v-modal v-model="modal" class="cv-modal">

                  <v-btn flat block slot="activator" class="download-btn ">
                    <v-icon left>open_in_new</v-icon>
                    View CV
                  </v-btn>

                  <v-card class="cv-modal-card">
                    <v-card-text>
                      <h2 class="title">Choose language of CV</h2>
                    </v-card-text>
                    <v-card-text>
                      <v-radio v-for="(item, index) in cv_langs"
                        :key="index"
                        :disabled="item.value != 'en'"
                        v-model="cv_lang" 
                        :label="item.text" 
                        :value="item.value" 
                        class="radio-cv-lang"/>
                    </v-card-text>
                    <v-card-row actions>
                        <v-btn flat block
                          @click.native="viewCV()"
                          class="prim-col">View</v-btn>
                    </v-card-row>
                  </v-card>

                </v-modal>
                <!-- modal -->

                <br/>
              </v-col>
              <v-col xs12 sm12 md7 lg8>
                <transition name="fade" mode="out-in">
                  <about v-if="currentMenu === 'About me'" />
                  <portfolio v-if="currentMenu === 'Portfolio'" />
                  <contact v-if="currentMenu === 'Contact me'" />
                </transition>
              </v-col>
            </v-row>
          </v-container>

      </v-content>
    </main>

  </v-app>
</template>

<script>
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
var cv_en = require("file-loader?name=[name].[ext]!../files/JimmyYu.pdf")
const me = require('@/assets/me.jpg')

export default {
  components:{
    About,
    Contact,
    Portfolio
  },
  data () {
    return {
      title: 'CV/Portfolio',
      sidebar: false,
      modal: false,
      currentMenu: 'About me',
      menu:[
        {text:'About me', icon:'person'},
        {text:'Portfolio', icon:'work'},
        {text:'Contact me', icon:'mail'}
      ],
      cv_langs:[
        {text:'English', value:'en'}
      ],
      cv_lang: 'en',
      profilePic: me,
      profileList:[
        {text:'jimmyyu0207@gmail.com', icon:'mail', link:'mailto:jimmyyu0207@gmail.com?Subject=Hello!'},
        {text:'+1 717 287 5835', icon:'phone'},
        {text:'live:p.webdev0207', icon:'fa fa-skype', fa:'sykpe'},
        {text:'LinkedIn profile', icon:'fa fa-linkedin', fa:'linkedin', link:'https://www.linkedin.com/in/jimmy-yu-5639941a2/'},
        {text:'GitHub profile', icon:'fa fa-github', fa:'github', link:'https://github.com/PassionateWebDev0207'}
      ]
    }
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
    viewCV() {
      window.open(cv_en)
      this.modal = false;
    },
    changeView(menu) {
      this.currentMenu = menu;
    }
  }
}
</script>

<style>
  /***** remove ******/
  .in-progress{
    position:absolute;
    top:19px;
    right:16px;
    color:#777;
  }
  /*******************/

  /* router-link transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  /*******************/

  #cv{
    background-color:#eeeff1
  }
  a{
    text-decoration:none;
  }
  .toggle-btn i{
    color:#146;
    padding:10px 5px 0 0;
  }
  .menu-footer{
    color:#999;
    font-weight:300;
    position: absolute;
    bottom: 30px;
    width: 100%;
  }
  .main-content {
    padding: 10px 55px 16px 55px;
    background-color:inherit !important;
    /*transform: translate3D(0,0,0);*/ /* removed bc of modal */
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    transition-delay: .2s;
  }
  @media (max-width:1090px){
    .main-content{
      padding-left:10px !important;padding-right:10px !important
    }
  }
  @media (min-width:1600px){
    .main-content{
      padding-left:300px !important;padding-right:300px !important
    }
  }

  .prim-col{
    color:#146 !important;
  }

  .download-btn{
    margin-bottom:16px !important;
  }

  .card:not(.cv-modal-card){
    margin-bottom:16px;
  }

  .cv-modal, .modal__activator{
    width:100%;
  }

  .radio-cv-lang{
    margin:0 !important;
    color:#146;
  }

  .input-group--text-field.input-group--focused label{
    color: #146 !important;
  }
  .input-group__details:after{
    background-color: #146 !important;
  }
  .profile-card{margin-top:67px;background-color:#146 !important;color:white;text-align:center;}

  .profile-card img{margin-top:-67px;width:135px;height:135px;border-radius:50%;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.18), 0 2px 10px 0 rgba(0, 0, 0, 0.14);}

  .profile-header{padding:35px 35px 19px 35px;}

  .info-heading{font-size:37px;font-weight:500;color:#fff;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29)}
  .info-subheading{font-weight:400;font-size:16px;color:#d2d2d2;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29);margin-top:-10px}

  .infos{padding:20px 0 50px 0}
  .profile-list{list-style-type: none;padding:0}
  .profile-list li{padding-bottom:8px}
  .profile-list .title{color:#fff;display:inline-flex;vertical-align:middle;padding-bottom:4px}
  .profile-list .title i{font-size:23px;}
  .profile-list .title .fa{padding-left:2px;}
  .profile-list .text{font-size:16px;font-weight:400;line-height:20px;color:#fff;}
  i{font-size:23px;}
  .fa{padding-left:3px;}

  .profile-menu{border-top:1px solid rgba(150,175,185,.4)}
</style>
