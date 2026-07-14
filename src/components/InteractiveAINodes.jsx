import { useEffect, useRef } from "react";

export default function InteractiveAINodes() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = { x: null, y: null };

    // AI Node definitions
    const nodes = [
      { id: "ai", label: "AI Engine", x: width * 0.5, y: height * 0.5, radius: 24, color: "#10b981", glow: "#34d399", pulse: 0 },
      { id: "chat", label: "Chatbot", x: width * 0.25, y: height * 0.25, radius: 18, color: "#06b6d4", glow: "#22d3ee", pulse: 0 },
      { id: "crm", label: "CRM Sync", x: width * 0.75, y: height * 0.25, radius: 18, color: "#3b82f6", glow: "#60a5fa", pulse: 0 },
      { id: "email", label: "Auto-Email", x: width * 0.25, y: height * 0.75, radius: 18, color: "#f43f5e", glow: "#fb7185", pulse: 0 },
      { id: "routing", label: "Lead Route", x: width * 0.75, y: height * 0.75, radius: 18, color: "#a855f7", glow: "#c084fc", pulse: 0 },
    ];

    const connections = [
      { from: "chat", to: "ai" },
      { from: "crm", to: "ai" },
      { from: "email", to: "ai" },
      { from: "routing", to: "ai" },
      { from: "chat", to: "email" },
      { from: "crm", to: "routing" },
    ];

    // Flying packets of data along connections
    const packets = [];
    const createPacket = () => {
      if (packets.length > 12) return;
      const conn = connections[Math.floor(Math.random() * connections.length)];
      const fromNode = nodes.find((n) => n.id === conn.from);
      const toNode = nodes.find((n) => n.id === conn.to);
      
      packets.push({
        from: fromNode,
        to: toNode,
        progress: 0,
        speed: Math.random() * 0.008 + 0.005,
        color: fromNode.glow,
      });
    };

    const drawNode = (node) => {
      const isHovered = mouse.x !== null && Math.hypot(mouse.x - node.x, mouse.y - node.y) < node.radius + 15;
      
      // Outer glow circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius + Math.sin(node.pulse) * 4 + (isHovered ? 6 : 0), 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.globalAlpha = 0.15;
      ctx.fill();

      // Main circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? "#ffffff" : node.color;
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = isHovered ? 20 : 12;
      ctx.shadowColor = node.glow;
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Label text
      ctx.font = "bold 11px system-ui, sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.textAlign = "center";
      ctx.fillText(node.label, node.x, node.y + node.radius + 16);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connection lines
      connections.forEach((conn) => {
        const fromNode = nodes.find((n) => n.id === conn.from);
        const toNode = nodes.find((n) => n.id === conn.to);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // 2. Draw & update data packets
      if (Math.random() < 0.04) createPacket();

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;

        if (p.progress >= 1.0) {
          packets.splice(i, 1);
          continue;
        }

        const x = p.from.x + (p.to.x - p.from.x) * p.progress;
        const y = p.from.y + (p.to.y - p.from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Draw and update nodes
      nodes.forEach((node) => {
        node.pulse += 0.03;
        drawNode(node);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      // Re-center nodes dynamically on resize
      nodes[0].x = width * 0.5;   nodes[0].y = height * 0.5;
      nodes[1].x = width * 0.25;  nodes[1].y = height * 0.25;
      nodes[2].x = width * 0.75;  nodes[2].y = height * 0.25;
      nodes[3].x = width * 0.25;  nodes[3].y = height * 0.75;
      nodes[4].x = width * 0.75;  nodes[4].y = height * 0.75;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative aspect-[1.1] w-full max-w-[480px] mx-auto rounded-2xl border border-white/10 bg-[#020617]/50 shadow-glow overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-pointer z-10"
      />
    </div>
  );
}
