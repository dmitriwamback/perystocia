let mainCanvas = document.getElementById("backgroundgl")
let mainCanvasGL = mainCanvas.getContext('webgl', {depth: true, antialiasing: true})

if (mainCanvasGL == null)
    mainCanvasGL = mainCanvas.getContext('webgl2', {depth: true, antialiasing: true})
mainCanvasGL.clearColor(0, 0, 0, 1.0)

mainVertex = `

attribute vec3 vertex;
attribute vec3 normal;

uniform mat4 projection;
uniform mat4 lookAt;
varying vec3 n;

void main() {
    n = normal;
    gl_Position = projection * lookAt * vec4(vertex, 1.0);
    gl_PointSize = 8.0;
}
`
mainFragment = `
precision mediump float;
varying vec3 n;

uniform vec3 col;
void main() {
    gl_FragColor = vec4(col, 255.0) / 255.0;
}
`

let mainShader = {
    program: CreateShader(mainVertex, mainFragment, mainCanvasGL),
    buffers: CreateRenderBuffer(mainCanvasGL)
}

let triangle = {
    vertices: [
         0.0,  0.5, 0.0,
        -0.5, -0.5, 0.0,
         0.5, -0.5, 0.0
    ]
}
let terrain = CreateTerrain(Math.random() * 1000000)

let width = window.innerWidth
let height = window.innerHeight
var time = 0

mainCanvas.width = 3000
mainCanvas.height = 3000

let perspectiveProjection = new Float32Array(16)
let lookAt = new Float32Array(16)
glMatrix.mat4.perspective(perspectiveProjection, glMatrix.glMatrix.toRadian(90), (width/height), 0.1, 2000.0);
glMatrix.mat4.lookAt(lookAt, [1, 1, 1], [0, 0, 0], [0, 1, 0])

WebGLInit = function() {

    let vertexAttributeLocation = FindAttributeLocation(mainShader, "vertex", mainCanvasGL)
    let normalAttributeLocation = FindAttributeLocation(mainShader, "normal", mainCanvasGL)
    mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, mainShader.buffers["VertexBufferObject"])
    mainCanvasGL.bufferData(mainCanvasGL.ARRAY_BUFFER, new Float32Array(terrain.vertices), mainCanvasGL.STATIC_DRAW)
    mainCanvasGL.bindBuffer(mainCanvasGL.ELEMENT_ARRAY_BUFFER, mainShader.buffers["IndexBufferObject"])
    mainCanvasGL.bufferData(mainCanvasGL.ELEMENT_ARRAY_BUFFER, new Uint16Array(terrain.indices), mainCanvasGL.STATIC_DRAW)

    mainCanvasGL.enableVertexAttribArray(vertexAttributeLocation)
    mainCanvasGL.vertexAttribPointer(vertexAttributeLocation, 
                                     3, 
                                     mainCanvasGL.FLOAT, 
                                     mainCanvasGL.FALSE, 
                                     6 * Float32Array.BYTES_PER_ELEMENT, 0)

    mainCanvasGL.vertexAttribPointer(normalAttributeLocation, 
                                     3, 
                                     mainCanvasGL.FLOAT, 
                                     mainCanvasGL.FALSE, 
                                     6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT)

    mainCanvasGL.enable(mainCanvasGL.DEPTH_TEST)
}

WebGLInit()

var cameraPosition = [10, 20, 10]
var lastxlocation = 0
var lastylocation = 0
var isMouseDown = false
var initialSeed = Math.random() * 1000000

WebGLLoop = function() {

    var seed = initialSeed + document.body.scrollTop / 3000.0
    //let terrain = CreateTerrain(seed)

    window.onmousedown = function(e) {
        isMouseDown = true
    }
    window.onmouseup = function(e) {
        isMouseDown = false
    }

    window.onscroll = function(e) {
        var t = e.x
        console.log(t)
        seed = initialSeed + document.body.scrollTop
    }

    window.onmousemove = function(e) {
        var xlocation =  (e.offsetY / mainCanvas.clientWidth - 0.5) * 2
        var ylocation = -(e.offsetX / mainCanvas.clientHeight - 0.5) * 2

        var deltax = xlocation - lastxlocation
        var deltay = ylocation - lastylocation

        //if (isMouseDown) cameraPosition = [cameraPosition[0] - (deltax - deltay) * 10.8, 20, cameraPosition[2] - (deltay + deltax) * 10.8]

        lastxlocation = xlocation
        lastylocation = ylocation
    }

    mainCanvasGL.bindBuffer(mainCanvasGL.ARRAY_BUFFER, mainShader.buffers["VertexBufferObject"])
    mainCanvasGL.bufferData(mainCanvasGL.ARRAY_BUFFER, new Float32Array(terrain.vertices), mainCanvasGL.STATIC_DRAW)

    mainCanvasGL.clear(mainCanvasGL.COLOR_BUFFER_BIT | mainCanvasGL.DEPTH_BUFFER_BIT)
    mainCanvasGL.clearColor(0, 0, 0, 1.0)
    let width = window.outerWidth
    let height = window.outerHeight
    mainCanvasGL.viewport(0, 0, 3000, 3000)

    cameraPosition = [20 * Math.cos(time), 9, 20 * Math.sin(time)]

    glMatrix.mat4.ortho(perspectiveProjection, -width/70, width/70, -height/70, height/70, 0.01, 2000.0);
    //glMatrix.mat4.perspective(perspectiveProjection, glMatrix.glMatrix.toRadian(90), (width/height), 0.1, 2000.0);
    glMatrix.mat4.lookAt(lookAt, cameraPosition, [0, 0, 0], [0, 1, 0])

    mainCanvasGL.useProgram(mainShader.program)
    UniformMatrix4Location(mainShader, "projection", perspectiveProjection, mainCanvasGL)
    UniformMatrix4Location(mainShader, "lookAt", lookAt, mainCanvasGL)

    UniformVector3Location(mainShader, "col", [255, 255, 255], mainCanvasGL)
    //mainCanvasGL.drawElements(mainCanvasGL.TRIANGLES, terrain.indices.length, mainCanvasGL.UNSIGNED_SHORT, 0)

    UniformVector3Location(mainShader, "col", [255 - 94, 255 - 91, 255 - 93], mainCanvasGL);
    mainCanvasGL.drawElements(mainCanvasGL.LINES, terrain.indices.length, mainCanvasGL.UNSIGNED_SHORT, 0)
    mainCanvasGL.drawElements(mainCanvasGL.POINTS, terrain.indices.length, mainCanvasGL.UNSIGNED_SHORT, 0)

    time += 0.00125

    requestAnimationFrame(WebGLLoop)

    
}

requestAnimationFrame(WebGLLoop)