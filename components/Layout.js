import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      {/* /on all pages */}
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
