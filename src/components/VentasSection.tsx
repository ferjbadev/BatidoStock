import { useState } from 'react';

export const VentasSection = () => {
    const [sales] = useState([
        { id: '#1024', time: '12:45 PM', items: '2x Mango tropical, 1x Berry blast', total: '$26.50', status: 'Completado' },
        { id: '#1023', time: '12:30 PM', items: '1x Green detox', total: '$11.00', status: 'Completado' },
        { id: '#1022', time: '12:15 PM', items: '3x Piña colada', total: '$21.00', status: 'Completado' },
    ]);

    return (
        <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-stone-800">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-stone-900">Historial de Ventas</h2>
                        <p className="text-xs text-stone-500">Registro detallado de transacciones recientes.</p>
                    </div>
                    <button className="bg-[#1e6044] hover:bg-[#164833] text-white px-4 py-2 rounded-xl text-xs font-medium shadow-xs">
                        + Registrar Venta
                    </button>
                </div>

                <div className="space-y-3">
                    {sales.map((sale) => (
                        <div key={sale.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-stone-100 hover:bg-stone-50 transition-colors gap-2">
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-stone-900 text-sm">{sale.id}</span>
                                    <span className="text-[11px] text-stone-400">{sale.time}</span>
                                </div>
                                <p className="text-xs text-stone-600">{sale.items}</p>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-0 border-stone-100">
                                <span className="font-bold text-stone-900 text-sm">{sale.total}</span>
                                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">
                                    {sale.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};