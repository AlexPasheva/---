// set up the scene, the camera and the renderer
let scene, camera, renderer, controls;
const texture = THREE.ImageUtils.loadTexture('pics/stone.jpg');
const stoneMesh = new THREE.MeshLambertMaterial({ map: texture });

function shape3D(shape, d, x, y, z) {
    // 3D by extruding 
    var extrudeSettings = { depth: d, bevelEnabled: false, curveSegments: 50 };
    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.translate(x, y, z);

    // 3D object
    var object = new THREE.Mesh(geometry, stoneMesh);
    return object;
}
function lastTop() {
    //its just the last part of it its basically the same with the null floor and I know I can do just one function with
    //parameters but its gonna be the same result
    const geometry = new THREE.BoxGeometry(6, 3, 6);
    var cube = new THREE.Mesh(geometry, stoneMesh);
    cube.position.y = 20;
    //cube.rotateOnAxis( new THREE.Vector3( 1,0,0), Math.PI / 4 );;
    scene.add(cube);
    const small = new THREE.BoxGeometry(2.5, 3, 2.5);
    box1 = new THREE.Mesh(small, stoneMesh);
    box1.position.x = -3;
    box1.position.y = 20;
    box1.position.z = 3;
    box2 = new THREE.Mesh(small, stoneMesh);
    box2.position.x = 3;
    box2.position.y = 20;
    box2.position.z = -3;
    box3 = new THREE.Mesh(small, stoneMesh);
    box3.position.x = -3;
    box3.position.y = 20;
    box3.position.z = -3;
    box4 = new THREE.Mesh(small, stoneMesh);
    box4.position.x = 3;
    box4.position.y = 20;
    box4.position.z = 3;
    scene.add(box1, box2, box3, box4);

    var curve = new THREE.Shape();
    curve.moveTo(2.64, 4.7);
    curve.lineTo(4.7, 4.7);
    curve.moveTo(4.7, 4.7);
    curve.quadraticCurveTo(5.7, 4.4, 5.7, 3.5);
    curve.moveTo(5.7, 3.5);
    curve.lineTo(5.7, 2.1);
    var curve1 = shape3D(curve, 3, -1, 0, 18.5);
    curve1.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / -2);
    var curve2 = shape3D(curve, 3, -1, 0, -21.5);
    curve2.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    var curve3 = shape3D(curve, 3, -1, 0, -21.5);
    curve3.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    curve3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    var curve4 = shape3D(curve, 3, -1, 0, 18.5);
    curve4.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / -2);
    curve4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    scene.add(curve1, curve2, curve3, curve4);
}
function firstStorey() {
    // its the same as first floor only changed y indexes
    var floorGeo = new THREE.BoxGeometry(19.7, 0.1, 15.5);
    var fillerGeo = new THREE.BoxGeometry(19, 0.6, 14.7);
    var storeyGeo = new THREE.BoxGeometry(18.7, 2.8, 14.5);
    const storeyMesh = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: scene.background });
    var floor = new THREE.Mesh(floorGeo, stoneMesh);
    var filler = new THREE.Mesh(fillerGeo, stoneMesh);
    var storey = new THREE.Mesh(storeyGeo, storeyMesh);
    floor.position.y = 19;
    filler.position.y = 19.3;
    storey.position.y = 18;
    scene.add(floor, filler);
    var floor1 = new THREE.Mesh(floorGeo, stoneMesh);
    var filler1 = new THREE.Mesh(fillerGeo, stoneMesh);
    var floor2Geo = new THREE.BoxGeometry(17.2, 0.1, 17.2);
    var filler2Geo = new THREE.BoxGeometry(16.7, 0.6, 16.7);
    var storey2Geo = new THREE.BoxGeometry(16.3, 2.8, 16.3);
    var floor2 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler2 = new THREE.Mesh(filler2Geo, stoneMesh);
    var storey1 = new THREE.Mesh(storeyGeo, storeyMesh);
    var storey2 = new THREE.Mesh(storey2Geo, storeyMesh);
    floor1.position.y = 19;
    floor2.position.y = 19;
    filler1.position.y = 19.3;
    filler2.position.y = 19.3;
    storey1.position.y = 18;
    storey2.position.y = 18;
    floor1.rotateY(Math.PI / 2);
    filler1.rotateY(Math.PI / 2);
    storey1.rotateY(Math.PI / 2);
    scene.add(floor1, filler1, filler2, storey, storey1, storey2, floor2);
}
function secondTop() {
    //same as the second floor but only the bottom part of it reversed
    var floorGeo = new THREE.BoxGeometry(24.2, 0.1, 16);
    var fillerGeo = new THREE.BoxGeometry(23.6, 0.6, 15.4);
    var floor = new THREE.Mesh(floorGeo, stoneMesh);
    var floor = new THREE.Mesh(floorGeo, stoneMesh);
    var filler = new THREE.Mesh(fillerGeo, stoneMesh);
    floor.position.y = 16.1;
    filler.position.y = 16.4;
    scene.add(floor, filler);
    var floor1 = new THREE.Mesh(floorGeo, stoneMesh);
    var filler1 = new THREE.Mesh(fillerGeo, stoneMesh);
    var floor2Geo = new THREE.BoxGeometry(19.7, 0.1, 19.7);
    var filler2Geo = new THREE.BoxGeometry(19.2, 0.6, 19.2);
    var floor2 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler2 = new THREE.Mesh(filler2Geo, stoneMesh);
    floor1.position.y = 16.1;
    floor2.position.y = 16.1;
    filler1.position.y = 16.4;
    filler2.position.y = 16.4;
    floor1.rotateY(Math.PI / 2);
    filler1.rotateY(Math.PI / 2);
    scene.add(floor1, floor2, filler1, filler2);
}
function secondStorey() {
    //the glassy part of the second floor
    var storeyGeo = new THREE.BoxGeometry(23.3, 2.8, 15.2);
    const storeyMesh = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: scene.background });
    var storey = new THREE.Mesh(storeyGeo, storeyMesh);
    storey.position.y = 15.1;
    var storey2Geo = new THREE.BoxGeometry(18.8, 2.8, 18.8);
    var storey1 = new THREE.Mesh(storeyGeo, storeyMesh);
    var storey2 = new THREE.Mesh(storey2Geo, storeyMesh);
    storey1.position.y = 15.1;
    storey2.position.y = 15.1;
    storey1.rotateY(Math.PI / 2);
    scene.add(storey, storey1, storey2);
}
function thirdTop() {
    //the third top is actualy the same as the bottom part of third floor but reversed
    var floorGeo = new THREE.BoxGeometry(30.2, 0.1, 16);
    var fillerGeo = new THREE.BoxGeometry(29.6, 0.6, 15.4);
    var floor = new THREE.Mesh(floorGeo, stoneMesh);
    var filler = new THREE.Mesh(fillerGeo, stoneMesh);
    floor.position.y = 13.4;
    filler.position.y = 13.65;
    scene.add(floor, filler);
    var floor1 = new THREE.Mesh(floorGeo, stoneMesh);
    var filler1 = new THREE.Mesh(fillerGeo, stoneMesh);
    var floor2Geo = new THREE.BoxGeometry(24.2, 0.1, 19.5);
    var filler2Geo = new THREE.BoxGeometry(23.6, 0.6, 19);
    var floor4Geo = new THREE.BoxGeometry(21.6, 0.1, 21.6);
    var filler4Geo = new THREE.BoxGeometry(21.2, 0.6, 21.2);
    var floor1 = new THREE.Mesh(floorGeo, stoneMesh);
    var filler1 = new THREE.Mesh(fillerGeo, stoneMesh);
    var floor2 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler2 = new THREE.Mesh(filler2Geo, stoneMesh);
    var floor3 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler3 = new THREE.Mesh(filler2Geo, stoneMesh);
    var floor4 = new THREE.Mesh(floor4Geo, stoneMesh);
    var filler4 = new THREE.Mesh(filler4Geo, stoneMesh);
    floor1.position.y = 13.4;
    floor2.position.y = 13.4;
    filler1.position.y = 13.65;
    filler2.position.y = 13.65;
    filler2.position.y = 13.65;
    floor3.position.y = 13.4;
    filler3.position.y = 13.65;
    floor4.position.y = 13.4;
    filler4.position.y = 13.65;
    floor1.rotateY(Math.PI / 2);
    filler1.rotateY(Math.PI / 2);
    floor3.rotateY(Math.PI / 2);
    filler3.rotateY(Math.PI / 2);
    scene.add(floor1, floor2, floor3, floor4, filler1, filler2, filler3, filler4);
}
function thirdFloor() {
    //this floor has more parts than usual because of the edges around the courners so it has 3 bases 3 fillers under the
    //bases and 3 glassy storeys on top of the bases
    var floorGeo = new THREE.BoxGeometry(30.2, 0.1, 16);
    var fillerGeo = new THREE.BoxGeometry(29.6, 0.6, 15.4);
    var storeyGeo = new THREE.BoxGeometry(29.3, 2.8, 15.2);
    const storeyMesh = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: scene.background });
    var floor = new THREE.Mesh(floorGeo, stoneMesh);
    var filler = new THREE.Mesh(fillerGeo, stoneMesh);
    var storey = new THREE.Mesh(storeyGeo, storeyMesh);
    floor.position.y = 10.65;
    filler.position.y = 10.4;
    storey.position.y = 12;
    scene.add(floor, filler);
    var floor1 = new THREE.Mesh(floorGeo, stoneMesh);
    var filler1 = new THREE.Mesh(fillerGeo, stoneMesh);
    var floor2Geo = new THREE.BoxGeometry(24.2, 0.1, 19.5);
    var filler2Geo = new THREE.BoxGeometry(23.6, 0.6, 19);
    var storey2Geo = new THREE.BoxGeometry(23.3, 2.8, 19);
    var floor4Geo = new THREE.BoxGeometry(21.6, 0.1, 21.6);
    var filler4Geo = new THREE.BoxGeometry(21.2, 0.6, 21.2);
    var storey4Geo = new THREE.BoxGeometry(20.8, 2.8, 20.8);
    var floor2 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler2 = new THREE.Mesh(filler2Geo, stoneMesh);
    var storey1 = new THREE.Mesh(storeyGeo, storeyMesh);
    var storey2 = new THREE.Mesh(storey2Geo, storeyMesh);
    var floor3 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler3 = new THREE.Mesh(filler2Geo, stoneMesh);
    var storey3 = new THREE.Mesh(storey2Geo, storeyMesh);
    var floor4 = new THREE.Mesh(floor4Geo, stoneMesh);
    var filler4 = new THREE.Mesh(filler4Geo, stoneMesh);
    var storey4 = new THREE.Mesh(storey4Geo, storeyMesh);
    floor1.position.y = 10.65;
    floor2.position.y = 10.65;
    filler1.position.y = 10.4;
    filler2.position.y = 10.4;
    filler2.position.y = 10.4;
    storey1.position.y = 12;
    storey2.position.y = 12;
    floor3.position.y = 10.65;
    filler3.position.y = 10.4;
    storey3.position.y = 12;
    floor4.position.y = 10.65;
    filler4.position.y = 10.4;
    storey4.position.y = 12;
    floor1.rotateY(Math.PI / 2);
    filler1.rotateY(Math.PI / 2);
    storey1.rotateY(Math.PI / 2);
    floor3.rotateY(Math.PI / 2);
    filler3.rotateY(Math.PI / 2);
    storey3.rotateY(Math.PI / 2);
    scene.add(floor1, floor2, floor3, floor4, filler1, filler2, filler3, filler4, storey, storey1, storey2, storey3, storey4);
}
function secondFloor() {
    //this floor has two bases, two fillers under the bases and two
    //glassy storeys as the one under it
    var floorGeo = new THREE.BoxGeometry(24.2, 0.1, 16);
    var fillerGeo = new THREE.BoxGeometry(23.6, 0.6, 15.4);
    var storeyGeo = new THREE.BoxGeometry(23.3, 2.8, 15.2);
    const storeyMesh = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: scene.background });
    var floor = new THREE.Mesh(floorGeo, stoneMesh);
    var filler = new THREE.Mesh(fillerGeo, stoneMesh);
    var storey = new THREE.Mesh(storeyGeo, storeyMesh);
    floor.position.y = 7.65;
    filler.position.y = 7.4;
    storey.position.y = 9;
    scene.add(floor, filler);
    var floor1 = new THREE.Mesh(floorGeo, stoneMesh);
    var filler1 = new THREE.Mesh(fillerGeo, stoneMesh);
    var floor2Geo = new THREE.BoxGeometry(19.7, 0.1, 19.7);
    var filler2Geo = new THREE.BoxGeometry(19.2, 0.6, 19.2);
    var storey2Geo = new THREE.BoxGeometry(18.8, 2.8, 18.8);
    var floor2 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler2 = new THREE.Mesh(filler2Geo, stoneMesh);
    var storey1 = new THREE.Mesh(storeyGeo, storeyMesh);
    var storey2 = new THREE.Mesh(storey2Geo, storeyMesh);
    floor1.position.y = 7.65;
    floor2.position.y = 7.65;
    filler1.position.y = 7.4;
    filler2.position.y = 7.4;
    storey1.position.y = 9;
    storey2.position.y = 9;
    floor1.rotateY(Math.PI / 2);
    filler1.rotateY(Math.PI / 2);
    storey1.rotateY(Math.PI / 2);
    scene.add(floor1, filler1, filler2, storey, storey1, storey2, floor2);
}
function firstFloor() {
    //first floor has two bases, two fillers under the bases and two storeys 
    var floorGeo = new THREE.BoxGeometry(19.7, 0.1, 15.5);
    var fillerGeo = new THREE.BoxGeometry(19, 0.6, 14.7);
    var storeyGeo = new THREE.BoxGeometry(18.7, 2.8, 14.5);
    const storeyMesh = new THREE.MeshBasicMaterial({ color: 0xffffff, envMap: scene.background });
    var floor = new THREE.Mesh(floorGeo, stoneMesh);
    var filler = new THREE.Mesh(fillerGeo, stoneMesh);
    var storey = new THREE.Mesh(storeyGeo, storeyMesh);
    floor.position.y = 4.65;
    filler.position.y = 4.3;
    storey.position.y = 6;
    scene.add(floor, filler);
    var floor1 = new THREE.Mesh(floorGeo, stoneMesh);
    var filler1 = new THREE.Mesh(fillerGeo, stoneMesh);
    var floor2Geo = new THREE.BoxGeometry(17.2, 0.1, 17.2);
    var filler2Geo = new THREE.BoxGeometry(16.7, 0.6, 16.7);
    var storey2Geo = new THREE.BoxGeometry(16.3, 2.8, 16.3);
    var floor2 = new THREE.Mesh(floor2Geo, stoneMesh);
    var filler2 = new THREE.Mesh(filler2Geo, stoneMesh);
    var storey1 = new THREE.Mesh(storeyGeo, storeyMesh);
    var storey2 = new THREE.Mesh(storey2Geo, storeyMesh);
    floor1.position.y = 4.65;
    floor2.position.y = 4.65;
    filler1.position.y = 4.3;
    filler2.position.y = 4.3;
    storey1.position.y = 6;
    storey2.position.y = 6;
    floor1.rotateY(Math.PI / 2);
    filler1.rotateY(Math.PI / 2);
    storey1.rotateY(Math.PI / 2);
    scene.add(floor1, filler1, filler2, storey, storey1, storey2, floor2);
}
function holders() {
    //these are the things that hold the building
    var bot = new THREE.BoxGeometry(1, 3, 0.5);
    var original = new THREE.Mesh(bot, stoneMesh);
    var krivaGreda = new THREE.BoxGeometry(1, 10, 0.5);
    var kgreda = new THREE.Mesh(krivaGreda, stoneMesh);
    kgreda.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI / 4);
    var floor = new THREE.BoxGeometry(18.2, 1, 0.5);
    var greda = new THREE.Mesh(floor, stoneMesh);
    var i = 0, mesh, gclone, kclone, rad, x, z;
    //here I put the in loops so i can have many copies of them
    while (i < 4) {
        kclone = kgreda.clone();
        gclone = greda.clone();
        mesh = original.clone();
        rad = Math.PI * 3.6 * (i / 9.6);
        z = rad * 2;
        kclone.position.set(11.8, 7, i + z - 5);
        gclone.position.set(-0.1, 3.5, i + z - 5);
        mesh.position.set(8.5, 1.5, i + z - 5);
        scene.add(kclone);
        scene.add(gclone);
        scene.add(mesh);
        i += 1;
    }
    i = 0;
    kgreda.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI / 4);
    kgreda.rotateOnAxis(new THREE.Vector3(0, 0, 1), -Math.PI / 4);
    while (i < 4) {
        kclone = kgreda.clone();
        mesh = original.clone();
        rad = Math.PI * 3.6 * (i / 9.6);
        x = -8.7;
        z = rad * 2;
        kclone.position.set(-11.8, 7, i + z - 5);
        scene.add(kclone);
        mesh.position.set(x, 1.5, i + z - 5);
        scene.add(mesh);
        i += 1;
    }
    bot = new THREE.BoxGeometry(0.5, 3, 1);
    floor = new THREE.BoxGeometry(0.5, 1, 18.02);
    original = new THREE.Mesh(bot, stoneMesh);
    greda = new THREE.Mesh(floor, stoneMesh);
    var krivaGreda2 = new THREE.BoxGeometry(0.5, 1, 10);
    var kgreda2 = new THREE.Mesh(krivaGreda2, stoneMesh);
    kgreda2.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 4);
    i = 0;
    while (i < 4) {
        kclone = kgreda2.clone();
        mesh = original.clone();
        gclone = greda.clone();
        x = - i * 3.47 + 5.2;
        z = -3.5;
        gclone.position.set(x, 3.5, z + 3.5);
        kclone.position.set(x, 6.7, z + 15.1);
        mesh.position.set(x, 1.5, z - 5);
        scene.add(mesh);
        scene.add(kclone);
        scene.add(gclone);
        i += 1;
    }
    kgreda2.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 4);
    kgreda2.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 4);
    i = 0;
    while (i < 4) {
        mesh = original.clone();
        kclone = kgreda2.clone();
        x = - i * 3.47 + 5.2;
        z = 13.5;
        kclone.position.set(x, 6.7, z - 25);
        mesh.position.set(x, 1.5, z - 5);
        scene.add(mesh);
        scene.add(kclone);
        i += 1;
    }

}
function nullFloor() {
    //big box in the center and then 4 small boxes on the cornesrs of it
    const geometry = new THREE.BoxGeometry(6, 3, 6);
    var cube = new THREE.Mesh(geometry, stoneMesh);
    cube.position.y = 1.5;
    scene.add(cube);

    const small = new THREE.BoxGeometry(2.5, 3, 2.5);
    box1 = new THREE.Mesh(small, stoneMesh);
    box1.position.x = -3;
    box1.position.y = 1.5;
    box1.position.z = 3;
    box2 = new THREE.Mesh(small, stoneMesh);
    box2.position.x = 3;
    box2.position.y = 1.5;
    box2.position.z = -3;
    box3 = new THREE.Mesh(small, stoneMesh);
    box3.position.x = -3;
    box3.position.y = 1.5;
    box3.position.z = -3;
    box4 = new THREE.Mesh(small, stoneMesh);
    box4.position.x = 3;
    box4.position.y = 1.5;
    box4.position.z = 3;
    scene.add(box1, box2, box3, box4);

    //these are the curves for the base around the small boxes
    var curve = new THREE.Shape();
    curve.moveTo(2.64, 4.7);
    curve.lineTo(4.7, 4.7);
    curve.moveTo(4.7, 4.7);
    curve.quadraticCurveTo(5.7, 4.4, 5.7, 3.5);
    curve.moveTo(5.7, 3.5);
    curve.lineTo(5.7, 2.1);
    var curve1 = shape3D(curve, 3, -1, 0, 0);
    curve1.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / -2);
    var curve2 = shape3D(curve, 3, -1, 0, -3);
    curve2.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    var curve3 = shape3D(curve, 3, -1, 0, -3);
    curve3.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    curve3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    var curve4 = shape3D(curve, 3, -1, 0, 0);
    curve4.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / -2);
    curve4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    scene.add(curve1, curve2, curve3, curve4);

    holders();

    //orbit controls working like usual
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function init() {
    //scene and camera positions
    scene = new THREE.Scene();
    scene.background = new THREE.CubeTextureLoader() //bacground set of images working as sky box
        .setPath('HeroesSquare/')
        .load(['posx.jpg', 'negx.jpg', 'posy.jpg', 'negy.jpg', 'posz.jpg', 'negz.jpg']);
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
    );
    camera.position.x = 36;
    camera.position.y = 2;
    camera.position.z = 36;

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#000000");
    document.body.appendChild(renderer.domElement);

    //functions for building the library
    nullFloor();
    firstFloor();
    secondFloor();
    thirdFloor();
    thirdTop();
    secondStorey();
    secondTop();
    firstStorey();
    lastTop();

    //Lights and shadows
    var ambientLight, hemisphereLight, shadowLight;
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
    ambientLight = new THREE.AmbientLight(0xF3CCC2, 0.6);
    shadowLight = new THREE.DirectionalLight(0xffffff, .3);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -300;
    shadowLight.shadow.camera.right = 300;
    shadowLight.shadow.camera.top = 300;
    shadowLight.shadow.camera.bottom = -300;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadow.mapSize.width = 4096;
    shadowLight.shadow.mapSize.height = 4096;
    //var ch = new THREE.CameraHelper(shadowLight.shadow.camera);
    //scene.add(ch);
    scene.add(hemisphereLight);
    scene.add(shadowLight);
    scene.add(ambientLight);

    // scene floor and fog 
    scene.fog = new THREE.FogExp2(0x836752, 0.0008);
    renderer.setClearColor(scene.fog.color, 1);
    let tex = new THREE.TextureLoader().load("https://s7d2.scene7.com/is/image/ArmstrongFlooring/34512_2?wid=600&hei=600&fit=crop")
    tex.anisotropy = 100
    tex.repeat.set(1000, 1000)
    tex.wrapT = THREE.RepeatWrapping
    tex.wrapS = THREE.RepeatWrapping
    geo = new THREE.PlaneBufferGeometry(10000, 10000)
    mat = new THREE.MeshLambertMaterial({ map: tex })
    mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(0, 0, 0)
    mesh.rotation.set(Math.PI / -2, 0, 0)
    scene.add(mesh)
}

function handleWindowResize() //resize function so the scene resizes too
{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
window.addEventListener('resize', handleWindowResize, false);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
init();
animate();



