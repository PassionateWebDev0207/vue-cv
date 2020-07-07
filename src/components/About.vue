<template>
    <div>
        <v-card id="about-section">
            <v-card-title>
                {{title}}
                <v-spacer></v-spacer>
                <v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
                    <v-icon>{{sectionIcon}}</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text id="section-text">
                <span>{{about}}</span>
                <div v-html="getInTouch"></div>
                <div class="tech-section">
                    <div>Some technologies I use:</div>
                    <div v-for="(tech, index) in techIUse" :key="index" class="tech-item">{{tech}}</div>                            
                </div>
                <div class="lang-section">
                    <div>Languages I speak:</div>
                    <div v-for="(lang, index) in langsISpeak" :key="index" class="tech-item">{{lang}}</div>                            
                </div>
            </v-card-text>
        </v-card>

        <experience />
        <education />
    </div>
</template>

<script>
import Experience from '@/components/Experience'
import Education from '@/components/Education'

export default {
  data () {
    return {
      title: 'About me',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      about: 'First and foremost, I love writing code. ' +
            'Ever since writing my first program in JavaScript and manipulating it to produce a desired output, ' +
            'I\'ve been obsessed with the idea of using software to solve practical problems. ' +
            'Software engineering is a never ending puzzle that I\'m passionately engaged in solving. ' +
            'I believe in the power of programming to transform and improve the lives of people around the world. ' +
            'For my first professional contract, I was given the opportunity to lead a full UI/UX overhaul start up\'s website using React. ' +
            'This contract quickly turned into a full time offer and I have happily expanded my role as a software engineer. ' +
            'I’ve been working as a senior web technologies expert for 7 years and built many websites & web apps for various industries. ' +
            'Through Development, I could get the good understanding of several industries like social media, healthcare, real estate, construction, finance service, etc. ',
      getInTouch: `If you want to get in touch with me, feel free to 
             <a href="mailto:jimmyyu0207@gmail.com?Subject=Hello!">send me a mail</a>.`,
      techIUse: ['JavaScript', 'Vue.js', 'Nuxt.js', 'React', 'Next.js', 'Angular', 'Node.js', 'Express', 'Python', 'Django', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'AWS', 'GCP', 'Docker'],
      langsISpeak: ['English']      
    }
  },
  methods: {

  },
  watch: {
    section: function() {
        if(!this.section){
            document.getElementById('section-text').style.display = "none";
            this.sectionIcon = 'expand_more';
            this.sectionTooltip = 'Show section';
        }
        else{
            document.getElementById('section-text').style.display = "block";
            this.sectionIcon = 'expand_less';
            this.sectionTooltip = 'Hide section';
        }
    }
  },
  components:{
    Experience, Education
  }
}
</script>

<style>
    .about-list{list-style-type:none;padding:0;margin-top:7px}
    .about-logo{padding:4px 10px 0 7px}
    .about-header{margin-bottom:15px;padding-left:7px}
    .divider{margin-top:28px;margin-bottom:28px}
    .about-pos{font-size:20px;font-weight:400}
    .about-title{font-size:15px;font-weight:500;color:#333;margin-right:10px}
    .about-time{padding-top:2px;font-weight:400;color:#333}

    #about-section .tech-section{margin-top:25px;}
    #about-section .lang-section{margin-top:13px;}
    #about-section .tech-item{
        border:1px solid #9ac;
        border-radius:2px;
        color:#646769;
        font-size:13px;
        padding:0 3px 0 3px;
        margin:3px 4px 0 0;
        display: inline-block;
    }
</style>
