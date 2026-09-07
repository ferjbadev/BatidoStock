import { useState } from 'react';

interface Ingredient {
    id: string;
    name: string;
    category: string;
    stock: string;
    consumption: number;
    status: 'Normal' | 'Bajo stock' | 'Agotándose' | 'Agotado';
}

export const InventarioSection = () => {
    const [filter, setFilter] = useState<'Todos' | 'Bajo stock' | 'Agotados'>('Todos');

    const ingredients: Ingredient[] = [
        { id: '1', name: 'Mango', category: 'Frutas', stock: '18 kg', consumption: 82, status: 'Normal' },
        { id: '2', name: 'Fresa', category: 'Frutas', stock: '4 kg', consumption: 91, status: 'Bajo stock' },
        { id: '3', name: 'Piña', category: 'Frutas', stock: '12 kg', consumption: 66, status: 'Normal' },
        { id: '4', name: 'Leche de almendras', category: 'Lácteos', stock: '9 L', consumption: 58, status: 'Normal' },
        { id: '5', name: 'Espinaca', category: 'Verduras', stock: '2 kg', consumption: 96, status: 'Agotándose' },
        { id: '6', name: 'Açaí', category: 'Superfoods', stock: '0 kg', consumption: 100, status: 'Agotado' },
    ];

    const filteredIngredients = ingredients.filter((item) => {
        if (filter === 'Bajo stock') return item.status === 'Bajo stock' || item.status === 'Agotándose';
        if (filter === 'Agotados') return item.status === 'Agotado';
        return true;
    });

    const getStatusBadge = (status: Ingredient['status']) => {
        switch (status) {
            case 'Normal':
                return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">Normal</span>;
            case 'Bajo stock':
                return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">Bajo stock</span>;
            case 'Agotándose':
                return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">Agotándose</span>;
            case 'Agotado':
                return <span className="px-3 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-800">Agotado</span>;
        }
    };

    return (
        <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-stone-800">
            {/* Contenedor principal */}
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-6">
                {/* Header y Filtros */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-stone-900">Inventario de ingredientes</h2>
                        <p className="text-xs text-stone-500">Controla existencias y evita quedarte sin lo esencial.</p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                        {(['Todos', 'Bajo stock', 'Agotados'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-4 py-1.5 text-xs font-medium rounded-xl transition-all ${filter === tab
                                        ? 'bg-[#1e6044] text-white shadow-xs'
                                        : 'bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tabla Responsiva */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-stone-100 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                                <th className="pb-3">Ingrediente</th>
                                <th className="pb-3">Categoría</th>
                                <th className="pb-3">Existencias</th>
                                <th className="pb-3">Consumo</th>
                                <th className="pb-3">Estado</th>
                                <th className="pb-3 text-right">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 text-sm">
                            {filteredIngredients.map((item) => (
                                <tr key={item.id} className="hover:bg-stone-50/60 transition-colors">
                                    <td className="py-4 font-bold text-stone-900">{item.name}</td>
                                    <td className="py-4 text-stone-500 text-xs">{item.category}</td>
                                    <td className="py-4 font-medium text-stone-800">{item.stock}</td>
                                    <td className="py-4 w-40">
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                                                <div
                                                    style={{ width: `${item.consumption}%` }}
                                                    className={`h-full rounded-full ${item.consumption > 85 ? 'bg-rose-500' : 'bg-[#1e6044]'
                                                        }`}
                                                />
                                            </div>
                                            <span className="text-xs text-stone-400 font-medium w-8">{item.consumption}%</span>
                                        </div>
                                    </td>
                                    <td className="py-4">{getStatusBadge(item.status)}</td>
                                    <td className="py-4 text-right">
                                        <button className="text-xs font-bold text-[#1e6044] hover:underline">
                                            Reponer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};