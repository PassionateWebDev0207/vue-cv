<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card hover raised v-for="(project, projIndex) in portfolio" :key="projIndex" class="project-card">
                    <v-card-title>
                        <div>
                            <img :src="project.thumbnail" width="70" height="70" />
                        </div>
                        <div>{{project.title}}</div>
                    </v-card-title>
                        
                    <v-card-text>
                        <div class="tech-section">
                            <div v-for="(tech, techIndex) in project.tech" :key="techIndex" class="tech-item">{{tech}}</div>                            
                        </div>
                        <div class="project-text">{{project.text}}</div>
                    </v-card-text>

                    <v-card-row actions>
                        <v-btn v-if="project.github !== ''" class="prim-col" icon="icon" 
                            v-tooltip:right="{ html: 'View on GitHub' }"
                            @click.native="openUrl(project.github)">
                            <v-icon><i class="fa fa-github"></i></v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <a v-if="project.link !== ''" :href="project.link" target="_blank">
                            <v-btn flat class="prim-col">View project</v-btn>
                        </a>
                    </v-card-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
const gmg_logo = require('@/assets/gmg.jpg');
const reawote_logo = require('@/assets/reawote.jpg');
const self_logo = require('@/assets/self.jpg');
const de_logo = require('@/assets/de.jpg');
const sb_logo = require('@/assets/sb.jpg');
const mesosphere_logo = require('@/assets/mesosphere.jpg');
const maz_logo = require('@/assets/maz.jpg');

export default {
  data () {
    return {
      title: 'Portfolio',
      portfolio:[
        {
            title:'Gas Media Refinery Dashboard', 
            thumbnail:gmg_logo, 
            text:'Refinery Internal Dashboard for Gas Media Group',
            tech:['Vue.js','Nuxt.js', 'Element UI', 'Highcharts', 'Video.js', 'HTML5', 'CSS3'],
            github:'',
            link:'https://refinery.gasmedia.com'
        },
        {
            title:'Real World Texture', 
            thumbnail:reawote_logo, 
            text:'Simplify cooperation between architects, manufacturers and 3D artists by creating an understandable environment that helps to share data and to work together on projects.',
            tech:['Vue.js','Nuxt.js','HTML','CSS'],
            github:'',
            link:'https://reawote.com'
        },
        {
            title:'StrongBlock', 
            thumbnail:sb_logo, 
            text:'With StrongBlock\'s revolutionary blockchain platform, you can go from account registration to a running blockchain in minutes. ' + 
                'StrongBlock\'s Marketplace brings together the best DApps & Services from our Partners to help you build blockchain solutions you need.',
            tech:['React', 'Vue', 'AWS', 'Docker', 'Linux', 'Git', 'DigitalOcean'],
            github:'',
            link:'https://strongblock.io'
        },
        {
            title:'Bounce House', 
            thumbnail:maz_logo, 
            text:'Giving small business owners time to do what they enjoy. ' + 
                'Bounce House is a team dedicated to helping individuals and small businesses get online quick and easily, without cumbersome software.',
            tech:['React', 'TailwindCSS', 'Ruby on Rails', 'Google Analytics', 'GraphQL'],
            github:'',
            link:'https://www.bounce.house'
        },
        {
            title:'Design Everest', 
            thumbnail:de_logo, 
            text:'Design Everest is a leading provider of Architecture & Engineering services for New Construction as well as for Remodel/Addition/Tenant Improvements of Residential, Commercial and Industrial buildings in California.',
            tech:['Vue.js', 'Nuxt.js', 'Angular', 'Linux', 'Docker', 'Git'],
            github:'',
            link:'https://designeverest.com'
        }
      ]
    }
  },
  methods: {
    openUrl: function(url) {
        window.open(url, '_blank').focus();
    }
  }
}
</script>

<style scoped>
.card__title{
    padding-bottom:3px;
}
.card__title >div:first-child {
    margin-right: 20px;
}
.card__text{
    padding-top:0;
}
.tech-section{
    margin-bottom:10px;
}
.tech-item{
    border:1px solid #9ac;
    border-radius:2px;
    color:#646769;
    font-size:13px;
    padding:0 3px 0 3px;
    margin:3px 4px 0 0;
    display: inline-block;
}
</style>
