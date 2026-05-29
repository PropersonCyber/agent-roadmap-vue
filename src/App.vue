<script setup lang="ts">
import './styles/variables.css'

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProgressDashboard from './components/ProgressDashboard.vue'
import SectionIntro from './components/SectionIntro.vue'
import SectionWork from './components/SectionWork.vue'
import SectionSkills from './components/SectionSkills.vue'
import SectionRoadmap from './components/SectionRoadmap.vue'
import SectionProjects from './components/SectionProjects.vue'
import SectionCareer from './components/SectionCareer.vue'
import SectionResources from './components/SectionResources.vue'
import FooterSection from './components/FooterSection.vue'
import ToastNotification from './components/ToastNotification.vue'
import ConfettiEffect from './components/ConfettiEffect.vue'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <NavBar />
  <ConfettiEffect />
  <ToastNotification />

  <HeroSection @scroll-to="scrollTo" />
  <ProgressDashboard @scroll-to-month="scrollTo" />
  <SectionIntro />
  <SectionWork />
  <SectionSkills />
  <SectionRoadmap />
  <SectionProjects />
  <SectionCareer />
  <SectionResources />
  <FooterSection />
</template>

<style>
/* Additional app-level overrides */
#work { background: var(--bg-elevated); }
#roadmap { background: var(--bg-elevated); }
#career { background: var(--bg-elevated); }
</style>
