import Header from "../header";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
