
export const ResumenSection = () => {
    const stats = [
        { label: 'Ventas de hoy', value: '$482.50', change: '+18.4% vs. ayer', isAlert: false, icon: '💲' },
        { label: 'Pedidos', value: '38', change: '+12.2% vs. ayer', isAlert: false, icon: '📋' },
        { label: 'Ticket promedio', value: '$12.70', change: '+4.8% vs. ayer', isAlert: false, icon: '📈' },
        { label: 'Alertas de stock', value: '3', change: 'Revisar ahora', isAlert: true, icon: '⚠️' },
    ];

    return (
        <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-stone-800">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
                        Todo listo para un día <span className="text-[#1e6044]">refrescante.</span>
                    </h1>
                </div>
                <button className="bg-[#1e6044] hover:bg-[#164833] text-white px-5 py-2.5 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 self-start sm:self-auto">
                    <span>+</span> Nueva venta
                </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex justify-between items-start">
                        <div className="space-y-1">
                            <p className="text-xs font-medium text-stone-500">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-stone-900">{stat.value}</h3>
                            <p className={`text-xs font-semibold ${stat.isAlert ? 'text-rose-600' : 'text-emerald-600'}`}>
                                {stat.change}
                            </p>
                        </div>
                        <div className={`p-2.5 rounded-xl text-sm ${stat.isAlert ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-700'}`}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};