export default function VisualImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
}) {
  if (!src) return null;

  return (
    <div className={`overflow-hidden rounded-lg bg-navy ${className}`}>
      <img
        src={src}
        alt={alt || ""}
        loading={loading}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
