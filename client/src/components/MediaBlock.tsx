interface MediaBlockProps {
  type: "video" | "image";
  color: "light" | "dark";
  className?: string;
}

const MediaBlock = ({ type, color, className = "" }: MediaBlockProps) => {
  const bgColor = color === "dark" ? "bg-secondary" : "bg-muted";
  
  return (
    <div className={`relative ${bgColor} aspect-square ${className}`}>
      <div className="play-button"></div>
    </div>
  );
};

export default MediaBlock;
