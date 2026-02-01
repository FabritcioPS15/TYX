interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
