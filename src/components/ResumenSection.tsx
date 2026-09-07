import { useState } from 'react';
import { motion } from 'framer-motion';

interface HistoryItem {
    id: string;
    type: 'sale' | 'ingredient';
    title: string;
    detail: string;
    time: string;
    amount?: string;
}

interface WeeklyHistory {
    id: string;
    weekLabel: string;
    dateRange: string;
    items: HistoryItem[];
}

// Subcomponente aislado para evitar colisiones de animación en el DOM
const ActivityCard = ({
    item,
    delayIndex,
}: {
    item: HistoryItem;
    delayIndex: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.25,
                delay: delayIndex * 0.05,
                ease: 'easeOut',
            }}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-stone-100 hover:bg-stone-50 transition-colors gap-3 cursor-pointer"
        >
            <div className="flex items-start gap-3">
                <div
                    className={`p-2 rounded-xl text-xs shrink-0 ${item.type === 'sale'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-amber-50 text-amber-700'
                        }`}
                >
                    {item.type === 'sale' ? '🛍️' : '📦'}
                </div>

                <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-900 text-xs">
                            {item.title}
                        </span>
                        <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.type === 'sale'
                                    ? 'bg-emerald-100/70 text-emerald-800'
                                    : 'bg-amber-100/70 text-amber-800'
                                }`}
                        >
                            {item.type === 'sale' ? 'Venta' : 'Ingrediente'}
                        </span>
                    </div>
                    <p className="text-xs text-stone-600">{item.detail}</p>
                </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-0 border-stone-100">
                <span className="text-[11px] text-stone-400">{item.time}</span>
                {item.amount && (
                    <span className="font-bold text-emerald-700 text-xs bg-emerald-50 px-2.5 py-1 rounded-lg">
                        {item.amount}
                    </span>
                )}
            </div>
        </motion.div>
    );
};

export const ResumenSection = () => {
    const [historyData] = useState<WeeklyHistory[]>([
        {
            id: 'week-sep-1',
            weekLabel: 'Esta Semana',
            dateRange: '01 Sep - 07 Sep',
            items: [
                {
                    id: 'h-101',
                    type: 'sale',
                    title: 'Venta registrada',
                    detail: '2x Mango tropical, 1x Berry blast',
                    time: 'Hoy, 12:45 PM',
                    amount: '+$26.50',
                },
                {
                    id: 'h-102',
                    type: 'ingredient',
                    title: 'Ingrediente agregado',
                    detail: '+5.0 kg Pulpa de Mango',
                    time: 'Ayer, 04:15 PM',
                },
                {
                    id: 'h-103',
                    type: 'sale',
                    title: 'Venta registrada',
                    detail: '3x Piña colada',
                    time: '04 Sep, 02:20 PM',
                    amount: '+$21.00',
                },
                {
                    id: 'h-104',
                    type: 'ingredient',
                    title: 'Ingrediente agregado',
                    detail: '+10.0 L Leche de Coco',
                    time: '02 Sep, 09:30 AM',
                },
            ],
        },
        {
            id: 'week-aug-4',
            weekLabel: 'Semana Anterior',
            dateRange: '25 Ago - 31 Ago',
            items: [
                {
                    id: 'h-105',
                    type: 'sale',
                    title: 'Venta registrada',
                    detail: '4x Green detox',
                    time: '30 Ago, 06:10 PM',
                    amount: '+$44.00',
                },
                {
                    id: 'h-106',
                    type: 'ingredient',
                    title: 'Ingrediente agregado',
                    detail: '+3.0 kg Frascos de Vidrio',
                    time: '28 Ago, 11:00 AM',
                },
                {
                    id: 'h-107',
                    type: 'sale',
                    title: 'Venta registrada',
                    detail: '2x Berry blast',
                    time: '26 Ago, 01:15 PM',
                    amount: '+$18.00',
                },
            ],
        },
    ]);

    return (
        <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto font-sans text-stone-800">
            <div>
                <h2 className="text-xl font-bold text-stone-900">Historial de Actividad</h2>
                <p className="text-sm text-stone-500">
                    Para que no se te olvide nada mi amor
                </p>
            </div>

            <div className="space-y-6">
                {historyData.map((week, weekIdx) => (
                    <motion.div
                        key={week.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: weekIdx * 0.1 }}
                        className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 space-y-4"
                    >
                        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                            <h3 className="font-bold text-stone-900 text-sm">{week.weekLabel}</h3>
                            <span className="text-xs font-medium text-stone-400 bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-100">
                                {week.dateRange}
                            </span>
                        </div>

                        <div className="space-y-3">
                            {week.items.map((item, itemIdx) => (
                                <ActivityCard
                                    key={item.id}
                                    item={item}
                                    delayIndex={weekIdx * 4 + itemIdx}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};