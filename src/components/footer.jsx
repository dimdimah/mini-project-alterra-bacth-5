function ReusableFooter({ title, description }) {
  return (
    <footer className="py-4">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} {title}
        </div>
        <div className="text-sm">{description}</div>
      </div>
    </footer>
  );
}

export default ReusableFooter;
