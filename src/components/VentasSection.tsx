import { useState } from 'react';

interface Sale {
    id: string;
    time: string;
    items: string;
    total: string;
}

export const VentasSection = () => {
    const [sales, setSales] = useState<Sale[]>([
        { id: '#1024', time: '12:45 PM', items: '2x Mango tropical, 1x Berry blast', total: '$26.50' },
        { id: '#1023', time: '12:30 PM', items: '1x Green detox', total: '$11.00' },
        { id: '#1022', time: '12:15 PM', items: '3x Piña colada', total: '$21.00' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleAddSale = (e: React.FormEvent) => {
        e.preventDefault();
        if (!productName.trim() || !quantity || !price) return;

        const qtyNum = Number(quantity);
        const priceNum = Number(price);
        const totalAmount = (qtyNum * priceNum).toFixed(2);

        const currentTime = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

        const newSale: Sale = {
            id: `#${Math.floor(1000 + Math.random() * 9000)}`,
            time: currentTime,
            items: `${qtyNum}x ${productName.trim()}`,
            total: `$${totalAmount}`,
        };

        setSales((prev) => [newSale, ...prev]);
        setProductName('');
        setQuantity('');
        setPrice('');
        setIsModalOpen(false);
    };

    return (
        <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-stone-800">
            {/* Contenedor Principal */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-6">
                <div>
                    <h2 className="text-xl font-bold text-stone-900">Ventas</h2>
                    <p className="text-base text-stone-500">Registro detallado de lo que vendes pomposa</p>
                </div>

                {/* Lista de ventas */}
                <div className="space-y-3">
                    {sales.map((sale) => (
                        <div
                            key={sale.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-stone-100 hover:bg-stone-50 transition-colors gap-3"
                        >
                            {/* Izquierda: ID y Hora */}
                            <div className="flex items-center gap-2 shrink-0">
                                <span className="font-bold text-stone-900 text-sm">{sale.id}</span>
                                <span className="text-[11px] text-stone-400">{sale.time}</span>
                            </div>

                            {/* Derecha / Centro: Producto a la izquierda y Precio a la derecha */}
                            <div className="flex items-center justify-between gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-stone-100">
                                <p className="text-xs font-medium text-stone-700 truncate">{sale.items}</p>
                                <span className="font-bold text-stone-900 text-sm shrink-0">{sale.total}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón en la parte de abajo, centrado */}
                <div className="pt-2 flex justify-center border-t border-stone-100">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1e6044] hover:bg-[#164833] text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
                    >
                        <span>+</span> Registrar Venta
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl border border-stone-100 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                        <div className="relative flex items-center justify-center">
                            <h3 className="text-lg font-bold text-stone-900 text-center">
                                Registrar nueva venta
                            </h3>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="absolute right-0 p-1 rounded-lg text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleAddSale} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-stone-600 mb-1">
                                    Nombre del producto
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ej. Mango tropical"
                                    value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-[#1e6044] text-stone-800 placeholder-stone-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-stone-600 mb-1">
                                    Cantidad
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    required
                                    placeholder="Ej. 2"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-[#1e6044] text-stone-800 placeholder-stone-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-stone-600 mb-1">
                                    Costo ($)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    required
                                    placeholder="Ej. 8.50"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-[#1e6044] text-stone-800 placeholder-stone-400"
                                />
                            </div>

                            <div className="flex items-center justify-center gap-3 pt-3">
                                <button
                                    type="submit"
                                    className="bg-[#1e6044] hover:bg-[#164833] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
                                >
                                    Agregar venta
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-[#e62107] hover:bg-[#c41a00] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};