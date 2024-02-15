import  { useEffect, useRef , useState} from 'react';
import './sectionAnimated.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import totoroLoading from '../../../assets/img/TotoroMovimiento.gif'


const SectionAnimated = () => {

  const [loading , setLoading] = useState(true);

  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.2, 100);
    scene.add(camera);
    camera.position.set(3.5, 1, 1.5);
    camera.lookAt(new THREE.Vector3());

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true; // Habilita sombras
    currentRef.appendChild(renderer.domElement);

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', resize);

    //DracoLoader

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');
    //dracoLoader.setDecoderConfig({ type: 'js' });

    // Loader

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load(
      './models/HouseTatami/CASAMODEL.gltf', // Ajusta la ruta al modelo
      (gltf) => {
        console.log('Modelo cargado correctamente', gltf);
        
        // Ajusta la escala y posición del modelo
        gltf.scene.scale.set(0.1, 0.1, 0.1);
        gltf.scene.position.set(0.5, -0.3, 0.2);
        
        // Habilita sombras para cada malla del modelo
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(gltf.scene);
        setLoading(false);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      (error) => {
        console.error('Error al cargar el modelo', error);
      }
    );

    // Luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Luz direccional (opcional)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const animate = () => {
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
    <div className='animacion' ref={mountRef} style={{ width: '100%', height: '500px' }}>
      {loading && <div className='loading-screnn'>
        <img src={totoroLoading} alt="" />
        Loading
        </div> }
    </div>
  );
};

export default SectionAnimated;

