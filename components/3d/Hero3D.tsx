"use client";

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState, useEffect } from 'react'
import { OrbitControls, Environment, Float, Text3D, Center, PerspectiveCamera, MeshTransmissionMaterial, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'motion/react'
import Link from 'next/link'
import * as THREE from 'three'

// 3D Car Model Component
function Car3D({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.PI / 4
    }
  }, [])

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {/* Car Body */}
        <boxGeometry args={[3, 1, 6]} />
        <MeshTransmissionMaterial
          backside={false}
          samples={4}
          thickness={0.2}
          chromaticAberration={0.2}
          anisotropicBlur={0.1}
          roughness={0.2}
          distortion={0.2}
          distortionScale={0.1}
          temporalDistortion={0.1}
          ior={1.5}
          color="#00f0ff"
        />
        
        {/* Car Windows */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[2.8, 0.8, 4]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Wheels */}
        {[[-1.2, -0.5, 1.5], [1.2, -0.5, 1.5], [-1.2, -0.5, -1.5], [1.2, -0.5, -1.5]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <cylinderGeometry args={[0.4, 0.4, 0.3, 16]} />
            <meshStandardMaterial color="#333" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </mesh>
    </Float>
  )
}

// Floating Orbs
function FloatingOrbs() {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 10
    ] as [number, number, number],
    scale: Math.random() * 0.3 + 0.1,
    color: ['#00f0ff', '#ff00aa', '#00ff88'][Math.floor(Math.random() * 3)]
  }))

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={Math.random() * 2 + 1} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={orb.position} scale={orb.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color={orb.color}
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

// 3D Text Component
function HeroText3D() {
  return (
    <Center position={[0, 2, 0]}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
        <Text3D
          font="/fonts/inter-bold.woff"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          ALTECHO
          <meshStandardMaterial color="#00f0ff" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Float>
    </Center>
  )
}

// Loading Component
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#050508]">
      <div className="text-primary text-2xl font-mono animate-pulse">INITIALIZING 3D ENVIRONMENT...</div>
    </div>
  )
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingFallback />
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050508]">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas shadows camera={{ position: [0, 2, 10], fov: 50 }}>
          <PerspectiveCamera makeDefault position={[0, 2, 10]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff00aa" />
          <pointLight position={[0, 5, 0]} intensity={0.8} color="#00f0ff" />
          
          {/* 3D Scene */}
          <Suspense fallback={null}>
            <Car3D position={[0, 0, 0]} scale={0.8} />
            <HeroText3D />
            <FloatingOrbs />
            
            {/* Environment */}
            <Environment preset="city" />
          </Suspense>
          
          {/* Camera Controls */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-6"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 pointer-events-auto"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-mono text-sm text-primary tracking-widest">
              FRSC CERTIFIED // PREMIUM TRAINING
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="text-gradient-cyber">Master the Road</span>
            <br />
            <span className="text-gray-300">in 3D</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Experience the future of driving education with our immersive 3D training environment. 
            Premium instruction meets cutting-edge technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 justify-center mb-16 pointer-events-auto"
          >
            <Link 
              href="/contact" 
              className="btn-neon btn-neon-fill text-lg px-10 py-5 group"
            >
              <span className="flex items-center gap-3">
                Start 3D Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link 
              href="/services" 
              className="btn-neon btn-neon-secondary text-lg px-10 py-5 group"
            >
              <span className="flex items-center gap-3">
                Explore 3D Programs
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-12 justify-center"
          >
            {[
              { value: "500+", label: "3D Graduates" },
              { value: "98%", label: "Success Rate" },
              { value: "5.0", label: "Premium Rating" },
              { value: "24/7", label: "3D Access" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-cyber">{stat.value}</div>
                <div className="font-mono text-sm text-gray-500 mt-2 tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 rounded-full border border-primary/30 flex justify-center pt-3"
        >
          <div className="w-1 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-50 pointer-events-none" />
    </section>
  )
}
