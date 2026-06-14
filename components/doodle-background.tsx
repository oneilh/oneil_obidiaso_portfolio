import React from "react";
import { 
  FiCode, FiTerminal, FiCpu, FiDatabase, 
  FiCloud, FiLayout, FiBox, FiFeather, 
  FiLayers, FiCommand, FiCoffee, FiMonitor,
  FiServer, FiHash, FiActivity
} from "react-icons/fi";

// A curated list of tech/builder icons scattered across the screen
const doodles = [
  { Icon: FiCode, top: "12%", left: "8%", size: 32, rotation: 12, delay: "0s" },
  { Icon: FiTerminal, top: "25%", left: "82%", size: 40, rotation: -15, delay: "1.5s" },
  { Icon: FiCpu, top: "45%", left: "15%", size: 48, rotation: 5, delay: "3s" },
  { Icon: FiDatabase, top: "65%", left: "85%", size: 36, rotation: -22, delay: "0.5s" },
  { Icon: FiCloud, top: "18%", left: "45%", size: 54, rotation: 0, delay: "2s" },
  { Icon: FiLayout, top: "82%", left: "38%", size: 42, rotation: 10, delay: "4s" },
  { Icon: FiBox, top: "40%", left: "68%", size: 28, rotation: -18, delay: "1.2s" },
  { Icon: FiFeather, top: "58%", left: "8%", size: 44, rotation: 25, delay: "2.8s" },
  { Icon: FiLayers, top: "78%", left: "12%", size: 38, rotation: -8, delay: "0.8s" },
  { Icon: FiCommand, top: "8%", left: "88%", size: 34, rotation: 18, delay: "3.5s" },
  { Icon: FiCoffee, top: "88%", left: "75%", size: 40, rotation: -12, delay: "1.8s" },
  { Icon: FiMonitor, top: "35%", left: "32%", size: 46, rotation: 4, delay: "0.2s" },
  { Icon: FiServer, top: "52%", left: "92%", size: 32, rotation: -5, delay: "2.4s" },
  { Icon: FiHash, top: "28%", left: "22%", size: 28, rotation: 15, delay: "4.5s" },
  { Icon: FiActivity, top: "72%", left: "55%", size: 38, rotation: -10, delay: "3.2s" },
];

export function DoodleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doodles.map((item, i) => (
        <div
          key={i}
          className="absolute text-foreground opacity-20 dark:opacity-40 animate-float"
          style={{
            top: item.top,
            left: item.left,
            // We pass the rotation via a CSS variable so the keyframe can pick it up
            "--tw-rotate": `${item.rotation}deg`,
            animationDelay: item.delay,
            animationDuration: `${6 + (i % 4)}s`,
          } as React.CSSProperties}
        >
          <item.Icon size={item.size} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
}
