

// function fn(callback) {
//     setTimeout(() => {
//         // 异步操作
//         var a = 10
//         callback(a) // 处理异步操作

//     })
// }







// 导出方法1
// fn((a) => {
//     console.log(a); //可以访问异步数据
// })


// Promise方法解决异步问题

// function fn() {
//     return new Promise((resolve, rejest) => {
//         setTimeout(() => {
//             var a = 10
//             resolve(a)
//         }, 1000)
//     })
// }

//导出方法2
// export default fn
//到外面使用方法1



// asynche和promise





