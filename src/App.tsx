import { useState } from 'react'
import './App.css'
import { SidebarMobile } from './components/navbar'
import { ResumenSection } from './components/ResumenSection'
import { InventarioSection } from './components/InventarioSection'
import { VentasSection } from './components/VentasSection'

function App() {
  // Estado para controlar qué sección se ve ('resumen', 'inventario' o 'ventas')
  const [activeTab, setActiveTab] = useState('resumen')

  return (
    <>
      {/* Pasamos el estado y la función para cambiarlo */}
      <SidebarMobile activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="bg-[#fbf9f5] min-h-screen">
        {activeTab === 'resumen' && <ResumenSection />}
        {activeTab === 'inventario' && <InventarioSection />}
        {activeTab === 'ventas' && <VentasSection />}
      </main>
    </>
  )
}

export default App