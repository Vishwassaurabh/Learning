const Layout = (props) => {
  return (
    <div>
      {/* header */}
      <hearder>
        <h1>{props.tittle}</h1>
      </hearder>

      {/* main */}
      <main>{props.children}</main>

      {/* footer */}
      <footer>
        <p> &copy; All reserved by Vishwas Saurabh</p>
      </footer>
    </div>
  );
};

export default Layout;
