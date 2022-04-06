import Link from 'next/link';
const Menu = () => {
    return (
        <div>
            Menu works!
            <div>
                <Link href="/">
                    <a>
                        Back to home
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Menu;