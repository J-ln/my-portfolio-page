import { useMemo, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Point, Points } from '@react-three/drei'
import { BackgroundContainer } from './Background.element'





const Background = () => {
    let count = 500;
    const sep = 3
    let t = 0;
    let f = 0.002;
    let a = 3;
    const graph = useCallback((x, z) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])


    let positions = useMemo(() => {
        let positions = []
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y = graph(x, z);
                positions.push(x, y, z);
            }
        }
        return new Float32Array(positions)
    }, [count, sep, graph]);

    return (
        <BackgroundContainer>
            <Canvas >
                <Points
                >
                    <bufferAttribute attachObject={['attributes', 'position']} count={positions.length / 3}
                        itemSize={3} array={positions} />
                    <pointsMaterial vertexColors />
                    <Point color="red" />

                </Points>
                <OrbitControls />
            </Canvas>
        </BackgroundContainer>
    )
}

export default Background