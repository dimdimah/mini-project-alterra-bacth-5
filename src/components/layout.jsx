export default function Layout({ children }) {
  return (
    <div className="w-full h-screen overflow-auto bg-white text-neutral-800">
      <div className="w-full px-10 py-4 grow">{children}</div>
    </div>
  );
}
