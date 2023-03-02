import { useEffect, useRef } from 'react';
import style from "./cardsHover.module.css"


function SkillsCard({graphic}) {
    let bounds;
    const inputRef = useRef();
    const glowRef = useRef();
    const rotateToMouse = (e) => {
      bounds = inputRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
  
      inputRef.current.style.transform = `
        scale3d(1.10, 1.10, 1.10)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;
  console.log("Y axis from center " , center.y / 100)
      glowRef.current.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    };
    const removeListener = (e) => {
      inputRef.current.style.transform = '';
      inputRef.current.style.background = '';
    };
    useEffect(() => {});

  console.log(graphic.icon , "Here the image on graphic icon")
  return (
    <div
        key={graphic.id}
        ref={inputRef}
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
      className={` ${style.card} flex flex-col bg-gradient-to-br ${graphic.colors[0]} ${graphic.colors[1]}  rounded-lg transition-all duration-300 ease-in-out p-4  gap-2 items-start`}>
        <div ref={glowRef} className={style.glow}>

        </div>
         
          <img
            className="flex bg-no-repeat bg-contain w-[50px]
                  h-[50px] rounded-md"
            src={require(`${graphic.icon}`)}
            onM
            
            alt="Figma Logo"
          />
          <span className="text-left text-white font-semibold">{graphic.name}</span>
          <span className="text-left text-xs text-gray-300">
          {graphic.content}
          </span>
        </div>
  )
}

export default SkillsCard