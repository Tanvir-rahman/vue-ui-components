<template>
    <el-form ref="form" model="form" label-width="120px">
        <el-row :gutter="20">
            <el-col class="grid-content" :span="12">
                <el-input
                    :placeholder="placeholder"
                    v-model="form.input"
                    v-bind="$attrs"
                    v-on="$listeners">
                        <slot></slot>
                </el-input>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
export default {
  name: 'DisabledInput',
  props: {
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {
        input: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
