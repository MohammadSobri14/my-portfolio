import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MusicToggleProps {
  isMuted: boolean;
  onToggle: () => void;
}

const MusicToggle = ({ isMuted, onToggle }: MusicToggleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        onClick={onToggle}
        variant="outline"
        size="icon"
        className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:bg-background/90 transition-all duration-300 shadow-lg"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        <motion.div
          key={isMuted ? "muted" : "unmuted"}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Volume2 className="h-5 w-5 text-primary" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default MusicToggle;
