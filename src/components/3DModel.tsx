import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  autoRotate?: boolean;
}

const Model3D: React.FC<ModelProps> = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  color = '#f5f5dc', 
  autoRotate = true 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Create a geometric shape
    let geometry;
    const randomShape = Math.floor(Math.random() * 4);
    
    switch(randomShape) {
      case 0:
        geometry = new THREE.IcosahedronGeometry(2, 0);
        break;
      case 1:
        geometry = new THREE.OctahedronGeometry(2, 0);
        break;
      case 2:
        geometry = new THREE.DodecahedronGeometry(2, 0);
        break;
      default:
        geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    }
    
    // Material with glow effect
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.3,
      roughness: 0.4,
      emissive: new THREE.Color(color),
      emissiveIntensity: 0.2,
      wireframe: true
    });
    
    // Create mesh and add to scene
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position[0], position[1], position[2]);
    mesh.rotation.set(rotation[0], rotation[1], rotation[2]);
    scene.add(mesh);
    
    // Animation loop
    let frameId: number;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      if (autoRotate) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [position, rotation, color, autoRotate]);
  
  return <div ref={mountRef} className="w-full h-full" />;
};

export default Model3D;
