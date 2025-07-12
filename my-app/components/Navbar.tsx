"use client";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
  useGSAP(() => {
    const tween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
    });

    tween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <nav>
      <div>
        <a href="#home" className="flex gap-2">
          <img src="images/logo.png" alt="logo" />
          <p>Velvet Pour </p>
        </a>
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
