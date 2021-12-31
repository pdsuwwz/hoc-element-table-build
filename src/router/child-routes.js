
const importModule = import.meta.glob('../views/*.vue')

const childrenRoutes = [
  {
    path: '/',
    name: 'hoc-element-table',
    component: importModule['../views/ExampleTable.vue'],
    meta: {
      title: '@hoc-element/table'
    }
  }
]

export default childrenRoutes
