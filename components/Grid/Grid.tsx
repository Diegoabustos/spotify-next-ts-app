type GridProps = {
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, className }: GridProps) => (
  <div className={className}>
    <div className="grid grid-cols-auto-fill gap-8">{children}</div>
  </div>
)

export default Grid