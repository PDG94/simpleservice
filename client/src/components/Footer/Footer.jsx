// import "../Footer/footer.css";
const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className="bg-secondary d-flex text-white justify-content-between fixed-bottom">
      <div className="col-12 justify-content-center text-center">
        &copy; {year} All Rights Reserved
      </div>
    </div>
  );
}
