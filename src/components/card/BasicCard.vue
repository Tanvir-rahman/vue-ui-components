<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <slot name="title"></slot>
        </div>
        <slot name="items"></slot>
    </el-card>
</template>

<script>
export default {
  name: 'BasicCard'
}
</script>

<style scoped lang="scss">
    .el-card__header {
        font-family: 'Lato';
        font-weight: 300;
    }

    .el-card__body {
    font-family: 'Lato';
    font-weight: 300;
    }

  .text {
    font-size: 14px;
    font-family: 'Lato';
    font-weight: 300;
  }

  .item {
    margin-bottom: 18px;
    font-family: 'Lato';
    font-weight: 300;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }
</style>>
