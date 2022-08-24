type GridProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Grid = ({ children, title, className }: GridProps) => (

  <div className={className}>
    <h2 className="text-xl font-bold pb-4">{title}</h2>
    <div className="grid grid-cols-auto-fill gap-8">{children}</div>
  </div>
)

export default Grid