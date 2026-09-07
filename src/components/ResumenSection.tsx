import { useState } from 'react';

export const ResumenSection = () => {
    const [filterTime, setFilterTime] = useState('Esta semana');

    const stats = [
        { label: 'Ventas de hoy', value: '$482.50', change: '+18.4% vs. ayer', isAlert: false, icon: '💲' },
        { label: 'Pedidos', value: '38', change: '+12.2% vs. ayer', isAlert: false, icon: '📋' },
        { label: 'Ticket promedio', value: '$12.70', change: '+4.8% vs. ayer', isAlert: false, icon: '📈' },
        { label: 'Alertas de stock', value: '3', change: 'Revisar ahora', isAlert: true, icon: '⚠️' },
    ];

    const popularProducts = [
        { rank: '01', name: 'Mango tropical', count: '86 vendidos', price: '$8.50' },
        { rank: '02', name: 'Green detox', count: '64 vendidos', price: '$11.00' },
        { rank: '03', name: 'Berry blast', count: '51 vendidos', price: '$9.50' },
        { rank: '04', name: 'Piña colada', count: '38 vendidos', price: '$7.00' },
    ];

    const chartData = [
        { day: 'Lun', height: '40%' },
        { day: 'Mar', height: '65%' },
        { day: 'Mié', height: '50%' },
        { day: 'Jue', height: '75%' },
        { day: 'Vie', height: '60%' },
        { day: 'Sáb', height: '95%', active: true },
        { day: 'Dom', height: '70%' },
    ];

    return (
        <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-stone-800">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <p className="text-xs text-stone-500 font-medium">Buenos días, María</p>
                    <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
                        Todo listo para un día <span className="text-[#1e6044]">refrescante.</span>
                    </h1>
                    <p className="text-xs text-stone-500 mt-1">Aquí tienes el pulso de Fruta & Pulpa.</p>
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

            {/* Gráfico y Productos Populares */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Rendimiento de ventas */}
                <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm space-y-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold text-stone-900">Rendimiento de ventas</h2>
                            <p className="text-xs text-stone-500">Ingresos de los últimos 7 días</p>
                        </div>
                        <select
                            value={filterTime}
                            onChange={(e) => setFilterTime(e.target.value)}
                            className="text-xs font-medium bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5 text-stone-700 outline-none"
                        >
                            <option>Esta semana</option>
                            <option>Mes anterior</option>
                        </select>
                    </div>

                    {/* Barras simples en Flexbox */}
                    <div className="h-48 flex items-end justify-between gap-2 pt-6 px-2">
                        {chartData.map((bar, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center h-full justify-end gap-2">
                                <div
                                    style={{ height: bar.height }}
                                    className={`w-full max-w-[40px] rounded-t-lg transition-all duration-300 ${bar.active ? 'bg-[#1e6044]' : 'bg-stone-200/80 hover:bg-stone-300'
                                        }`}
                                />
                                <span className="text-xs text-stone-400 font-medium">{bar.day}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs">
                        <span className="text-stone-500 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#1e6044]" /> Total esta semana: <strong className="text-stone-900">$2,846.80</strong>
                        </span>
                        <span className="text-emerald-600 font-bold">↗ 16.8%</span>
                    </div>
                </div>

                {/* Productos Populares */}
                <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm space-y-4">
                    <div>
                        <h2 className="font-bold text-stone-900">Productos populares</h2>
                        <p className="text-xs text-stone-500">Los favoritos de hoy</p>
                    </div>

                    <div className="space-y-3">
                        {popularProducts.map((prod) => (
                            <div key={prod.rank} className="flex items-center justify-between p-2 rounded-xl hover:bg-stone-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center">
                                        {prod.rank}
                                    </span>
                                    <div>
                                        <p className="font-semibold text-sm text-stone-900">{prod.name}</p>
                                        <p className="text-[11px] text-stone-400">{prod.count}</p>
                                    </div>
                                </div>
                                <span className="font-bold text-sm text-stone-900">{prod.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};