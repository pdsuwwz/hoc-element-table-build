<template>
  <TableList />
</template>

<script>
import TableList from '@/components/table-list/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExampleTable',
  components: {
    TableList
  }
})
</script>
