<template>
    <el-switch v-model="value"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    @click="$emit('click')"
    disabled>
    </el-switch>
</template>

<script>
export default {
  name: 'DisabledSwitch',
  props: {
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
