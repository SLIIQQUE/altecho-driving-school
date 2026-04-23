"use client";

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState, useEffect } from 'react'
import { OrbitControls, Environment, Float, Text3D, Center, PerspectiveCamera, MeshTransmissionMaterial, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'motion/react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import * as THREE from 'three'

// Testimonial Data
const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Commercial Driver",
    content: "The 3D simulation training was incredible. I felt like I was driving on real roads before even touching a real car. Passed my test on the first attempt!",
    rating: 5,
    avatar: "AJ"
  },
  {
    name: "Funke Adeyemi",
    role: "Student Driver",
    content: "The virtual reality experience helped me overcome my driving anxiety. The 3D scenarios prepared me for everything I encountered on the road.",
    rating: 5,
    avatar: "FA"
  },
  {
    name: "Chidi Okafor",
    role: "Ride-share Driver",
    content: "Best investment I made for my career. The 3D defensive training taught me skills that have saved me from multiple accidents.",
    rating: 5,
    avatar: "CO"
  },
  {
    name: "Mariam Yusuf",
    role: "New Driver",
    content: "The immersive 3D environment made learning fun and effective. The instructors are patient and the technology is top-notch.",
    rating: 5,
    avatar: "MY"
  }
];

// 3D Quote Icon
function Quote3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh position={position}>
        <torusGeometry args={[1, 0.3, 8, 16]} />
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
      </mesh>
    </Float>
  )
}

// 3D Rating Stars
function RatingStars3D({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <Star
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
            }`}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Testimonial Card 3D
function TestimonialCard3D({ 
  testimonial, 
  index, 
  isActive 
}: {
  testimonial: typeof testimonials[0],
  index: number,
  isActive: boolean
}) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        scale: isActive ? 1 : 0.95,
        rotateY: isActive ? 0 : -5,
        z: isActive ? 0 : -50
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -10 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative ${isActive ? 'z-20' : 'z-10'}`}
    >
      <div className="card-glow p-8 h-full relative overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-10">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={0.5} color="#00f0ff" />
            <pointLight position={[-5, -5, -5]} intensity={0.3} color="#ff00aa" />
            
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
              <mesh>
                <dodecahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                  color={isActive ? "#00f0ff" : "#ff00aa"}
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
        
        {/* Quote Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="mb-6"
        >
          <Quote className="w-12 h-12 text-primary/30" />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-gray-300 mb-6 leading-relaxed text-lg font-light italic"
          >
            "{testimonial.content}"
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg"
              >
                {testimonial.avatar}
              </motion.div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm font-mono">{testimonial.role}</p>
              </div>
            </div>
            
            <RatingStars3D rating={testimonial.rating} />
          </motion.div>
        </div>
        
        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300"
          animate={{ opacity: hovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  )
}

// 3D Background Scene
function Testimonials3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ff00aa" />
        
        <Suspense fallback={null}>
          {/* Floating Crystals */}
          {Array.from({ length: 20 }, (_, i) => (
            <Float
              key={i}
              speed={Math.random() * 3 + 1}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <mesh
                position={[
                  (Math.random() - 0.5) * 40,
                  (Math.random() - 0.5) * 30,
                  (Math.random() - 0.5) * 40
                ]}
                scale={Math.random() * 0.3 + 0.1}
              >
                <octahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                  color={['#00f0ff', '#ff00aa', '#00ff88'][Math.floor(Math.random() * 3)]}
                  attach="material"
                  distort={0.2}
                  speed={2}
                  roughness={0.2}
                  metalness={0.8}
                  transparent
                  opacity={0.5}
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

export default function Testimonials3D() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [currentIndex])
  
  return (
    <section className="section-padding bg-[#050508] relative overflow-hidden">
      {/* 3D Background */}
      <Testimonials3DBackground />
      
      <div className="container-neon relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge-neon mb-6">// 3D TESTIMONIALS</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-display-lg text-white mt-6 mb-6"
          >
            Success Stories in <span className="text-gradient-cyber">3D</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Hear from our graduates who mastered the road through our revolutionary 3D training programs.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Previous Card */}
            <div className="hidden md:block">
              <TestimonialCard3D
                testimonial={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length]}
                index={0}
                isActive={false}
              />
            </div>
            
            {/* Active Card */}
            <div>
              <TestimonialCard3D
                testimonial={testimonials[currentIndex]}
                index={1}
                isActive={true}
              />
            </div>
            
            {/* Next Card */}
            <div className="hidden md:block">
              <TestimonialCard3D
                testimonial={testimonials[(currentIndex + 1) % testimonials.length]}
                index={2}
                isActive={false}
              />
            </div>
          </div>
          
          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center items-center gap-8 mt-12"
          >
            <button
              onClick={prevTestimonial}
              className="btn-neon btn-neon-secondary p-3 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="btn-neon btn-neon-secondary p-3 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Success Rate" },
              { value: "500+", label: "3D Graduates" },
              { value: "5★", label: "Average Rating" },
              { value: "24/7", label: "3D Support" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center card-glow p-6"
              >
                <div className="text-3xl font-bold text-gradient-cyber mb-2">{stat.value}</div>
                <div className="font-mono text-sm text-gray-500 tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
