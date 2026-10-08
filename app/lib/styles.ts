export const btnPrimary = `
  inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
  font-semibold text-background
  bg-gradient-to-r from-primary via-primary to-secondary
  hover:from-primary-glow hover:to-primary
  transition-all duration-300
  hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,212,170,0.4)]
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
`;

export const btnSecondary = `
  inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
  font-semibold text-primary border-2 border-primary
  bg-transparent hover:bg-primary hover:text-background
  transition-all duration-300
  hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,212,170,0.3)]
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
`;

export const btnGhost = `
  inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
  font-medium text-muted hover:text-foreground
  bg-transparent hover:bg-card-border
  transition-all duration-300
  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
`;

export const gradientText = `
  bg-gradient-to-r from-primary via-primary-glow to-secondary
  bg-clip-text text-transparent
`;

export const cardStyles = `
  glass rounded-2xl p-6 border border-card-border
  transition-all duration-300
  hover:border-primary/50 hover:shadow-lg
`;

export const sectionContainer = `
  max-w-7xl mx-auto px-6 py-24 md:py-32
`;

export const sectionTitle = `
  text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6
`;

export const sectionSubtitle = `
  text-lg text-muted leading-relaxed max-w-2xl
`;

export const badgeStyles = `
  inline-flex items-center gap-2 px-4 py-2 rounded-full
  bg-primary/10 border border-primary/20 text-primary text-sm font-medium
`;

export const inputStyles = `
  w-full px-4 py-3 rounded-xl border border-card-border
  bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20
  transition-colors outline-none
  placeholder:text-muted/50
  disabled:opacity-50 disabled:cursor-not-allowed
`;