"use client";

import { cocktailLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);
export default function Hero() {

	useGSAP(() => {
		const titleSplit = new SplitText("#title", { type: "chars" });
		const paraSplit = new SplitText(".subtitle", { type: "lines" });

		titleSplit.chars.forEach((char) => {
			char.classList.add("text-gradient")
		})

		gsap.from(titleSplit.chars, {
			yPercent: "100",
			duration: 1.8,
			stagger: 0.06,
			ease: "expo.out"

		})
		gsap.from(paraSplit.lines, {
			yPercent: "100",
			opacity: 0,
			duration: 1.8,
			stagger: 0.06,
			delay: 1,
			ease: "expo.out",
		})

		gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				end: "bottom top",
				scrub: true,
				pin: "video",
				markers: true,
			},
		}).to(".left-leaf", {
			y: 200,
		}, 0)
			.to(".right-leaf", { y: 200 }, 0)
			.to("#title", { y: 200, x: 500 }, 0)

	}, [])
	return (
		<>
			<section id="hero" className="noisy">
				<h1 id="title">MOJITO</h1>
				<img src={"images/hero-left-leaf.png"} alt="leftleaf" className="left-leaf" />
				<img src={"images/hero-right-leaf.png"} alt="right-leaf" className="right-leaf" />
				<div className="body">
					<div className="content">
						<div className="hidden md:block space-y-6">
							<p className="">Cool. Crisp. Classic. </p>
							<p className="subtitle">Sip the Spirit of Summer </p>
						</div>
						<div className="view-cocktails">
							<p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
							<a href="#cocktails">View Cocktails</a>
						</div>
					</div>

				</div>
			</section>
			<div className="video absolute inset-0">
				<video src={"/videos/input.mp4"}
					playsInline
					preload="auto" />
			</div>
			<section id="cocktails">
				<img src="/images/cocktail-left-leaf.png" id="c-left-leaf" alt="leaf" />
				<img src="/images/cocktail-right-leaf.png" id="c-right-leaf" alt="leaf" />
				<div className="list">
					<div className="space-y-8 w-[30%]">
						<h2>Popular Cocktails</h2>
						<ul>
							{
								cocktailLists.map((cocktail) => {
									return (<li key={cocktail.name}>
										<div>
											<h3>{cocktail.name}</h3>
											<p>{cocktail.detail}</p>
										</div>
										<span>-{cocktail.price}</span>
									</li>)
								})
							}
						</ul>
					</div>
					<div className="space-y-8 w-[30%]">
						<h2>Most Loved Cocktails</h2>
						<ul>
							{
								cocktailLists.map((cocktail) => {
									return (<li key={cocktail.name}>
										<div>
											<h3>{cocktail.name}</h3>
											<p>{cocktail.detail}</p>
										</div>
										<span>-{cocktail.price}</span>
									</li>)
								})
							}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
