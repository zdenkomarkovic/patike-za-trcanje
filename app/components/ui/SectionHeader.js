import { cn } from "@/app/lib/utils";

export default function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
  titleClassName = "text-white",
  descriptionClassName = "text-white",
  centered = true,
  ...props
}) {
  return (
    <div
      className={cn("mb-16", centered && "text-center", className)}
      {...props}
    >
      {subtitle && (
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full text-sm font-semibold mb-4">
          {subtitle}
        </div>
      )}
      <h2 className={cn("text-3xl lg:text-4xl font-bold mb-4", titleClassName)}>
        {title}
      </h2>
      {description && (
        <p
          className={cn("text-xl", descriptionClassName, centered && "max-w-3xl mx-auto")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
