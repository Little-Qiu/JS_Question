/*
 * @Author: LittleQ
 * @Date: 2023-03-02 21:10:55
 * @LastEditTime: 2023-03-02 21:23:23
 * @LastEditors: LittleQ
 * @Description: 
 * @FilePath: \NoteBook\javescript\example\worker.js
 */
// 写法一
this.addEventListener('message', function (e) {
    this.postMessage('You post: ' + e.data);
}, false);

// 写法二
addEventListener('message', function (e) {
    postMessage('You said: ' + e.data);
  }, false);