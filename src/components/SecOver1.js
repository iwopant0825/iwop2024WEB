import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Canvas } from "@react-three/fiber";
import {Environment, OrbitControls, useGLTF} from "@react-three/drei";

function Over1() {
    const model = useGLTF('./models/whale.glb');
    return (
        <div className="Over1">
            <Canvas
                camera={{
                    near:1,
                    far:100,
                    position:[7,7,0]
                }}
            >
                <Environment preset={"sunset"}/>
                <primitive object={model.scene}/>
            </Canvas>

        </div>
    );
}

export default Over1;