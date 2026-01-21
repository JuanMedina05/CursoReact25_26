import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-white border-b border-slate-200 p-8 flex jusitfy-center item-center gap-12 shadow-sm mb-10 top-0 sticky">
        <Link to="/" className="text-slate-400 hover:text-slate-900 uppercase text-2xl transition-all">Inicio</Link>
        <NavLink to="/contact" className={({ isActive }) =>
    isActive
      ? "text-slate-900 uppercase text-2xl transition-all isactive"
      : "text-slate-400 hover:text-slate-900 uppercase text-2xl transition-all isnotactive"
  }>Contacto</NavLink>
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-slate-900 uppercase text-2xl transition-all isactive"
      : "text-slate-400 hover:text-slate-900 uppercase text-2xl transition-all isnotactive"
  }
>
  Sobre Nosotros
</NavLink>
    </div>
  )
}
  export default Navbar

