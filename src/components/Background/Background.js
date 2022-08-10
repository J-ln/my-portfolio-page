import * as TRHEE from "three"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrthographicCamera, Stars } from '@react-three/drei'
import { BackgroundContainer } from './Background.element'
import { Suspense, useEffect, useRef } from 'react'

const Camera = () => {
    const controlRef = useRef(null)

    useEffect(() => {
        console.log(controlRef.current)
    }, [])

    useFrame(() => {
        controlRef.current.setViewOffset({ x: window.scrollX, y: window.scrollY })
    })
    return (<OrthographicCamera ref={controlRef} />)
}

const Background = () => {




    return (
        <BackgroundContainer>
            <Canvas >
                <Camera />
                <Suspense fallback={null}>
                    <Stars radius={300} depth={60} count={10000} factor={7} saturation={0} fade={0.1} />
                </Suspense>
            </Canvas>
        </BackgroundContainer>
    )
}

export default Background