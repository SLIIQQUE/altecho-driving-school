"use client";

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState, useEffect } from 'react'
import { OrbitControls, Environment, Float, Text3D, Center, PerspectiveCamera, MeshTransmissionMaterial, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Check, X, Star, Zap, Shield, Crown } from 'lucide-react'
import * as THREE from 'three'

// Pricing Plans Data
const pricingPlans = [
  {
    name: "Basic 3D",
    price: "₦50,000",
    period: "month",
    description: "Essential 3D driving simulation for beginners",
    features: [
      "10 3D Training Sessions",
      "Basic Vehicle Controls",
      "Virtual Road Practice",
      "Email Support",
      "Completion Certificate"
    ],
    excludedFeatures: ["Advanced Scenarios", "VR Headset", "Priority Support"],
    popular: false,
    color: "#00f0ff"
  },
  {
    name: "Premium 3D",
    price: "₦85,000",
    period: "month",
    description: "Comprehensive 3D training with advanced features",
    features: [
      "Unlimited 3D Sessions",
      "Advanced Vehicle Controls",
      "All Weather Scenarios",
      "Night Driving Simulation",
      "VR Headset Included",
      "Priority Support",
      "Advanced Certificate"
    ],
    excludedFeatures: ["Personal Instructor", "Flexible Schedule"],
    popular: true,
    color: "#ff00aa"
  },
  {
    name: "Elite 3D",
    price: "₦150,000",
    period: "month",
    description: "Ultimate 3D driving experience with personal coaching",
    features: [
      "Unlimited Everything",
      "Personal 3D Instructor",
      "Custom Scenarios",
      "VR & AR Training",
      "Flexible Schedule",
      "Home Service",
      "Executive Certificate",
      "Job Placement Assistance"
    ],
    excludedFeatures: [],
    popular: false,
    color: "#00ff88"
  }
];

// 3D Price Tag Component
function PriceTag3D({ price, color, floating = true }: { price: string, color: string, floating?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  return (
    <Float speed={floating ? 2 : 0} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[0, 1, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.3, 32]} />
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
          color={color}
        />
        <mesh position={[0, 0, 0.2]}>
          <planeGeometry args={[2, 1]} />
          <meshStandardMaterial color="#050508" />
        </mesh>
      </mesh>
    </Float>
  )
}

// 3D Icon Component
function Icon3D({ 
  Icon, 
  color, 
  position = [0, 0, 0] 
}: { 
  Icon: any, 
  color: string, 
  position?: [number, number, number] 
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh position={position}>
        <octahedronGeometry args={[0.5, 0]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// Pricing Card 3D
function PricingCard3D({ 
  plan, 
  index 
}: { 
  plan: typeof pricingPlans[0], 
  index: number 
}) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -20, 
        scale: plan.popular ? 1.05 : 1.02,
        boxShadow: hovered ? `0 20px 40px ${plan.color}40` : 'none'
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="badge-neon-secondary animate-pulse flex items-center gap-2">
            <Crown className="w-4 h-4" />
            MOST POPULAR
          </div>
        </motion.div>
      )}
      
      <div className={`card-glow h-full relative overflow-hidden border-2 ${
        plan.popular ? 'border-secondary/30' : 'border-primary/20'
      }`}>
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-10">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={0.5} color={plan.color} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} color="#ff00aa" />
            
            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
              <mesh>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                  color={plan.color}
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
          {/* Plan Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
              plan.name === 'Basic 3D' ? 'from-primary to-primary/50' :
              plan.name === 'Premium 3D' ? 'from-secondary to-secondary/50' :
              'from-accent to-accent/50'
            } flex items-center justify-center`}>
              {plan.name === 'Basic 3D' && <Zap className="w-8 h-8 text-white" />}
              {plan.name === 'Premium 3D' && <Star className="w-8 h-8 text-white" />}
              {plan.name === 'Elite 3D' && <Crown className="w-8 h-8 text-white" />}
            </div>
          </motion.div>
          
          {/* Plan Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="text-2xl font-bold text-white mb-2"
          >
            {plan.name}
          </motion.h3>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.4 }}
            className="text-gray-400 mb-6 text-sm"
          >
            {plan.description}
          </motion.p>
          
          {/* Price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + 0.5 }}
            className="mb-8"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-gray-500 text-sm">/{plan.period}</span>
            </div>
          </motion.div>
          
          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.6 }}
            className="space-y-4 mb-8"
          >
            {plan.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.6 + i * 0.05 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0"
                >
                  <Check className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
            
            {plan.excludedFeatures.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.8 + i * 0.05 }}
                className="flex items-center gap-3 opacity-50"
              >
                <X className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600 text-sm line-through">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.9 }}
          >
            <Link 
              href="/contact" 
              className={`btn-neon w-full justify-center group ${
                plan.popular 
                  ? 'btn-neon-fill' 
                  : 'btn-neon-secondary'
              }`}
            >
              <span className="flex items-center gap-2">
                Get Started
                <Shield className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
        
        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 transition-opacity duration-300"
          animate={{ opacity: hovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  )
}

// 3D Background Scene
function Pricing3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ff00aa" />
        
        <Suspense fallback={null}>
          {/* Floating Price Tags */}
          {Array.from({ length: 12 }, (_, i) => (
            <Float
              key={i}
              speed={Math.random() * 2 + 1}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <mesh
                position={[
                  (Math.random() - 0.5) * 50,
                  (Math.random() - 0.5) * 30,
                  (Math.random() - 0.5) * 50
                ]}
                scale={Math.random() * 0.5 + 0.2}
              >
                <cylinderGeometry args={[1, 1, 0.2, 8]} />
                <MeshDistortMaterial
                  color={['#00f0ff', '#ff00aa', '#00ff88'][Math.floor(Math.random() * 3)]}
                  attach="material"
                  distort={0.2}
                  speed={2}
                  roughness={0.2}
                  metalness={0.8}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            </Float>
          ))}
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.1}
        />
      </Canvas>
    </div>
  )
}

export default function Pricing3D() {
  return (
    <section className="section-padding bg-[#050508] relative overflow-hidden">
      {/* 3D Background */}
      <Pricing3DBackground />
      
      <div className="container-neon relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge-neon mb-6">// 3D PRICING</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-display-lg text-white mt-6 mb-6"
          >
            Premium 3D Training
            <span className="text-gradient-cyber"> Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Choose your perfect 3D driving training package. All plans include access to our state-of-the-art 
            3D simulation technology and expert instruction.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard3D
              key={plan.name}
              plan={plan}
              index={index}
            />
          ))}
        </div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="card-glow p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Our 3D Training?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Cutting-Edge Technology</h4>
                  <p className="text-gray-400 text-sm">Latest 3D simulation and VR technology</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Expert Instructors</h4>
                  <p className="text-gray-400 text-sm">Certified professionals with years of experience</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Proven Results</h4>
                  <p className="text-gray-400 text-sm">98% success rate with 500+ graduates</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
