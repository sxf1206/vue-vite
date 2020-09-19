import {
  reactive,
  computed
} from 'vue'
function usertodo() {
  let state = reactive({
    todolist: [{
      name: '吃烧烤',
      done: true
    }, {
      name: '打游戏',
      done: true
    }],
    val: ''
  })
  let total = computed(() => state.todolist.length)

  function addtodo() {
    state.todolist.push({
      name: state.val,
      done: false
    })
  }

  return {
    state,
    addtodo,
    total
  }
}

export default usertodo