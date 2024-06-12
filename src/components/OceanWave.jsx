import { useRef, useEffect } from "react";

const OceanWave = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    let vertices = [];
    let vertexCount = 12000;
    let gridSize = 12;
    let waveSize = 10;
    let oceanWidth = 204;
    let oceanHeight = -80;
    let perspective = 100;

    const loop = () => {
      let rad = (Math.sin(frame / 100) * Math.PI) / 20;
      let rad2 = (Math.sin(frame / 50) * Math.PI) / 10;
      frame++;

      if (
        canvas.width !== canvas.offsetWidth ||
        canvas.height !== canvas.offsetHeight
      ) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }

      // ctx.fillStyle = "hsl(200deg, 100%, 2%)";
      ctx.fillStyle = "#0e0622";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      ctx.beginPath();
      vertices.forEach((vertex, i) => {
        // let ni = i + oceanWidth;
        let x = vertex[0] - (frame % (gridSize * 2));
        let z =
          vertex[2] -
          ((frame * 2) % gridSize) +
          (i % 2 === 0 ? gridSize / 2 : 0);
        let wave =
          Math.cos(frame / 45 + x / 50) -
          Math.sin(frame / 20 + z / 50) +
          Math.sin(frame / 30 + (z * x) / 10000);
        let y = vertex[1] + wave * waveSize;
        let a = Math.max(
          0,
          1 -
            Math.sqrt(x ** 2 + z ** 2) / ((vertexCount / oceanWidth) * gridSize)
        );
        let tx, ty, tz;

        y -= oceanHeight;

        tx = x;
        ty = y;
        tz = z;

        tx = x * Math.cos(rad) + z * Math.sin(rad);
        tz = -x * Math.sin(rad) + z * Math.cos(rad);

        x = tx;
        y = ty;
        z = tz;

        tx = x * Math.cos(rad) - y * Math.sin(rad);
        ty = x * Math.sin(rad) + y * Math.cos(rad);

        x = tx;
        y = ty;
        z = tz;

        ty = y * Math.cos(rad2) - z * Math.sin(rad2);
        tz = y * Math.sin(rad2) + z * Math.cos(rad2);

        x = tx;
        y = ty;
        z = tz;

        x /= z / perspective;
        y /= z / perspective;

        if (a < 0.01) return;
        if (z < 0) return;

        ctx.globalAlpha = a;
        ctx.fillStyle = "#45c7ed";
        ctx.fillRect(x - (a * 3) / 2, y - (a * 3) / 2, a * 3, a * 3);
        ctx.globalAlpha = 1;
      });

      ctx.restore();

      requestAnimationFrame(loop);
    };

    for (let i = 0; i < vertexCount; i++) {
      let x = i % oceanWidth;
      let y = 0;
      let z = (i / oceanWidth) >> 0;
      let offset = oceanWidth / 2;
      vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize]);
    }

    loop();

    return () => cancelAnimationFrame(loop);
  }, []);

  return (
    <canvas ref={canvasRef} className={`w-full h-full absolute ${className}`} />
  );
};

export default OceanWave;
