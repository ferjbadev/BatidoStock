import { useState } from 'react';

// Tipado de las opciones de menú
interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

export const SidebarMobile = () => {
  const [activeTab, setActiveTab] = useState<string>('resumen');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const menuItems: MenuItem[] = [
    {
      id: 'resumen',
      label: 'Resumen',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      id: 'inventario',
      label: 'Inventario',
      badge: 3,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 'ventas',
      label: 'Ventas',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 'productos',
      label: 'Productos',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-3 bg-[#1e6044] text-white rounded-xl shadow-lg z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    );
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-full max-w-[320px] bg-[#fbf9f5] flex flex-col justify-between p-5 border-r border-stone-200/60 font-sans text-stone-800 shadow-xl">
      {/* Header / Brand */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#1e6044] flex items-center justify-center text-white shadow-sm">
              {/* Icono de gota/hoja */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0zM12 18a4 4 0 004-4c0-2-2-4-4-6-2 2-4 4-4 6a4 4 0 004 4z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight text-stone-900">Fruta & Pulpa</h2>
              <p className="text-xs text-stone-500 font-medium">Panel de control</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links de Navegación */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 font-medium text-base ${
                  isActive
                    ? 'bg-[#1e6044] text-white shadow-sm'
                    : 'text-stone-600 hover:bg-stone-200/40 hover:text-stone-900'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={isActive ? 'text-white' : 'text-stone-500'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-rose-100 text-rose-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / Banner + Perfil */}
      <div className="space-y-4">
        {/* Banner Informativo */}
        <div className="bg-[#eaf3de] p-4 rounded-2xl space-y-1.5 border border-[#d8e8c5]">
          <div className="text-[#2d6a4f]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="font-bold text-stone-900 text-sm">Tu operación, más fresca</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Revisa los ingredientes antes del próximo turno.
          </p>
        </div>

        <hr className="border-stone-200/80" />

        {/* Perfil de Usuario */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-stone-200/80 text-stone-700 font-semibold text-sm flex items-center justify-center">
              MR
            </div>
            <div>
              <p className="font-bold text-stone-900 text-sm leading-tight">María Rodríguez</p>
              <p className="text-xs text-stone-500 font-medium">Administradora</p>
            </div>
          </div>
          <button className="text-stone-400 hover:text-stone-700 p-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
};