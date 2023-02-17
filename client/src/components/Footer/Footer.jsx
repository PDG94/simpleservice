const date = new Date();
const year = date.getFullYear();

export default function Footer(){
  return <div className='footer'> &copy; {year} All Rights Reserved</div>;
};
