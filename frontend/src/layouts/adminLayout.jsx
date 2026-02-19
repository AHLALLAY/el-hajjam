import AsideBar from '../components/ui/asideBar';

function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <AsideBar role={'admin'} />
            <main className="flex-1 bg-slate-800 min-h-screen p-4">
                {children}
            </main>
        </div>
    );
}

export default AdminLayout;