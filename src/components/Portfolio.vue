<template>
    <div>
        <!--<v-row>
            <v-col xs12 sm12 md12 lg6 >-->
                <v-card hover raised v-for="(project, projIndex) in portfolio" :key="projIndex" class="project-card">
                    <v-card-title>
                        {{project.title}}
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
            <!--</v-col>
        </v-row>-->
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Portfolio',
      portfolio:[
        {
            title:'Gas Media Refinery Dashboard', 
            thumbnail:'', 
            text:'Refinery Internal Dashboard for Gas Media Group',
            tech:['Vue.js','Nuxt.js', 'Element UI', 'Highcharts', 'Video.js', 'HTML5', 'CSS3'],
            github:'',
            link:'https://refinery.gasmedia.com'
        },
        {
            title:'Real World Texture', 
            thumbnail:'', 
            text:'Simplify cooperation between architects, manufacturers and 3D artists by creating an understandable environment that helps to share data and to work together on projects.',
            tech:['Vue.js','Nuxt.js','HTML','CSS'],
            github:'',
            link:'https://reawote.com'
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
.card__text{
    padding-top:0;
}
.tech-section{
    margin-bottom:35px;
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
