import React, { useEffect, useRef, useState } from 'react';
import './totoroWhite.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const TotoroWhite = () => {
    const [loading, setLoading] = useState(true);
    const mountRef = useRef(null);
    let model;

    useEffect(() => {
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 10);
        scene.add(camera);
        camera.position.set(3, 3, 3);
        camera.lookAt(new THREE.Vector3());

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.shadowMap.enabled = true;
        currentRef.appendChild(renderer.domElement);

        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;

        const resize = () => {
            const { clientWidth, clientHeight } = currentRef;
            renderer.setSize(clientWidth, clientHeight);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', resize);

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('./draco/');

        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);
        gltfLoader.load(
            './models/TotoroWhite/totoroWhite.gltf',
            (gltf) => {
                console.log('Modelo cargado correctamente', gltf);

                model = gltf.scene;
                model.scale.set(0.1, 0.1, 0.1);
                model.position.set(2, 2, 2);

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                scene.add(model);
                setLoading(false);

                const boundingBox = new THREE.Box3().setFromObject(model);
                const center = boundingBox.getCenter(new THREE.Vector3());
                const size = boundingBox.getSize(new THREE.Vector3());
                const maxSize = Math.max(size.x, size.y, size.z);
                const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
                const fitWidthDistance = fitHeightDistance / camera.aspect;
                const distance = 1.2 * Math.max(fitHeightDistance, fitWidthDistance);
                const direction = orbitControls.target.clone().sub(camera.position).normalize().multiplyScalar(distance);

                orbitControls.maxDistance = distance * 10;
                orbitControls.target.copy(center);
                camera.near = distance / 100;
                camera.far = distance * 100;
                camera.updateProjectionMatrix();

                camera.position.copy(center).sub(direction);
                orbitControls.update();
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
            },
            (error) => {
                console.error('Error al cargar el modelo', error);
            }
        );

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(0.1, 0.1, 0.1).normalize();
        scene.add(directionalLight);

        const animate = () => {
            if (model) {
                const rotationSpeed = 0.01;
                model.rotation.y += rotationSpeed;
            }

            orbitControls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            currentRef.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="screen">
            <div className='animacion' ref={mountRef} style={{ width: '300px', height: '300px' }}>
            </div>
        </div>
    );
};

export default TotoroWhite;
