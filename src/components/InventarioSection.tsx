import { useState } from 'react';

interface Ingredient {
    id: string;
    name: string;
    stock: number;
}

export const InventarioSection = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { id: '1', name: 'Mango', stock: 18 },
        { id: '2', name: 'Fresa', stock: 4 },
        { id: '3', name: 'Piña', stock: 12 },
        { id: '4', name: 'Leche de almendras', stock: 9 },
        { id: '5', name: 'Espinaca', stock: 2 },
        { id: '6', name: 'Açaí', stock: 0 },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newIngredientName, setNewIngredientName] = useState('');
    const [newIngredientStock, setNewIngredientStock] = useState('');

    const handleAddIngredient = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newIngredientName.trim() || newIngredientStock === '') return;

        const newIngredient: Ingredient = {
            id: Date.now().toString(),
            name: newIngredientName.trim(),
            stock: Number(newIngredientStock),
        };

        setIngredients((prev) => [...prev, newIngredient]);
        setNewIngredientName('');
        setNewIngredientStock('');
        setIsModalOpen(false);
    };

    return (
        <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-stone-800">
            {/* Contenedor principal */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-stone-900">Inventario de ingredientes</h2>
                        <p className="text-xs text-stone-500">
                            Controla las unidades disponibles de tus ingredientes.
                        </p>
                    </div>
                </div>

                {/* Tabla */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-stone-100 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                                <th className="pb-3">Ingrediente</th>
                                <th className="pb-3 text-right">Cantidad disponible</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 text-sm">
                            {ingredients.map((item) => (
                                <tr key={item.id} className="hover:bg-stone-50/60 transition-colors">
                                    <td className="py-4 font-bold text-stone-900">{item.name}</td>
                                    <td className="py-4 font-semibold text-stone-800 text-right">
                                        {item.stock} {item.stock === 1 ? 'unidad' : 'unidades'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Botón inferior para abrir el modal */}
                <div className="pt-2 flex justify-end border-t border-stone-100">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1e6044] hover:bg-[#164833] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
                    >
                        <span>+</span> Añadir ingrediente
                    </button>
                </div>
            </div>

            {/* Modal para agregar ingrediente */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl border border-stone-100 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-stone-900">Añadir nuevo ingrediente</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-stone-400 hover:text-stone-700 p-1 rounded-lg transition-colors cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleAddIngredient} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-stone-600 mb-1">
                                    Nombre del ingrediente
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ej. Mango, Leche, Fresa"
                                    value={newIngredientName}
                                    onChange={(e) => setNewIngredientName(e.target.value)}
                                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-[#1e6044] text-stone-800 placeholder-stone-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-stone-600 mb-1">
                                    Cantidad disponible (unidades)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    required
                                    placeholder="Ej. 10"
                                    value={newIngredientStock}
                                    onChange={(e) => setNewIngredientStock(e.target.value)}
                                    className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-[#1e6044] text-stone-800 placeholder-stone-400"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-2 pt-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#1e6044] hover:bg-[#164833] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
                                >
                                    Guardar ingrediente
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};