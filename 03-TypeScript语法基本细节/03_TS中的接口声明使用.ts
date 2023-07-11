const name = "why"

console.log("why")
console.log(name)

type PointType = {
  x: number
  y: number
  z?: number
}

// 接口: interface
// 声明的方式
interface PointType2 {
  x: number
  y: number
  z?: number
}

function printCoordinate(point: PointType2) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}

printCoordinate({x:1,y:2,z:-1})


export {}

