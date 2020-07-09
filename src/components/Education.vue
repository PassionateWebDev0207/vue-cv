<template>
	<v-card>
		<v-card-title>
			{{ title }}
			<v-spacer />
			<v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
				<v-icon>{{sectionIcon}}</v-icon>
			</v-btn>
		</v-card-title>

		<v-card-text id="section-text-edu">
			<ul class="about-list">
				<li class="about-list-item" v-for="(item, index) in education" :key="index">
					<v-row>
						<div class="edu-logo">
							<img :src="item.logo" height="70" width="70">
						</div>
						<div class="about-header">
							<div class="about-pos">{{ item.degree }}</div>
							<div class="about-title">{{ item.title }}</div>
						</div>
					</v-row>

					<div class="about-text" v-html="item.text" />
					<v-divider v-if="index !== (education.length-1)" />
				</li>
			</ul>
		</v-card-text>
	</v-card>
</template>

<script>
const ust_logo = require('@/assets/ust-hk.jpg');

export default {
  data () {
    return {
      title: 'Education',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      education:[
        {
					title:'The Hong Kong University of Science and Technology',
					logo:ust_logo, 
					degree:'Bachelor of Computer Science',
					text:'Bachelor\'s degree in Computer Science.<br/>' +
							'<br/>University website: <a href="https://www.ust.hk/">https://www.ust.hk/</a>'
        }
      ]
    }
  },
  watch: {
    section: function() {
			if(!this.section){
				document.getElementById('section-text-edu').style.display = "none";
				this.sectionIcon = 'expand_more';
				this.sectionTooltip = 'Show section';
			} else {
				document.getElementById('section-text-edu').style.display = "block";
				this.sectionIcon = 'expand_less';
				this.sectionTooltip = 'Hide section';
			}
    }
  }
}
</script>

<style scoped>
</style>
