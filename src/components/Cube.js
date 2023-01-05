import { useBox } from "@react-three/cannon"
import { useStore } from "../hooks/useStore"
import { useState } from "react"
import * as textures from '../images/textures'

export const Cube = ( { position, texture}) => {
    const [isHovered,setIsHovered] = useState(false)
    const [ref] = useBox(() => ({
        type: 'Static',
        position 
    }))
    const [addCube,removeCube] = useStore((state) => [state.addCube,state.removeCube])

    const activeTexture = textures[texture + 'Texture']

    return(
        <mesh 
        onPointerMove={(e) =>{
            e.stopPropagation()
            setIsHovered(true)
        }}
        onPointerOut={(e) =>{
            e.stopPropagation()
            setIsHovered(false)
        }}
        onClick={(e) => {
            e.stopPropagation()
            const clickedFace = Math.floor(e.faceIndex / 2)
            const {x,y,z} = ref.current.position
            if(e.altKey) {
                removeCube(x,y,z)
                return
            }

            switch(clickedFace){
                case(0) :  addCube(x + 1,y,z); break;
                case(1) :  addCube(x - 1,y,z); break;
                case(2) :  addCube(x,y + 1,z); break;
                case(3) :  addCube(x,y - 1,z); break;
                case(4) : addCube(x,y,z + 1); break;
                case(5) : addCube(x,y,z - 1); break;
                default : console.log("fehler");
            }
        }}
        ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial color={isHovered ? 'grey' : 'white'} 
            transparent={true}
            opacity={texture == 'glass' ? 0.8 : 1}
            map={activeTexture} attach="material" />
        </mesh>
    )
}