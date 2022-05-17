<template>
  <div @click="reload">
    <h1>点击跳转</h1>
    <H3>跳转地址：{{url}}</H3>
  </div>
</template>

<script>
export default {
  name: 'Home',
	data () {
    return {
      url: window.location.origin
    }
	},
  methods: {
    reload () {
      window.location.href = window.location.origin
    }
  }
}
</script>
