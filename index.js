<<<<<<< HEAD
function fun(name) {
    var diff_models = document.querySelector('a-entity');
    diff_models.removeAttribute('gltf-model');
    if(name.className == 'dancing') {
        diff_models.setAttribute('fbx-model','#'+name.className);
    }
    diff_models.setAttribute('gltf-model','#'+name.className);
}

// function fun2() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene ar
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/car/scene.gltf" scale="1500 1500 1500" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun1() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/buster_drone/scene.gltf" scale="150 150 150" position="400 0 -100">
            </a-entity>
        </a-nft>
        <a-entity camera>

        </a-entity>
    </a-scene>`
}

function fun2() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/car/scene.gltf" scale="1500 1500 1500" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun3() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/monk/scene.gltf" scale="250 250 250" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun3() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/monk/scene.gltf" scale="250 250 250" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun4() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/DevParisar.glb" scale="5 5 5" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun4() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/DevParisar.glb" scale="5 5 5" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun5() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/Fridge.glb" scale="150 150 150" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun5() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/Fridge.glb" scale="150 150 150" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun6() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene ar
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-camera position="0 1.2 0"></a-camera>
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/tree.gltf" scale="15 15 15" position="400 0 -100" rotation="-90 0 0">
//             </a-entity>
//         </a-nft>
=======
function fun6() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/tree.gltf" scale="15 15 15" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun7() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/wooden_wardrobe.glb" scale="10 10 10" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun7() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/wooden_wardrobe.glb" scale="10 10 10" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun8() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/Couch.gltf" scale="25 25 25" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun8() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/Couch.gltf" scale="25 25 25" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun9() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/Microwave.glb" scale="25 25 25" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun9() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/Microwave.glb" scale="25 25 25" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun10() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/coffee_table.gltf" scale="150 150 150" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun10() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/coffee_table.gltf" scale="150 150 150" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun11() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/arm_chair__furniture.glb" scale="250 250 250" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun11() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/arm_chair__furniture.glb" scale="250 250 250" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun12() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/chair1.glb" scale="150 150 150" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun12() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/chair1.glb" scale="150 150 150" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun13() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/ImageToStl.com_2 bhk.glb" scale="15 15 15" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun13() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/ImageToStl.com_2 bhk.glb" scale="15 15 15" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun14() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/ImageToStl.com_kitchen.glb" scale="15 15 15" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun14() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/ImageToStl.com_kitchen.glb" scale="15 15 15" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun15() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/couldron/scene.gltf" scale="250 250 250" position="800 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun15() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/couldron/scene.gltf" scale="250 250 250" position="800 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

//         </a-entity>
//     </a-scene>`
// }

<<<<<<< HEAD
// function fun16() {
//     document.getElementById('cam').innerHTML = `
//     <a-scene 
//         vr-mode-ui="enabled: false;" 
//         renderer="logarithmicDepthBuffer: true;" 
//         embedded
//         arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//         <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//             smoothThreshold="5">
//             <a-entity gltf-model="assets/building/scene.gltf" scale="5 5 5" position="400 0 -100">
//             </a-entity>
//         </a-nft>
=======
function fun16() {
    document.getElementById('cam').innerHTML = `
    <a-scene 
        vr-mode-ui="enabled: false;" 
        renderer="logarithmicDepthBuffer: true;" 
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
        <a-nft type="nft" url="./image-tracking/assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
            smoothThreshold="5">
            <a-entity gltf-model="assets/building/scene.gltf" scale="5 5 5" position="400 0 -100">
            </a-entity>
        </a-nft>
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
        
//         <a-entity camera>

<<<<<<< HEAD
//         </a-entity>
//     </a-scene>`
// }

// function fun17() {
//     document.getElementById('cam').innerHTML = `<a-scene 
//     vr-mode-ui="enabled: false;" 
//     renderer="logarithmicDepthBuffer: true;" 
//     embedded
//     arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
//     <a-nft type="nft" url="assets/image_descriptors/track_image" smooth="true" smoothCount="10" smoothTolerance=".01"
//         smoothThreshold="5">
//         <a-entity gltf-model="assets/Waving.glb" scale="1 1 1" position="400 0 -100" animation-mixer>
//         </a-entity>
//     </a-nft>
    
//     <a-entity camera>

//     </a-entity>
// </a-scene>`
// }
=======
        </a-entity>
    </a-scene>`
}
>>>>>>> cb74b818229ada5700bba4b5e088d07e0c9c4a34
