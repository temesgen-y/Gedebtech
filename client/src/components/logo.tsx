import { Link } from "wouter";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  linkToHome?: boolean;
  testId?: string;
}

export function Logo({ className = "", showTagline = true, linkToHome = true, testId = "link-logo" }: LogoProps) {
  const logoContent = (
    <div className={`flex flex-col items-center justify-center ${className} overflow-visible`}>
      {/* Main Logo Text - GedebTech as one word */}
      <div className="flex items-center gap-0 leading-none whitespace-nowrap">
        <span 
          className="text-3xl lg:text-4xl font-bold tracking-tight inline-block"
          style={{
            color: '#22589D', // Fallback color
            background: 'linear-gradient(135deg, #22589D 0%, #1a4680 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}
        >
          Gedeb
        </span>
        <span 
          className="text-3xl lg:text-4xl font-bold tracking-tight inline-block"
          style={{
            color: '#52A645', // Fallback color
            background: 'linear-gradient(135deg, #52A645 0%, #3d7d33 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}
        >
          Tech
        </span>
      </div>
      
      {/* SOLUTIONS Tagline with lines */}
      {showTagline && (
        <div className="flex items-center gap-2 mt-1.5 w-full justify-center overflow-visible">
          <div className="h-px w-8 bg-[#7A7A7A] flex-shrink-0"></div>
          <span 
            className="text-xs tracking-widest uppercase font-light whitespace-nowrap"
            style={{ color: '#7A7A7A' }}
          >
            SOLUTIONS
          </span>
          <div className="h-px w-8 bg-[#7A7A7A] flex-shrink-0"></div>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center overflow-visible" data-testid={testId}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
