export function MainContainer({ children }) {
  return (
    <div className="bg-blue-(--color-primary) max-w-2xl flex-1 p-4">
      {children}
    </div>
  );
}
