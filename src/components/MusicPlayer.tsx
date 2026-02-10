import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  albumArt?: string;
  songTitle?: string;
  artist?: string;
}

const MusicPlayer = ({
  isPlaying,
  onTogglePlay,
  volume,
  onVolumeChange,
  albumArt = "/placeholder.svg",
  songTitle = "About You",
  artist = "The 1975",
}: MusicPlayerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Card className="bg-background/95 backdrop-blur-md border-primary/20 shadow-xl p-4 w-80">
        <div className="flex items-center gap-4">
          {/* Album Art */}
          <motion.div
            className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={albumArt}
              alt={`${songTitle} album art`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Song Info and Controls */}
          <div className="flex-1 min-w-0">
            <div className="mb-2">
              <h3 className="text-sm font-semibold text-foreground truncate">
                {songTitle}
              </h3>
              <p className="text-xs text-muted-foreground truncate">{artist}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Play/Pause Button */}
              <Button
                onClick={onTogglePlay}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-primary/10"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                <motion.div
                  key={isPlaying ? "playing" : "paused"}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 text-primary" />
                  ) : (
                    <Play className="h-4 w-4 text-primary" />
                  )}
                </motion.div>
              </Button>

              {/* Volume Control */}
              <div className="flex items-center gap-2 flex-1">
                <Button
                  onClick={() => onVolumeChange(volume === 0 ? 0.3 : 0)}
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  aria-label={volume === 0 ? "Unmute" : "Mute"}
                >
                  {volume === 0 ? (
                    <VolumeX className="h-3 w-3 text-muted-foreground" />
                  ) : (
                    <Volume2 className="h-3 w-3 text-primary" />
                  )}
                </Button>
                <Slider
                  value={[volume * 100]}
                  onValueChange={(values) => onVolumeChange(values[0] / 100)}
                  max={100}
                  step={1}
                  className="flex-1"
                  aria-label="Volume control"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default MusicPlayer;
