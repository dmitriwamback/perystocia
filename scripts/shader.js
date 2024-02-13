CreateShader = function(vertexShaderSource, fragmentShaderSource, GL) {

    let vertex = GL.createShader(GL.VERTEX_SHADER)
    let fragment = GL.createShader(GL.FRAGMENT_SHADER)

    let program = GL.createProgram()

    GL.shaderSource(vertex, vertexShaderSource)
    GL.shaderSource(fragment, fragmentShaderSource)
    GL.compileShader(vertex)
    GL.compileShader(fragment)

    GL.attachShader(program, vertex)
    GL.attachShader(program, fragment)
    GL.linkProgram(program)

    return program
}

CreateRenderBuffer = function(GL) {

    let vertexbuffer = GL.createBuffer()
    let indexBuffer = GL.createBuffer()

    return {
        "VertexBufferObject": vertexbuffer,
        "IndexBufferObject": indexBuffer
    }
}

FindAttributeLocation = function(shader, name, GL) {
    return GL.getAttribLocation(shader.program, name)
}

UniformVector3Location = function(shader, name, val, GL) {
    let location = GL.getUniformLocation(shader.program, name)
    GL.uniform3fv(location, new Float32Array(val))
}

UniformMatrix4Location = function(shader, name, mat4x4, GL) {

    let location = GL.getUniformLocation(shader.program, name)
    GL.uniformMatrix4fv(location, GL.FALSE, mat4x4)
}