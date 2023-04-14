import React, { useEffect, useRef } from "react";

export const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Canvas setup and drawing logic
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to match parent container
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate stars with random direction and speed
    const stars = [];
    const numStars = 500;
    const maxSize = 5; // Maximum size of stars
    const minSize = 0; // Minimum size of stars
    for (let i = 0; i < numStars; i++) {
      const x = canvas.width / 2;
      const y = canvas.height / 2;
      const size = Math.random() * (maxSize - minSize) + minSize; // Random size between minSize and maxSize
      const speed = Math.random() * 1 + 0.1; // Random speed between 0.1 and 5
      const angle = Math.random() * (Math.PI * 2); // Random angle between 0 and 2pi
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;
      stars.push({ x, y, size, speed, angle, dx, dy });
    }

    // Animation loop

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        const { x, y, size, speed, angle, dx, dy } = star;

        // Update star position based on its direction and speed
        star.x += dx * speed;
        star.y += dy * speed;

        // Calculate distance from star to center of canvas
        const distance = Math.sqrt(
          Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
        );

        // Scale star size based on its speed and distance from center
        star.size = (distance * speed) / 100; // Adjusted size scaling factor for more dramatic difference

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.fillRect(
          star.x - star.size / 2,
          star.y - star.size / 2,
          star.size,
          star.size
        );
        ctx.closePath();
        ctx.fill();

        // Reset star position if it goes out of bounds
        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
          star.x = canvas.width / 2;
          star.y = canvas.height / 2;
          star.size = 0; // Set star size to minimum size
          star.angle = Math.random() * (Math.PI * 2); // Generate new random angle
        }
      }

      requestAnimationFrame(animate);
    };

    // Call animate to start the animation loop
    animate();

    // Add event listener for window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
