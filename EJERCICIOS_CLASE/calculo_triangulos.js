function calculaDistancia(p1,p2) {
    const c1 = (p2.x - p1.x)
    const c2 = (p2.y - p2.y)

    const d1 = Math.sqrt(Math.pow(c1,2) + c2*c2)

    return d1
}

function calcularTriangulo(p1,p2,p3) {
    
    console.log(`D1 ${calculaDistancia(p1,p2)}`);
    console.log(`D2 ${calculaDistancia(p1,p2)}`);
    console.log(`D3 ${calculaDistancia(p1,p2)}`);

}

let p1 = { x: 0, y: 0}
let p2 = { x: 4, y: 0}
let p3 = { x: 2, y: 10}

calcularTriangulo(0,0,4,0,2,10)