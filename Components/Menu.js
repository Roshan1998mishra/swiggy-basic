// pages/menu.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import burger from "@/public/burger.jpg"

const Menu = () => {
  return (
    <div>
      <Head>
        <title>Swiggy-basic App</title>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" /> */}
      </Head>

      <div className="container">
        <h1 className="mt-4 mb-4">Menu</h1>

        <div className="row">
          {/* Sample Menu Items */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <Image src={burger} alt='burger'></Image>
              <div className="card-body">
                <h5 className="card-title">Item 1</h5>
                <p className="card-text">Description of item 1.</p>
                <Link href="/menu/item1">
                  <p className="btn btn-primary">View Details</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
            <Image src={burger} alt='burger'></Image>
              <div className="card-body">
                <h5 className="card-title">Item 2</h5>
                <p className="card-text">Description of item 2.</p>
                <Link href="/menu/item2">
                  <p className="btn btn-primary">View Details</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Add more menu items here */}

          <div className="col-md-4 mb-4">
            <div className="card">
            <Image src={burger} alt='burger'></Image>
              <div className="card-body">
                <h5 className="card-title">Item 1</h5>
                <p className="card-text">Description of item 1.</p>
                <Link href="/menu/item1">
                  <p className="btn btn-primary">View Details</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
            <Image src={burger} alt='burger'></Image>
              <div className="card-body">
                <h5 className="card-title">Item 2</h5>
                <p className="card-text">Description of item 2.</p>
                <Link href="/menu/item2">
                  <p className="btn btn-primary">View Details</p>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;
