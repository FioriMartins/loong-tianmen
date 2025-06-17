import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HardwareModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
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
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(-5, 5, -5);
    scene.add(backLight);
    
    // Create hardware model
    const createHardwareBox = () => {
      // Create base shape - rounded rectangle
      const shape = new THREE.Shape();
      const width = 2;
      const height = 0.5;
      const radius = 0.2;
      
      shape.moveTo(-width/2 + radius, -height/2);
      shape.lineTo(width/2 - radius, -height/2);
      shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
      shape.lineTo(width/2, height/2 - radius);
      shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
      shape.lineTo(-width/2 + radius, height/2);
      shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
      shape.lineTo(-width/2, -height/2 + radius);
      shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);
      
      const extrudeSettings = {
        steps: 1,
        depth: 0.8,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelOffset: 0,
        bevelSegments: 5
      };
      
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      
      // Material with subtle reflection
      const material = new THREE.MeshStandardMaterial({
        color: 0xf0f0f0,
        metalness: 0.2,
        roughness: 0.1,
        emissive: 0x222222,
        emissiveIntensity: 0.1
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 6; // Tilt slightly
      mesh.rotation.y = Math.PI / 6;  // Rotate slightly
      
      return mesh;
    };
    
    // Create logo on top
    const createLogo = () => {
      const geometry = new THREE.CircleGeometry(0.2, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x333333,
        transparent: true,
        opacity: 0.5
      });
      const logo = new THREE.Mesh(geometry, material);
      logo.position.set(0, 0, 0.5);
      logo.rotation.x = -Math.PI / 6;
      logo.rotation.y = Math.PI / 6;
      
      return logo;
    };
    
    // Create time display
    const createTimeDisplay = () => {
      const geometry = new THREE.PlaneGeometry(0.4, 0.15);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.8
      });
      const display = new THREE.Mesh(geometry, material);
      display.position.set(0.7, -0.15, 0.45);
      display.rotation.x = -Math.PI / 6;
      display.rotation.y = Math.PI / 6;
      
      return display;
    };
    
    // Create shadow
    const createShadow = () => {
      const geometry = new THREE.PlaneGeometry(2.5, 1);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide
      });
      const shadow = new THREE.Mesh(geometry, material);
      shadow.position.y = -0.5;
      shadow.rotation.x = -Math.PI / 2;
      
      return shadow;
    };
    
    // Add all elements to scene
    const hardwareBox = createHardwareBox();
    scene.add(hardwareBox);
    
    const logo = createLogo();
    scene.add(logo);
    
    const timeDisplay = createTimeDisplay();
    scene.add(timeDisplay);
    
    const shadow = createShadow();
    scene.add(shadow);
    
    // Animation loop
    let frameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.3;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = document.getElementById('hardware');
      
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = scrollY - sectionTop + window.innerHeight / 2;
        const scrollPercentage = Math.max(0, Math.min(1, scrollPosition / sectionHeight));
        
        // Apply parallax effect based on scroll position within the hardware section
        hardwareBox.position.y = (scrollPercentage - 0.5) * 0.5;
        logo.position.y = (scrollPercentage - 0.5) * 0.5;
        timeDisplay.position.y = -0.15 + (scrollPercentage - 0.5) * 0.5;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Smooth rotation based on mouse position
      hardwareBox.rotation.y += (targetRotationY - hardwareBox.rotation.y) * 0.05;
      hardwareBox.rotation.x = -Math.PI / 6 + (targetRotationX - hardwareBox.rotation.x) * 0.05;
      
      // Update logo and display positions to match box rotation
      logo.rotation.y = hardwareBox.rotation.y;
      logo.rotation.x = hardwareBox.rotation.x;
      
      timeDisplay.rotation.y = hardwareBox.rotation.y;
      timeDisplay.rotation.x = hardwareBox.rotation.x;
      
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="hardware-model-container">
      <div className="hardware-model-wrapper" ref={mountRef}></div>
      <div className="hardware-model-shadow"></div>
    </div>
  );
};

export default HardwareModel;
