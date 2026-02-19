import { Link } from 'react-router-dom';

function AsideBar({ role, className = '' }) {

    const adminMenu = [
        { label: 'Dashboard', path: '/admin/dashboard' },
        { label: 'Personels', path: '/admin/personnel' },
        { label: 'operations', path: '/admin/operations' },
        { label: 'products', path: '/admin/products' },
        
    ];
    const hairdresserMenu = [
        { label: 'dashboard', path: '/hairdresser/dashboard' },
        { label: 'operations', path: '/hairdresser/me/operations' },
    ];

    const menu = role === 'admin' ? adminMenu : hairdresserMenu;

    const defaultStyle = `flex flex-col space-y-8 min-h-screen w-56 bg-slate-700 p-8 text-yellow-700 font-semibold ${className}`;
    return (
        <aside className={defaultStyle}>
            <div>
                <img src="/logo.jpg" alt="logo" />
            </div>
            {menu && menu.map((item) => {
                return <Link key={item.path} to={item.path} className='flex justify-center items-center hover:border-b-2 border-yellow-500 transition'>{item.label}</Link>
            })}
        </aside>
    );
}

export default AsideBar