"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music as MusicIcon, Disc, BarChart3 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

// Mock Data for Top 10
// 音源获取方式：
// 1. 将 mp3 文件下载并放入 public/music 文件夹
// 2. 修改下方的 audioSrc 路径为 "/music/your-song.mp3"
const TOP_10_SONGS = [
    { rank: 1, title: "Midnight City", artist: "M83", album: "Hurry Up, We're Dreaming", cover: "/images/music/m83.jpg", audioSrc: "/music/midnight-city.mp3" },
    { rank: 2, title: "Cornfield Chase", artist: "Hans Zimmer", album: "Interstellar OST", cover: "/images/music/interstellar.jpg", audioSrc: "" },
    { rank: 3, title: "Instant Crush", artist: "Daft Punk ft. Julian Casablancas", album: "Random Access Memories", cover: "/images/music/daftpunk.jpg", audioSrc: "" },
    { rank: 4, title: "The Night We Met", artist: "Lord Huron", album: "Strange Trails", cover: "/images/music/lordhuron.jpg", audioSrc: "" },
    { rank: 5, title: "Space Song", artist: "Beach House", album: "Depression Cherry", cover: "/images/music/beachhouse.jpg", audioSrc: "" },
    { rank: 6, title: "Intro", artist: "The xx", album: "xx", cover: "/images/music/thexx.jpg", audioSrc: "" },
    { rank: 7, title: "Wait", artist: "M83", album: "Hurry Up, We're Dreaming", cover: "/images/music/m83_wait.jpg", audioSrc: "" },
    { rank: 8, title: "Ribs", artist: "Lorde", album: "Pure Heroine", cover: "/images/music/lorde.jpg", audioSrc: "" },
    { rank: 9, title: "Yellow", artist: "Coldplay", album: "Parachutes", cover: "/images/music/coldplay.jpg", audioSrc: "" },
    { rank: 10, title: "Heroes", artist: "David Bowie", album: "Heroes", cover: "/images/music/bowie.jpg", audioSrc: "" },
];

// 1. Featured / Now Playing Card (Large)
const FeaturedCard = ({ song }: { song: typeof TOP_10_SONGS[0] }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [progress, setProgress] = useState(0);

    // 处理播放/暂停
    const togglePlay = () => {
        if (!audioRef.current) return;
        
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Playback failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    // 监听播放进度
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-3 bg-neutral-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden relative group"
        >
            {/* Audio Element (Hidden) */}
            {song.audioSrc && <audio ref={audioRef} src={song.audioSrc} />}

            {/* Background Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 opacity-50 blur-3xl" />
            
            {/* Vinyl Animation */}
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                 <motion.div 
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                    className={`w-full h-full rounded-full bg-neutral-800 border-4 border-neutral-700 shadow-2xl flex items-center justify-center relative overflow-hidden ${isPlaying ? '' : ''}`}
                 >
                    <div className="absolute inset-0 bg-[conic-gradient(transparent,rgba(255,255,255,0.1),transparent)] rounded-full" />
                    {/* Placeholder for Album Art */}
                    <div className="absolute inset-2 bg-gradient-to-tr from-purple-500 to-orange-400 rounded-full opacity-80" />
                    <div className="absolute inset-[40%] bg-black rounded-full z-10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                 </motion.div>
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-purple-300 mb-4 border border-white/5">
                    <BarChart3 size={12} />
                    <span>Current Top Pick</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-serif mb-2 leading-tight">{song.title}</h3>
                <p className="text-xl text-neutral-300 mb-6">{song.artist}</p>
                
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <button 
                        onClick={togglePlay}
                        disabled={!song.audioSrc}
                        className={`w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-white/20 ${!song.audioSrc ? 'bg-neutral-600 cursor-not-allowed opacity-50' : 'bg-white text-black'}`}
                    >
                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </button>
                    <div className="flex-1 max-w-xs h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-purple-400"
                            style={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
                    {!song.audioSrc && <span className="text-xs text-neutral-500">No Audio Source</span>}
                </div>
            </div>
        </motion.div>
    );
};

// 2. Compact List Item (Rank 2-10)
const CompactMusicItem = ({ song, index }: { song: typeof TOP_10_SONGS[0], index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 245, 245, 1)" }}
            className="flex items-center gap-4 p-4 bg-white border border-neutral-100 rounded-xl hover:shadow-lg transition-all cursor-pointer group"
        >
            <div className="text-2xl font-bold text-neutral-200 w-8 font-serif italic group-hover:text-purple-500 transition-colors">
                #{song.rank}
            </div>
            
            <div className="relative w-16 h-16 bg-neutral-200 rounded-lg overflow-hidden flex-shrink-0 shadow-inner">
                 <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-neutral-400 group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
                     <Play size={20} className="text-white drop-shadow-md" fill="currentColor" />
                 </div>
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="text-base font-bold text-neutral-900 truncate group-hover:text-purple-600 transition-colors">{song.title}</h4>
                <p className="text-sm text-neutral-500 truncate">{song.artist}</p>
            </div>

            <div className="hidden sm:block text-xs text-neutral-400 border border-neutral-200 px-2 py-1 rounded-full">
                {song.album}
            </div>
        </motion.div>
    );
};

export const Music = () => {
  return (
    <Section id="music" className="bg-neutral-50 relative overflow-hidden py-24">
      {/* Decorative Waveform Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="flex gap-2 items-end h-96 w-full px-20 justify-between">
              {[...Array(40)].map((_, i) => (
                  <motion.div 
                      key={i} 
                      className="w-full bg-black rounded-t-full"
                      animate={{ height: ["20%", "80%", "40%", "90%", "30%"] }}
                      transition={{ 
                          duration: Math.random() * 2 + 1, 
                          repeat: Infinity, 
                          repeatType: "reverse", 
                          delay: i * 0.05,
                          ease: "easeInOut"
                      }}
                  />
              ))}
          </div>
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 px-4">
          <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl mb-6 text-purple-600 rotate-3 hover:rotate-6 transition-transform">
                  <MusicIcon size={32} />
              </div>
              <h2 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight text-neutral-900">
                  Audio <span className="text-neutral-400 italic">Log</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                  A collection of tracks that keep me in the flow state. <br className="hidden md:block"/> 
                  From ambient soundscapes to high-energy synths.
              </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Featured Track takes full width on mobile, 2 cols on tablet, 3 on desktop start */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8">
                  <FeaturedCard song={TOP_10_SONGS[0]} />
              </div>

              {/* Remaining Top 10 */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <h3 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
                      <Disc className="text-purple-500" />
                      The Heavy Rotation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {TOP_10_SONGS.slice(1).map((song, index) => (
                          <CompactMusicItem key={song.rank} song={song} index={index + 1} />
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </Section>
  );
};
