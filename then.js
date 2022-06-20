function a (number) {
  return new Promise((resolve, reject) => {
    if (number > 4) {
      reject() // 이행 되지 않았을 때 또는 에러 발생시 실행
      return
    }
    setTimeout(() => {
      console.log('A')
      resolve() // 이행 되었을시 실행
    }, 1000)
  })
}

async function test() {
//   a(2)
//   .then(() => {
//     console.log('Resolve!')
//   })
//   .catch(() => {
//     console.log('Reject!')
//   })
//   .finally(() => {
//     console.log('Done!') // resolve 가 실행되지 않더라도 코드 자체가 실행이 되었다면 출력
//   })
// }

// try catch 버너
try {
  await a(8)
  console.log('Resolve!')
} catch (error) {
  console.log('Reject!')
} finally {
  console.log('Done!')
  } 
}
test()