"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    image?: string;
    video?: string;
}

export const ProjectCard = ({ title, description, tags, link, image, video }: ProjectCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="group block relative rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-primary/50 transition-colors"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Media Section */}
            {(image || video) && (
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                    {/* Video Layer */}
                    {video && (
                        <video
                            ref={videoRef}
                            src={video}
                            muted
                            loop
                            playsInline
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                        />
                    )}

                    {/* Image Layer (Cover) */}
                    {image && (
                        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovering && video ? 'opacity-0' : 'opacity-100'}`}>
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            )}

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    {link && (
                        <Link href={link} target="_blank">
                            <ArrowUpRight className="text-white/50 group-hover:text-primary transition-colors" />
                        </Link>
                    )}
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-white/5 text-white/70 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
