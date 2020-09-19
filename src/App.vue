<template>
  <div>
     hello 
     {{text}}  
{{state.val}}
<input
   type="text"
   placeholder="请输入..."  v-model="state.val"   @keyup.enter="addtodo()" >
</input>     
     
     <ul>
     <li v-for="item in state.todolist" :key="item.name">
     {{item.name}}
     </li>
     </ul>
    todolist:{{total}}
    <p>
x:{{x}}
y:{{y}}
    </p>
  </div>
</template>

<script>
import usertodo from './usertodo.js'
import usermouse from './usermouse.js';

//mixin不清晰，而且会有命名的冲突
//这个相比与mixin的来源比较清晰
export default {
  setup(){
    //这个的逻辑很清晰   告别了大几百行
      let text='world'
      let  {state,addtodo,total}=usertodo()
      let {x,y}=usermouse()
      return {text,state,addtodo,total,x,y}
  }
}
</script>
