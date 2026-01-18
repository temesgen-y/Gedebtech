import { Link } from "wouter";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  linkToHome?: boolean;
  testId?: string;
}

export function Logo({ className = "", showTagline = true, linkToHome = true, testId = "link-logo" }: LogoProps) {
  const logoContent = (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Main Logo Text */}
      <div className="flex items-center">
        <span 
          className="text-3xl lg:text-4xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #22589D 0%, #1a4680 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Gedeb
        </span>
        <span 
          className="text-3xl lg:text-4xl font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #52A645 0%, #3d7d33 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Tech
        </span>
      </div>
      
      {/* SOLUTIONS Tagline with lines */}
      {showTagline && (
        <div className="flex items-center gap-2 mt-1">
          <div className="h-px w-8 bg-[#7A7A7A]"></div>
          <span 
            className="text-xs tracking-widest uppercase font-light"
            style={{ color: '#7A7A7A' }}
          >
            SOLUTIONS
          </span>
          <div className="h-px w-8 bg-[#7A7A7A]"></div>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center" data-testid={testId}>
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
