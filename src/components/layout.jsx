export default function Layout({ children }) {
  return (
    <div className="w-full h-screen overflow-auto bg-white text-neutral-800">
      <div className="w-11/12 px-8 py-4 mx-auto grow">{children}</div>
    </div>
  );
}
