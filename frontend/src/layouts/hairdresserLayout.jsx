function hairdresserLayout({children}) {
    return (
        <div className="flex min-h-screen">
            <AsideBar role={'coiffeur'} />
            <main className="flex-1 bg-slate-800 min-h-screen p-4">
                {children}
            </main>
        </div>
    );
}

export default hairdresserLayout;
