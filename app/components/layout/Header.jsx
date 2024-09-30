import Link from 'next/link';

function Header() {
    const menuItems = ["Budget", "Expense", "Tracker"];

    return (
        <header className='bg-dark shadow-sm'>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Link href="/" className='text-white text-decoration-none'>
                        <h1>LOGO</h1>
                    </Link>
                    <nav>
                        <ul className='d-flex m-0 gap-3'>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={`/${item.toLowerCase()}`} className='text-decoration-none text-white px-3 py-2 rounded-2'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
