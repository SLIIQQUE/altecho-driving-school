"use client";

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState, useEffect } from 'react'
import { OrbitControls, Environment, Float, Text3D, Center, PerspectiveCamera, MeshTransmissionMaterial, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Car, Shield, Award, Target, CheckCircle, ArrowRight } from 'lucide-react'
import * as THREE from 'three'

// 3D Service Card Component
function ServiceCard3D({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  index,
  popular = false 
}: {
  icon: any,
  title: string,
  description: string,
  features: string[],
  index: number,
  popular?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group cursor-pointer ${
        popular ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="card-glow h-full relative overflow-hidden">
        {popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <span className="badge-neon-secondary animate-pulse">PREMIUM</span>
          </div>
        )}
        
        {/* 3D Canvas Mini */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#00f0ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00aa" />
            
            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
              <mesh rotation={[0, Date.now() * 0.001, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <MeshDistortMaterial
                  color={popular ? "#ff00aa" : "#00f0ff"}
                  attach="material"
                  distort={hovered ? 0.4 : 0.2}
                  speed={2}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>
            </Float>
          </Canvas>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          <motion.div 
            className={`w-16 h-16 rounded-xl ${
              popular ? 'bg-secondary/10' : 'bg-primary/10'
            } flex items-center justify-center mb-6 backdrop-blur-sm border ${
              popular ? 'border-secondary/30' : 'border-primary/30'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className={`w-8 h-8 ${popular ? 'text-secondary' : 'text-primary'}`} />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient-cyber transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 mb-6 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <motion.li 
                key={feature} 
                className="flex items-center gap-3 text-sm text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0"
                >
                  <CheckCircle className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="font-mono">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary font-mono text-sm"
          >
            <span>EXPLORE</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
        
        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  )
}

// 3D Background Scene
function Services3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ff00aa" />
        
        <Suspense fallback={null}>
          {/* Floating Geometric Shapes */}
          {Array.from({ length: 15 }, (_, i) => {
            const shapes = ['box', 'sphere', 'cone', 'torus']
            const shape = shapes[Math.floor(Math.random() * shapes.length)]
            
            return (
              <Float
                key={i}
                speed={Math.random() * 2 + 1}
                rotationIntensity={0.5}
                floatIntensity={0.5}
              >
                <mesh
                  position={[
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 30
                  ]}
                  scale={Math.random() * 0.5 + 0.2}
                >
                  {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
                  {shape === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
                  {shape === 'cone' && <coneGeometry args={[0.7, 1, 8]} />}
                  {shape === 'torus' && <torusGeometry args={[0.5, 0.2, 8, 16]} />}
                  
                  <MeshDistortMaterial
                    color={['#00f0ff', '#ff00aa', '#00ff88'][Math.floor(Math.random() * 3)]}
                    attach="material"
                    distort={0.2}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.3}
                  />
                </mesh>
              </Float>
            )
          })}
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508] opacity-80" />
    </div>
  )
}

const services = [
  {
    icon: Car,
    title: "3D Beginner Program",
    description: "Immersive 3D simulation training for first-time drivers. Master vehicle controls in virtual reality.",
    features: ["3D Vehicle Controls", "Virtual Road Signs", "Simulated Parking", "Traffic Awareness VR"],
    popular: true,
  },
  {
    icon: Target,
    title: "Advanced 3D Simulation",
    description: "Cutting-edge 3D scenarios for advanced driving techniques and emergency responses.",
    features: ["Hazard Simulation", "Emergency VR Training", "Weather Conditions", "Night Driving 3D"],
    popular: false,
  },
  {
    icon: Shield,
    title: "Defensive 3D Training",
    description: "Advanced hazard perception and emergency response in immersive 3D environments.",
    features: ["3D Hazard Perception", "Emergency Maneuvers VR", "Risk Assessment", "Defensive Techniques"],
    popular: false,
  },
  {
    icon: Award,
    title: "License 3D Preparation",
    description: "Complete 3D-guided preparation for driving license acquisition with virtual testing.",
    features: ["3D Theory Prep", "Virtual Mock Tests", "Road Test Simulation", "Digital Documentation"],
    popular: false,
  },
];

export default function Services3D() {
  return (
    <section className="section-padding bg-[#050508] relative overflow-hidden">
      {/* 3D Background */}
      <Services3DBackground />
      
      <div className="container-neon relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="badge-neon mb-6">// 3D SERVICES</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-display-lg text-white mt-6 mb-6"
          >
            Premium 3D Training
            <span className="text-gradient-cyber"> Programs</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of driving education with our cutting-edge 3D simulation technology. 
            Train in immersive virtual environments that replicate real-world driving scenarios.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard3D
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
              popular={service.popular}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="card-glow p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Experience <span className="text-gradient-cyber">3D Driving?</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied drivers who have mastered the road through our revolutionary 3D training programs.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/contact" className="btn-neon btn-neon-fill group">
                <span className="flex items-center gap-3">
                  Start 3D Training
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/demo" className="btn-neon btn-neon-secondary group">
                <span className="flex items-center gap-3">
                  Try 3D Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
