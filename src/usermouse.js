//鼠标快跑，显示鼠标的坐标
//功能都可以随便拆包
//做到按需打包

import {ref,onMounted,onUnmounted} from 'vue'
export default  function(){
  const x=ref(0),y=ref(0)
 function update(e){
   x.value=e.pageX
   y.value=e.pageY
 }
 onMounted(()=>{
   window.addEventListener('mousemove', update)
 })

 onUnmounted(()=>{
window.removeEventListener('mousemove', update)

 })

 return {x,y}
}