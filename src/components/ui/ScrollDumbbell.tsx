"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion, useTransform, useSpring } from "framer-motion"
import type { MotionValue } from "framer-motion"
import * as THREE from "three"
import { useReducedMotion } from "@/lib/hooks"

interface ScrollDumbbellProps {
    scrollYProgress: MotionValue<number>
}

function DumbbellMesh({
    rotY,
    rotX,
    rotZ,
}: {
    rotY: MotionValue<number>
    rotX: MotionValue<number>
    rotZ: MotionValue<number>
}) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (!groupRef.current) return
        groupRef.current.rotation.y = rotY.get()
        groupRef.current.rotation.x = rotX.get()
        groupRef.current.rotation.z = rotZ.get()
    })

    const geometries = useMemo(() => ({
        bar: new THREE.CylinderGeometry(0.048, 0.048, 3.4, 20),
        collarInner: new THREE.CylinderGeometry(0.092, 0.092, 0.14, 20),
        collarLock: new THREE.CylinderGeometry(0.082, 0.082, 0.10, 20),
        plateOuter: new THREE.CylinderGeometry(0.54, 0.54, 0.11, 36),
        plateMid: new THREE.CylinderGeometry(0.46, 0.46, 0.10, 36),
        plateInner: new THREE.CylinderGeometry(0.38, 0.38, 0.09, 36),
    }), [])

    const materials = useMemo(() => ({
        metal: new THREE.MeshStandardMaterial({
            color: new THREE.Color("#1A1A1A"),
            metalness: 0.95,
            roughness: 0.14,
        }),
        plateA: new THREE.MeshStandardMaterial({
            color: new THREE.Color("#121212"),
            metalness: 0.90,
            roughness: 0.20,
        }),
        plateB: new THREE.MeshStandardMaterial({
            color: new THREE.Color("#1C1C1C"),
            metalness: 0.88,
            roughness: 0.22,
        }),
        plateC: new THREE.MeshStandardMaterial({
            color: new THREE.Color("#222222"),
            metalness: 0.85,
            roughness: 0.25,
        }),
        green: new THREE.MeshStandardMaterial({
            color: new THREE.Color("#2ECC52"),
            metalness: 0.55,
            roughness: 0.32,
        }),
    }), [])

    const R = Math.PI / 2

    return (
        <group ref={groupRef}>
            {/* ── BAR ── */}
            <mesh geometry={geometries.bar} material={materials.metal} rotation={[0, 0, R]} />

            {/* ── LEFT SIDE ── */}
            <mesh geometry={geometries.collarInner} material={materials.metal} rotation={[0, 0, R]} position={[-1.44, 0, 0]} />
            <mesh geometry={geometries.collarLock} material={materials.green} rotation={[0, 0, R]} position={[-1.58, 0, 0]} />
            <mesh geometry={geometries.plateOuter} material={materials.plateA} rotation={[0, 0, R]} position={[-1.20, 0, 0]} />
            <mesh geometry={geometries.plateMid} material={materials.plateB} rotation={[0, 0, R]} position={[-1.06, 0, 0]} />
            <mesh geometry={geometries.plateInner} material={materials.plateC} rotation={[0, 0, R]} position={[-0.93, 0, 0]} />

            {/* ── RIGHT SIDE ── */}
            <mesh geometry={geometries.collarInner} material={materials.metal} rotation={[0, 0, R]} position={[1.44, 0, 0]} />
            <mesh geometry={geometries.collarLock} material={materials.green} rotation={[0, 0, R]} position={[1.58, 0, 0]} />
            <mesh geometry={geometries.plateOuter} material={materials.plateA} rotation={[0, 0, R]} position={[1.20, 0, 0]} />
            <mesh geometry={geometries.plateMid} material={materials.plateB} rotation={[0, 0, R]} position={[1.06, 0, 0]} />
            <mesh geometry={geometries.plateInner} material={materials.plateC} rotation={[0, 0, R]} position={[0.93, 0, 0]} />
        </group>
    )
}

