interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconOnly?: boolean;
}

export default function Logo({ iconOnly = false, ...props }: IconProps) {
  return (
    <img
      src="/logo.png" // coloque seu arquivo PNG em /public/logo.png
      alt="Logo"
      style={{ height: '100%' }}
      {...props}
    />
  );
}
