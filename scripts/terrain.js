Cross = function(c, d) {

    return [
        c[2] * d[3] - c[3] * d[2],
        c[3] * d[1] - c[1] * d[3],
        c[1] * d[2] - c[2] * d[1]
    ]
}


CreateTerrain = function(seed) {

    var index = 0
    var indicesIndex = 0

    _vertices = []
    _indices = []

    var tx = 40

    for (var i = 0; i < tx; i++) {
        for (var j = 0; j < tx; j++) {
            _vertices[index*6] = ((i/tx)*2 - 1.0) * 20
            _vertices[index*6+1] = noiseLayerAbs(i/tx * 2.4, j/tx * 2.4, 2, 0.5, 3, seed) * 10 - 25
            _vertices[index*6+2] = ((j/tx)*2 - 1.0) * 20

            if (i != tx-1 && j != tx-1) {
                _indices[indicesIndex  ] = index+tx+1
                _indices[indicesIndex+1] = index+tx
                _indices[indicesIndex+2] = index
                _indices[indicesIndex+3] = index
                _indices[indicesIndex+4] = index+1
                _indices[indicesIndex+5] = index+tx+1
                indicesIndex += 6
            }
            index++
        }
    }

    for (var i = 0; i < _vertices.length / 6; i++) {
        var coord1 = [_vertices[i*6] == undefined ? 0 : _vertices[i*6], _vertices[i*6] == undefined ? 0 : _vertices[i*6],  _vertices[i*6] == undefined ? 0 : _vertices[i*6]]
        var coord2 = [_vertices[i*6] == undefined ? 0 : _vertices[i*6], _vertices[i*6] == undefined ? 0 : _vertices[i*6],  _vertices[i*6] == undefined ? 0 : _vertices[i*6]]
        var coord3 = [_vertices[i*6] == undefined ? 0 : _vertices[i*6], _vertices[i*6] == undefined ? 0 : _vertices[i*6],  _vertices[i*6] == undefined ? 0 : _vertices[i*6]]
        
        var a = [
            coord2[0] - coord1[0],
            coord2[1] - coord1[1],
            coord2[2] - coord1[2],
        ]
        var b = [
            coord3[0] - coord1[0],
            coord3[1] - coord1[1],
            coord3[2] - coord1[2],
        ]
        var dir = Cross(coord1, coord2)
        var length = 1.0 / Math.sqrt(dir[0] * dir[0] + dir[1] * dir[1] + dir[2] * dir[2])
        var normal = [dir[0] * length, dir[1] * length, dir[2] * length]

        console.log(dir[0])

        _vertices[index*6+3] = normal[0]
        _vertices[index*6+4] = normal[1]
        _vertices[index*6+5] = normal[2]
    }

    return {
        vertices: _vertices,
        indices:  _indices
    }
}