function DumbbellScene({ rotY, rotX, rotZ }: { rotY: MotionValue<number>; rotX: MotionValue<number>; rotZ: MotionValue<number>; }) {
    return (
        <>
            <ambientLight intensity={0.22} />
            <directionalLight position={[5, 7, 3]} intensity={1.5} color="#FFFFFF" />
            <directionalLight position={[-4, 2, -2]} intensity={0.20} color="#2ECC52" />
            <directionalLight position={[0, 5, -6]} intensity={0.95} color="#D0E4FF" />
            <directionalLight position={[2, -3, 5]} intensity={0.30} color="#FFFFFF" />
            <DumbbellMesh rotY={rotY} rotX={rotX} rotZ={rotZ} />
        </>
    )
}

export default function ScrollDumbbell({ scrollYProgress }: ScrollDumbbellProps) {
    const prefersReduced = useReducedMotion()

    const canvasX = useTransform(scrollYProgress, [0, 0.10, 0.45, 0.80, 1.0], ["20vw", "10vw", "-4vw", "-18vw", "-30vw"])
    const canvasY = useTransform(scrollYProgress, [0, 0.10, 0.45, 0.80, 1.0], ["18vh", "6vh", "-4vh", "-16vh", "-26vh"])
    const canvasScale = useTransform(scrollYProgress, [0, 0.07, 0.12, 0.76, 0.92, 1.0], [0.0, 0.55, 1.0, 1.0, 0.72, 0.0])
    const canvasOpacity = useTransform(scrollYProgress, [0, 0.05, 0.10, 0.74, 0.90, 1.0], [0, 0, 1, 1, 0.35, 0])

    const smoothX = useSpring(canvasX, { stiffness: 55, damping: 22 })
    const smoothY = useSpring(canvasY, { stiffness: 55, damping: 22 })
    const smoothScale = useSpring(canvasScale, { stiffness: 75, damping: 24 })
    const smoothOpacity = useSpring(canvasOpacity, { stiffness: 75, damping: 24 })

    const rotY = useTransform(scrollYProgress, [0, 1], [0.35, Math.PI * 2.6])
    const rotX = useTransform(scrollYProgress, [0, 0.25, 0.50, 0.75, 1.0], [0.28, 0.10, 0.04, -0.10, -0.32])
    const rotZ = useTransform(scrollYProgress, [0, 0.35, 0.70, 1.0], [0.18, 0.06, -0.08, -0.22])

    const staticRotY = useMemo(() => ({ get: () => 0.5 } as MotionValue<number>), [])
    const staticRotX = useMemo(() => ({ get: () => 0.1 } as MotionValue<number>), [])
    const staticRotZ = useMemo(() => ({ get: () => 0.1 } as MotionValue<number>), [])

    const activeRotY = prefersReduced ? staticRotY : rotY
    const activeRotX = prefersReduced ? staticRotX : rotX
    const activeRotZ = prefersReduced ? staticRotZ : rotZ

    return (
        <motion.div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "min(500px, 48vw)",
                height: "min(500px, 48vw)",
                translateX: prefersReduced ? "-25%" : smoothX,
                translateY: prefersReduced ? "-50%" : smoothY,
                scale: prefersReduced ? 0.7 : smoothScale,
                opacity: prefersReduced ? 0.35 : smoothOpacity,
                pointerEvents: "none",
                zIndex: 10,
            }}
            aria-hidden="true"
        >
            <Canvas
                camera={{ position: [0, 0, 4.8], fov: 40 }}
                frameloop="demand"
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                style={{ background: "transparent" }}
                aria-hidden="true"
            >
                <DumbbellScene rotY={activeRotY} rotX={activeRotX} rotZ={activeRotZ} />
            </Canvas>
        </motion.div>
    )
}
