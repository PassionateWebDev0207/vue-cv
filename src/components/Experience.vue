<template>
    <v-card>
        <v-card-title>
            {{title}}
            <v-spacer></v-spacer>
            <v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
                <v-icon>{{sectionIcon}}</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text id="section-text-exp">
            <ul class="about-list">
                <li class="about-list-item" v-for="(item, index) in work" :key="index">
                    <v-row>
                        <div class="about-logo">
                            <img :src="item.logo" height="70" width="70">
                        </div>
                        <div class="about-header">
                            <div class="about-pos">{{item.pos}}</div>
                            <div class="about-title">{{item.title}}</div>
                            <div class="about-time">{{item.time}}</div>
                        </div>
                    </v-row>
                    
                    <div class="about-text" v-html="item.text" />
                    <div class="about-techs">
                        <div v-for="tech in item.techs" :key="tech" class="tech-item">{{tech}}</div> 
                    </div>
                    <v-divider v-if="index !== (work.length-1)" />
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
const self_logo = require('@/assets/self.jpg');
const de_logo = require('@/assets/de.jpg');
const sb_logo = require('@/assets/sb.jpg');
const mesosphere_logo = require('@/assets/mesosphere.jpg');
const maz_logo = require('@/assets/maz.jpg');

export default {
  name: 'experience',
  data () {
    return {
      title: 'Experience',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      work:[
        {
            title:'Self-Employed',
            logo:self_logo, 
            pos:'Freelance Software Engineer',
            time:'Jun 2019 - Present',
            text:'- Built rich SPAs using Vue/Nuxt, React, Angular.<br/>' +
                '- Developed with serverless Node.js and JavaScript. <br/>' +
                '- Built RESTful APIs using a serverless framework. <br/>' +
                '- Developed architectures on top of AWS Lambda, AWS CloudFormation, and AWS S3. <br/>' +
                '- Collaborated with other developers in an Agile environment, using Scrum methodology. <br/>',
            techs: ['Vue.js', 'Nuxt.js', 'React', 'Angular', 'AWS', 'Docker', 'Node.js', 'Serverless', 'Microservices']
        }
      ]
    }
  },
  methods: {

  },
  watch: {
    section: function() {
        if(!this.section){
            document.getElementById('section-text-exp').style.display = "none";
            this.sectionIcon = 'expand_more';
            this.sectionTooltip = 'Show section';
        }
        else{
            document.getElementById('section-text-exp').style.display = "block";
            this.sectionIcon = 'expand_less';
            this.sectionTooltip = 'Hide section';
        }
    }
  }
}
</script>

<style scoped>
    #section-text-exp .about-techs .tech-item{
        border:1px solid #9ac;
        border-radius:2px;
        color:#646769;
        font-size:13px;
        padding:0 3px 0 3px;
        margin:3px 4px 0 0;
        display: inline-block;
    }
</style>
