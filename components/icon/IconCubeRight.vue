<template>
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9618 16.823L11.3169 22.1026L11.3169 10.7871L21.9614 6.28711L21.9618 16.823Z" :fill="active ? 'url(#paint0_linear_366_669)' : '#6983AB'"/>
    <path d="M22 6.02047V11.2142V16.8612L11.3852 22M22 6.02047L11.3852 1L1 6.18834M22 6.02047L11.3852 11.1577M11.3852 11.1577V22M11.3852 11.1577L8.78893 9.95773L5.89487 8.55718L1 6.18834M1 6.18834V16.9742L11.3852 22" :stroke="active ? 'url(#paint1_linear_366_669)' : '#6983AB'" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_366_669" x1="11.3169" y1="25.5293" x2="25.7771" y2="23.442" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0066FF"/>
        <stop offset="1" stop-color="#2CE0C5"/>
      </linearGradient>
      <linearGradient id="paint1_linear_366_669" x1="1" y1="26.55" x2="28.8405" y2="20.5792" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0066FF"/>
        <stop offset="1" stop-color="#2CE0C5"/>
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
